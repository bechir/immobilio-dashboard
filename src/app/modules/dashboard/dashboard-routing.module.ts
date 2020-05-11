import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatisticsComponent } from './statistics/statistics.component';
import { AgenceReportComponent } from './statistics/agence-report/agence-report.component';
import { PilotageAlertComponent } from './pilotage-alert/pilotage-alert.component';

const routes: Routes = [
  { path: 'statistiques', component: StatisticsComponent, data: {title: 'Statistiques'} },
  { path: 'statistiques/agence/:id', component: AgenceReportComponent },
  { path: 'pilotage-et-alert', component: PilotageAlertComponent, data: {title: 'Pilotage et Alert'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
