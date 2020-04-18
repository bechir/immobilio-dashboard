import { Component, OnInit, Input } from '@angular/core';

import { ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels'

import { ChartUtilsService } from 'src/app/services/chart-utils.service';
import { BarChart } from 'src/app/models/charts.model';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  @Input() chart: BarChart;
  @Input() heading: string;
  @Input() stepSize?: number;

  errorMessage?: string;

  public chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Montant",
          fontStyle: '400',
          fontSize: 14
        },
        ticks: {
          callback: label => `${this.chartUtils.formatMillions(label)}`,
          stepSize: this.stepSize ? this.stepSize : 10_000_000,
          showLabelBackdrop: true,
          fontStyle: '400',
          fontSize: 14
        }},
      ],
      xAxes: [{
        ticks: {
          fontSize: 14,
          fontStyle: '400'
        }
      }]
    },
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => this.chartUtils.tooltipInMillions(tooltipItem, data)
      }
    },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end",
        formatter: (value, context) => value != "0" ? this.chartUtils.formatMillions(value, 0).toString() : '',
        color: '#777'
      }
    }
  };

  public chartType: ChartType = 'bar';
  public chartLegend: boolean = true;
  public chartPlugins = [pluginDataLabels];


  constructor(private chartUtils: ChartUtilsService) { }

  ngOnInit(): void {
    this.chartLegend = this.chart.legend
  }
}
