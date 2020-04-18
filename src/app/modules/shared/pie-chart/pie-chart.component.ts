import { Component, OnInit, Input } from '@angular/core';

import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { PieChart } from 'src/app/models/charts.model';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @Input() pieChart: PieChart;
  @Input() heading: string;

  errorMessage?: string;

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'right',
      reverse: true
    },
    tooltips: {
      enabled: true
    }
  };

  public pieChartLabel: Label[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend: boolean = true;
  public pieChartPlugins = [];

  public pieChartData: SingleDataSet = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.pieChartData = this.pieChart.data;
    this.pieChartLabel = this.pieChart.label
  }
}
