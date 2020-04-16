import { Component, OnInit, Input } from '@angular/core';

import { ChartOptions, ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

import { StatisticsRepository } from '../statistics-repository.service';
import { ChartUtilsService } from 'src/app/services/chart-utils.service';

@Component({
  selector: 'app-invoice-by-agence-bar-chart',
  templateUrl: './invoice-by-agence-bar-chart.component.html',
  styleUrls: ['./invoice-by-agence-bar-chart.component.scss']
})
export class InvoiceByAgenceBarChartComponent implements OnInit {
  @Input() agenceId: number;

  errorMessage?: string;
  data: any;

  public barChartOptions: ChartOptions = {
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
          stepSize: 10_000_000,
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
    }
  };


  public barChartLabel: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend: boolean = false;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [];

  constructor(private repository: StatisticsRepository, private chartUtils: ChartUtilsService) { }

  ngOnInit(): void {
    this.repository.getInvoiceByAgence(this.agenceId)
      .subscribe((data) => {
        if(Object.keys(data).length !== 0) {
          this.barChartLabel = this.chartUtils.getChartLabelsForMonths(Object.keys(data));
          Object.keys(data).forEach(value => {
            this.barChartData.push({
              data: data[value],
              backgroundColor: 'rgba(90, 90, 90, 0.7)',
              hoverBackgroundColor: 'rgba(90, 90, 90, 1)',
              borderColor: '#333'
            })
          });
          
          // data.forEach(value => {
          //   this.barChartData.push({
          //     data: [Number(value)]
          //   })
          // })
        } else {
          this.errorMessage = "Données non disponibles."
        }
      },
      resp => this.errorMessage = resp.error.message
    );
  }
}
