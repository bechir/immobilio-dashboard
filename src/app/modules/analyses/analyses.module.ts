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
    AnalyseContratsTableComponent
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
  ]
})
export class AnalysesModule { }
