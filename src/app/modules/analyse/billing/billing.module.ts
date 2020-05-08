import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { BillingComponent } from './billing.component';
import { SharedModule } from '../../shared/shared.module';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [BillingComponent, TableComponent],
  imports: [
    CommonModule,
    BillingRoutingModule,
    SharedModule
  ]
})
export class BillingModule { }
