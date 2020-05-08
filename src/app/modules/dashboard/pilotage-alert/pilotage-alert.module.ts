import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PilotageAlertRoutingModule } from './pilotage-alert-routing.module';
import { PilotageAlertComponent } from './pilotage-alert.component';


@NgModule({
  declarations: [PilotageAlertComponent],
  imports: [
    CommonModule,
    PilotageAlertRoutingModule
  ]
})
export class PilotageAlertModule { }
