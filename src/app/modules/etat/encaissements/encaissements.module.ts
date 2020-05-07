import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncaissementsRoutingModule } from './encaissements-routing.module';
import { EncaissementsComponent } from './encaissements.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    EncaissementsComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EncaissementsRoutingModule,
    ReactiveFormsModule,
    NgbDatepickerModule
  ]
})
export class EncaissementsModule { }
