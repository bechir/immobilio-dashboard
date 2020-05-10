import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtatsRoutingModule } from './etats-routing.module';
import { EtatEncaissementsComponent } from './encaissements/encaissements.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { EtatDepensesComponent } from './depenses/depenses.component';
import { EtatEncaissementsTableComponent } from './encaissements/table/table.component';
import { EtatDepensesTableComponent } from './depenses/table/table.component';
import { EtatArriereComponent } from './arriere/arriere.component';
import { EtatArrieresTableComponent } from './arriere/table/table.component';
import { EtatSituationsCaissesComponent } from './situations-caisses/situations-caisses.component';
import { EtatSituationsTableComponent } from './situations-caisses/table/table.component';

@NgModule({
  declarations: [
    EtatArriereComponent,
    EtatArrieresTableComponent,
    EtatDepensesComponent,
    EtatDepensesTableComponent,
    EtatEncaissementsComponent,
    EtatEncaissementsTableComponent,
    EtatSituationsCaissesComponent,
    EtatSituationsTableComponent,
  ],
  imports: [
    CommonModule,
    EtatsRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    NgbTooltipModule
  ]
})
export class EtatsModule { }

