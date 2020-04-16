import { Component, OnInit, Input } from '@angular/core';

import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

import { StatisticsRepository } from '../statistics-repository.service';
import { ChartUtilsService } from 'src/app/services/chart-utils.service';

@Component({
  selector: 'app-expenses-pie-chart',
  templateUrl: './expenses-pie-chart.component.html',
  styleUrls: ['./expenses-pie-chart.component.scss']
})
export class ExpensesPieChartComponent implements OnInit {
  @Input() agenceId: number;

  errorMessage?: string;
  data: any;

  public pieChartOptions: ChartOptions = {
    responsive: true
  };

  public pieChartLabel: Label[] = ['Débit', 'Crédit'];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend: boolean = true;
  public pieChartPlugins = [];

  public pieChartData: SingleDataSet = [12300, 43020];

  constructor(private repository: StatisticsRepository, private chartUtils: ChartUtilsService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    // this.repository.getExpensesByNatureExpense(this.agenceId)
    //   .subscribe((data) => {
    //     console.log(data);
        
    //     if(Object.keys(data).length !== 0) {
    //       this.pieChartLabel = Object.keys(data);
    //       Object.keys(data).forEach((value, index) => {
    //         this.pieChartData.push([Number(value)])
    //       })
    //     } else {
    //       this.errorMessage = "Données non disponibles."
    //     }
    //   },
    //   resp => this.errorMessage = resp.error.message
    // );
  }
}
