import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArriereRoutingModule } from './arriere-routing.module';
import { ArriereComponent } from './arriere.component';
import { SharedModule } from '../../shared/shared.module';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { FilterComponent } from './components/filter/filter.component';


@NgModule({
  declarations: [
    ArriereComponent,
    TableComponent,
    FilterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ArriereRoutingModule,
    NgbDatepickerModule
  ]
})
export class ArriereModule { }
