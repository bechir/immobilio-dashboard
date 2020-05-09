import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { BillingComponent } from './billing.component';
import { SharedModule } from '../../shared/shared.module';
import { TableComponent } from './table/table.component';
import { NgbTooltipModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [BillingComponent, TableComponent, FilterFormComponent],
  imports: [
    CommonModule,
    BillingRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTooltipModule,
    NgMultiSelectDropDownModule,
    NgbDatepickerModule
  ]
})
export class BillingModule { }
