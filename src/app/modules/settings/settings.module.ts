import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SharedModule } from '../shared/shared.module';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { PreferencesComponent } from './preferences/preferences.component';


@NgModule({
  declarations: [SettingsComponent, NotificationsComponent, PreferencesComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
    NgbNavModule
  ]
})
export class SettingsModule { }
