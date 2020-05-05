import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsComponent } from './statistics.component';
import { ExpensesByNatureExpenseComponent } from './expenses-by-nature-expense/expenses-by-nature-expense.component';
import { AgenceListingComponent } from '../../shared/agence-listing/agence-listing.component';
import { AgenceReportComponent } from './agence-report/agence-report.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ExpensesPieChartComponent } from './expenses-pie-chart/expenses-pie-chart.component';


@NgModule({
  declarations: [
    StatisticsComponent,
    ExpensesByNatureExpenseComponent,
    AgenceReportComponent,
    ExpensesPieChartComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    StatisticsRoutingModule,
    SharedModule
  ]
})
export class StatisticsModule { }
