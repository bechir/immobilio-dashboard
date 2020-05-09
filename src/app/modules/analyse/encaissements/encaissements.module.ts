import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncaissementsRoutingModule } from './encaissements-routing.module';
import { EncaissementsComponent } from './encaissements.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../../shared/shared.module';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { NgbDatepickerModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [EncaissementsComponent, TableComponent, FilterFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    EncaissementsRoutingModule,
    NgbDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    NgbTooltipModule
  ]
})
export class EncaissementsModule { }
