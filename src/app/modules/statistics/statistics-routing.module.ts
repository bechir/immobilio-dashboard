import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatisticsComponent } from './statistics.component';
import { AgenceReportComponent } from './agence-report/agence-report.component';

const routes: Routes = [
  { path: '', component: StatisticsComponent },
  { path: 'agence/:id', component: AgenceReportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
