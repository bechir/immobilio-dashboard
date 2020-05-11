import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbTooltipModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../shared/shared.module';

import { AnalysesRoutingModule } from './analyses-routing.module';
import { AnalyseBillingComponent } from './billing/billing.component';
import { AnalyseBillingTableComponent } from './billing/table/table.component';
import { AnalyseEncaissementsComponent } from './encaissements/encaissements.component';
import { AnalyseEncaissementFilterFormComponent } from './encaissements/filter-form/filter-form.component';
import { AnalyseBillingFilterFormComponent } from './billing/filter-form/filter-form.component';
import { AnalyseEncaissementsTableComponent } from './encaissements/table/table.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AnalysePatrimoineComponent } from './patrimoine/patrimoine.component';
import { AnalyseExpensesComponent } from './expenses/expenses.component';
import { AnalyseExpensesTableComponent } from './expenses/table/table.component';
import { AnalyseExpensesFilterFormComponent } from './expenses/filter-form/filter-form.component';
import { AnalyseClientsContratsComponent } from './clients-contrats/clients-contrats.component';
import { AnalyseClientsTableComponent } from './clients-contrats/clients-table/clients-table.component';
import { AnalyseContratsTableComponent } from './clients-contrats/contrats-table/contrats-table.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BiensImmobiliersComponent } from './patrimoine/biens-immobiliers/biens-immobiliers.component';
import { EspacesLocatifsComponent } from './patrimoine/espaces-locatifs/espaces-locatifs.component';
import { ProprietairesComponent } from './patrimoine/proprietaires/proprietaires.component';
import { BiensImmobiliersTableComponent } from './patrimoine/biens-immobiliers/table/table.component';
import { ProprietairesTableComponent } from './patrimoine/proprietaires/table/table.component';
import { EspacesLocatifsTableComponent } from './patrimoine/espaces-locatifs/table/table.component';


@NgModule({
  declarations: [
    AnalyseExpensesComponent,
    AnalyseBillingComponent,
    AnalyseBillingTableComponent,
    AnalyseBillingFilterFormComponent,
    AnalyseEncaissementsComponent,
    AnalyseEncaissementsTableComponent,
    AnalyseEncaissementFilterFormComponent,
    AnalysePatrimoineComponent,
    AnalyseExpensesTableComponent,
    AnalyseExpensesFilterFormComponent,
    AnalyseClientsContratsComponent,
    AnalyseClientsTableComponent,
    AnalyseContratsTableComponent,
    BiensImmobiliersComponent,
    BiensImmobiliersTableComponent,
    EspacesLocatifsComponent,
    EspacesLocatifsTableComponent,
    ProprietairesComponent,
    ProprietairesTableComponent
  ],
  imports: [
    CommonModule,
    AnalysesRoutingModule,
    CommonModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    NgbTooltipModule,
    NgbNavModule,
    NgMultiSelectDropDownModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatTabsModule,
    MatNativeDateModule,
    MatDialogModule
  ]
})
export class AnalysesModule { }
