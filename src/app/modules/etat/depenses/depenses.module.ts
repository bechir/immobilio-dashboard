import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepensesRoutingModule } from './depenses-routing.module';
import { DepensesComponent } from './depenses.component';
import { SharedModule } from '../../shared/shared.module';
import { TableComponent } from './table/table.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DepensesComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DepensesRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgbDatepickerModule,
    NgbTooltipModule
  ]
})
export class DepensesModule { }
