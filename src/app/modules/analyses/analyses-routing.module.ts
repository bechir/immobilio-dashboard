import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalyseEncaissementsComponent } from './encaissements/encaissements.component';
import { AnalyseBillingComponent } from './billing/billing.component';
import { AnalysePatrimoineComponent } from './patrimoine/patrimoine.component';
import { AnalyseExpensesComponent } from './expenses/expenses.component';
import { AnalyseClientsContratsComponent } from './clients-contrats/clients-contrats.component';

const routes: Routes = [
  { path: 'clients-et-contrats', component: AnalyseClientsContratsComponent, data: {title: 'Clients et Contrats'} },
  { path: 'facturation', component: AnalyseBillingComponent, data: {title: 'Facturation'} },
  { path: 'encaissements', component: AnalyseEncaissementsComponent, data: {title: 'Encaissements'} },
  { path: 'depenses', component: AnalyseExpensesComponent, data: {title: 'Dépenses'} },
  { path: 'patrimoine', component: AnalysePatrimoineComponent, data: {title: 'Patrimoine'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysesRoutingModule { }
