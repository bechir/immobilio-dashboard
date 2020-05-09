import { Component, OnInit, Input } from '@angular/core';

import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { PieChart } from 'src/app/models/charts.model';
import { ChartUtilsService } from 'src/app/services/chart-utils.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @Input() pieChart: PieChart;
  @Input() heading: string;
  @Input() type?: ChartType = 'pie';

  errorMessage?: string;

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'right',
      reverse: true
    },
    tooltips: {
      enabled: true
    },
    plugins: {
      datalabels: {
        formatter: (value, context) =>  value > Number(1000) ? this.chartUtils.formatMillions(value) : value
      }
    }
  };

  public pieChartLabel: Label[] = [];
  public pieChartType: ChartType;
  public pieChartLegend: boolean = true;
  public pieChartPlugins = [];

  public pieChartData: SingleDataSet = [];

  constructor(private chartUtils: ChartUtilsService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.pieChartData = this.pieChart.data;
    this.pieChartLabel = this.pieChart.label;
    this.pieChartType = this.type;
  }
}
