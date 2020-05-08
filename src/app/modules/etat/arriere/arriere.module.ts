import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArriereRoutingModule } from './arriere-routing.module';
import { ArriereComponent } from './arriere.component';
import { SharedModule } from '../../shared/shared.module';
import { NgbDatepickerModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    ArriereComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ArriereRoutingModule,
    NgbDatepickerModule,
    NgbDatepickerModule,
    NgbTooltipModule
  ]
})
export class ArriereModule { }
