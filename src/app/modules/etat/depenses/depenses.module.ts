import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepensesRoutingModule } from './depenses-routing.module';
import { DepensesComponent } from './depenses.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [DepensesComponent],
  imports: [
    CommonModule,
    SharedModule,
    DepensesRoutingModule
  ]
})
export class DepensesModule { }
