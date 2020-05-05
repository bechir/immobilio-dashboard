import { Component, OnInit } from '@angular/core';
import { Agence } from 'src/app/models/agence';
import { ActivatedRoute } from '@angular/router';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

import { StatisticsRepository } from '../statistics-repository.service';
import { PieChart, BarChart } from 'src/app/models/charts.model';
import { ChartUtilsService } from 'src/app/services/chart-utils.service';

@Component({
  selector: 'app-agence-report',
  templateUrl: './agence-report.component.html',
  styleUrls: ['./agence-report.component.scss']
})
export class AgenceReportComponent implements OnInit {
  title: string = 'Statistiques ';
  agence?: Agence;

  errorMessage?: string;

  errors = new Map<string, string>();
  DATA_UNAVAILABLE = "Données non disponibles.";

  occupationsPieChart?: PieChart;
  invoiceByAgenceChart?: BarChart;
  expensesByNatureExpenseChart?: BarChart;

  public pieChartOptions: ChartOptions = {
    responsive: true
  };

  public pieChartLabel: Label[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend: boolean = true;
  public pieChartPlugins = [];

  public pieChartData: SingleDataSet = [];

  constructor(private chartUtils: ChartUtilsService, private route: ActivatedRoute, private repository: StatisticsRepository) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    const { id } = this.route.snapshot.params;

    this.repository.getAgence(id)
      .subscribe((agence: Agence) => {
        this.agence = agence;
        this.title += agence.name;
        this.handleTauxOccupation();
        this.handleInvoiceByAgence();
        this.handleExpensesByNatureExpense();
      },
        errResp => this.errorMessage = errResp.error.errorMessage
      );
  }

  handleExpensesByNatureExpense() {
    this.repository.getExpensesByNatureExpense()
    .subscribe(async (data) => {
      if(Object.keys(data).length !== 0) {
        let datasets: ChartDataSets[] = [];
        let labels = this.chartUtils.getChartLabelsForMonths(Object.keys(data));
        await this.chartUtils.transFormJsonForBarChart(data)
          .forEach((items, label) => {
            datasets.push({ data: items, label: label });
        });
        this.expensesByNatureExpenseChart = { datasets, labels, legend: true };
      } else {
        this.errors.set('expensesByNature', this.DATA_UNAVAILABLE)
      }
    },
    resp => this.errors.set('expensesByNature', resp.error.message)
  );
  }

  handleTauxOccupation() {
    this.repository.getTauxOccupationByAgenceByNatureEspace(this.agence.code).subscribe(data => {
      if (Object.keys(data).length !== 0) {
        let dataset: SingleDataSet = [];
        let label = [];
        let sum: number = 0;
        Object.values(data).forEach(entry => {
          const value = entry['occupations'];
          label.push(entry['type']);
          dataset.push(value);
          sum += +value;
        });
        this.occupationsPieChart = {label, data: dataset, sum};
      }
    },
      errorResp => this.errorMessage = errorResp.error.message
    );
  }

  handleInvoiceByAgence() {
    this.repository.getInvoiceByAgence(this.agence.id)
    .subscribe((data) => {
      const handleData = async () => {
        let datasets: ChartDataSets[] = [];
        let labels = this.chartUtils.getChartLabelsForMonths(Object.keys(data));
        let newData = [];
        await Object.entries(data).forEach(value => newData.push(value[1]));
        datasets.push({
          data: newData,
          backgroundColor: 'rgba(90, 90, 90, 0.7)',
          hoverBackgroundColor: 'rgba(90, 90, 90, 1)',
          borderColor: '#333'
        });
        this.invoiceByAgenceChart = {datasets, labels, legend: false};
      }
      if(Object.keys(data).length !== 0) {
        handleData();
      } else {
        this.errors.set('invoiceByAgence', this.DATA_UNAVAILABLE)
      }
    },
    resp => this.errors.set('invoiceByAgence', resp.error.message)
  );
  }

  handleAgenceExpensesBySci() {
    
  }
}
