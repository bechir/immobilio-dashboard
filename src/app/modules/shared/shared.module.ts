import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './heading/heading.component';
import { RouterModule } from '@angular/router';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ChartsModule } from 'ng2-charts';
import { BasicHBarChartComponent } from './basic-h-bar-chart/basic-h-bar-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';


@NgModule({
  declarations: [
    HeadingComponent,
    PieChartComponent,
    BasicHBarChartComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChartsModule
  ],
  exports: [
    HeadingComponent,
    PieChartComponent,
    BasicHBarChartComponent,
    BarChartComponent
  ]
})
export class SharedModule { }
