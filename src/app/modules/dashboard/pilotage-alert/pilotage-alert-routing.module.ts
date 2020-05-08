import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PilotageAlertComponent } from './pilotage-alert.component';

const routes: Routes = [{ path: '', component: PilotageAlertComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PilotageAlertRoutingModule { }
