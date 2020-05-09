import { Component, OnInit, Input } from '@angular/core';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { BarChart } from 'src/app/models/charts.model';
import { ChartUtilsService } from 'src/app/services/chart-utils.service';

@Component({
  selector: 'app-basic-h-bar-chart',
  templateUrl: './basic-h-bar-chart.component.html',
  styleUrls: ['./basic-h-bar-chart.component.scss']
})
export class BasicHBarChartComponent implements OnInit {
  @Input() chart: BarChart;
  @Input() heading: string;

  errorMessage?: string;

  public chartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'right',
      reverse: true
    },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end",
        formatter: (value, context) => !isFinite(Number(value)) ? value : this.chartUtils.formatMillions(value, 2),
        font: {size: 14},
        padding: {right: -10}
      }
    },
    scales: {
      xAxes: [{
        stacked: true,
        ticks: {
          callback: label => `${this.chartUtils.formatMillions(label)}`
        }
      }],
      yAxes: [{
        stacked: true
      }]
    }
  };

  public chartLabel: Label[] = [];
  public chartType: ChartType = 'horizontalBar';
  public chartLegend: boolean = true;
  public chartPlugins = [];

  public chartData: ChartDataSets[] = [];

  constructor(private chartUtils: ChartUtilsService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.chartData = this.chart?.datasets;
    this.chartLabel = this.chart?.labels
  }
}
