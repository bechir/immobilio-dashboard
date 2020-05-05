import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArriereRoutingModule } from './arriere-routing.module';
import { ArriereComponent } from './arriere.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [ArriereComponent],
  imports: [
    CommonModule,
    ArriereRoutingModule,
    SharedModule
  ]
})
export class ArriereModule { }
