import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtatsRoutingModule } from './etats-routing.module';
import { EtatEncaissementsComponent } from './encaissements/encaissements.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule  } from '@ng-bootstrap/ng-bootstrap';
import { EtatDepensesComponent } from './depenses/depenses.component';
import { EtatEncaissementsTableComponent } from './encaissements/table/table.component';
import { EtatDepensesTableComponent } from './depenses/table/table.component';
import { EtatArriereComponent } from './arriere/arriere.component';
import { EtatArrieresTableComponent } from './arriere/table/table.component';
import { EtatSituationsCaissesComponent } from './situations-caisses/situations-caisses.component';
import { EtatSituationsTableComponent } from './situations-caisses/table/table.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    EtatArriereComponent,
    EtatArrieresTableComponent,
    EtatDepensesComponent,
    EtatDepensesTableComponent,
    EtatEncaissementsComponent,
    EtatEncaissementsTableComponent,
    EtatSituationsCaissesComponent,
    EtatSituationsTableComponent
  ],
  imports: [
    CommonModule,
    EtatsRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
  ]
})
export class EtatsModule { }

