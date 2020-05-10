import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalyseEncaissementsComponent } from './encaissements/encaissements.component';
import { AnalyseBillingComponent } from './billing/billing.component';
import { AnalysePatrimoineComponent } from './patrimoine/patrimoine.component';
import { AnalyseExpensesComponent } from './expenses/expenses.component';
import { AnalyseCustomersComponent } from './customers/customers.component';

const routes: Routes = [
  { path: 'clients-et-contrats', component: AnalyseCustomersComponent },
  { path: 'facturation', component: AnalyseBillingComponent },
  { path: 'encaissements', component: AnalyseEncaissementsComponent },
  { path: 'depenses', component: AnalyseExpensesComponent },
  { path: 'patrimoine', component: AnalysePatrimoineComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysesRoutingModule { }
