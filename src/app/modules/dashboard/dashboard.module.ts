import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { ExpensesByNatureExpenseComponent } from './statistics/expenses-by-nature-expense/expenses-by-nature-expense.component';
import { AgenceReportComponent } from './statistics/agence-report/agence-report.component';
import { ExpensesPieChartComponent } from './statistics/expenses-pie-chart/expenses-pie-chart.component';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { PilotageAlertComponent } from './pilotage-alert/pilotage-alert.component';


@NgModule({
  declarations: [
    StatisticsComponent,
    ExpensesByNatureExpenseComponent,
    AgenceReportComponent,
    ExpensesPieChartComponent,
    PilotageAlertComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    SharedModule
  ]
})
export class DashboardModule { }
