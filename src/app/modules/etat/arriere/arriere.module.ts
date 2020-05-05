import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArriereRoutingModule } from './arriere-routing.module';
import { ArriereComponent } from './arriere.component';
import { SharedModule } from '../../shared/shared.module';
import { AgenceListingComponent } from '../../shared/agence-listing/agence-listing.component';


@NgModule({
  declarations: [
    ArriereComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ArriereRoutingModule
  ]
})
export class ArriereModule { }
