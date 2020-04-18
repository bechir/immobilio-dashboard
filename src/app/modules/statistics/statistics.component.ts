import { Component, OnInit } from '@angular/core';
import { StatisticsRepository } from './statistics-repository.service';
import { ChartDataSets } from 'chart.js';
import { BarChart } from 'src/app/models/charts.model';
import { ChartUtilsService } from 'src/app/services/chart-utils.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor(private repository: StatisticsRepository, private chartUtils: ChartUtilsService) { }

  errors = new Map<string, string>();

  collectionsChart?: BarChart;
  invoiceByPaymentMethodChart?: BarChart;
  expensesByNatureExpenseChart: BarChart;

  DATA_UNAVAILABLE = "Données non disponibles.";

  ngOnInit(): void {
    this.handleCollectionPaymentByAgence();
    this.handleInvoiceByPaymentMethodChart();
    this.handleExpensesByNatureExpense();
  }

  handleCollectionPaymentByAgence() {
    this.repository.getCollectionPaymentByAgence().subscribe(data => {
      if (Object.keys(data).length !== 0) {
        const handleData = async () => {
          let datasets: ChartDataSets[] = [];
          let labels = [];
          let newData = [];
          await Object.values(data).forEach(entry => {
            const { name, total } = entry;
            labels.push(name);
            newData.push(total);
          });
          await datasets.push({
            data: newData,
            backgroundColor: '#407da8',
            hoverBackgroundColor: 'rgba(54, 105, 141, 0.66)',
            maxBarThickness: 25,
            label: "Montant"
          });
          this.collectionsChart = {labels, datasets, legend: true};
        }
        handleData();
      }
    },
      resp => this.errors.set('collections', resp.error.message)
    );
  }

  handleInvoiceByPaymentMethodChart() {
    this.repository.getInvoiceByPaymentMethod()
      .subscribe((data) => {
        const handleData = async () => {
          let datasets: ChartDataSets[] = [];
          let labels = this.chartUtils.getChartLabelsForMonths(Object.keys(data));
          await this.chartUtils.transFormJsonForBarChart(data)
            .forEach((items, label) => {
              datasets.push({data: items, label: label}
            );
          });
          this.invoiceByPaymentMethodChart = {labels, datasets, legend: true};
        }
        if(Object.keys(data).length !== 0) {
          handleData();
        } else {
          this.errors.set('invoicesByPayment', this.DATA_UNAVAILABLE)
        }
      },
      resp => this.errors.set('invoicesByPayment', resp.error.message)
    );
  }

  handleExpensesByNatureExpense() {
    this.repository.getExpensesByNatureExpense()
    .subscribe((data) => {
      const handleData = async () => {
        let datasets: ChartDataSets[] = [];
        let labels = this.chartUtils.getChartLabelsForMonths(Object.keys(data));
        await this.chartUtils.transFormJsonForBarChart(data)
          .forEach((items, label) => {
            datasets.push({ data: items, label: label });
        });
        this.expensesByNatureExpenseChart = { datasets, labels, legend: true };
      };
      
      if(Object.keys(data).length !== 0) {
        handleData();
      } else {
        this.errors.set('expensesByNature', this.DATA_UNAVAILABLE)
      }
    },
    resp => this.errors.set('expensesByNature', resp.error.message)
  );
  }
}
