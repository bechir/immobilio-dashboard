import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

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
import { AnalyseCustomersComponent } from './customers/customers.component';
import { AnalyseExpensesComponent } from './expenses/expenses.component';


@NgModule({
  declarations: [
    AnalyseCustomersComponent,
    AnalyseExpensesComponent,
    AnalyseBillingComponent,
    AnalyseBillingTableComponent,
    AnalyseBillingFilterFormComponent,
    AnalyseEncaissementsComponent,
    AnalyseEncaissementsTableComponent,
    AnalyseEncaissementFilterFormComponent,
    AnalysePatrimoineComponent,
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
    NgMultiSelectDropDownModule
  ]
})
export class AnalysesModule { }
