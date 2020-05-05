import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';
 
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService], data: { title: 'Tableau de bord' } },

  { path: '', redirectTo: '/auth/signin', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },

  { path: '404', component: NotFoundComponent, canActivate: [AuthGuardService] },

  { path: 'analyse/statistics', data: {title: 'Statistiques'}, loadChildren: () => import('./modules/analyse/statistics/statistics.module').then(m => m.StatisticsModule), canActivate: [AuthGuardService] },
  { path: 'analyse/expenses', data: {title: 'Dépenses'}, loadChildren: () => import('./modules/analyse/expenses/expenses.module').then(m => m.ExpensesModule), canActivate: [AuthGuardService] },
  { path: 'analyse/billing', data: {title: 'Facturation et paiement'}, loadChildren: () => import('./modules/analyse/billing/billing.module').then(m => m.BillingModule), canActivate: [AuthGuardService] },
  { path: 'analyse/customers', data: {title: 'Clients et Contrats'}, loadChildren: () => import('./modules/analyse/customers/customers.module').then(m => m.CustomersModule), canActivate: [AuthGuardService] },
  { path: 'analyse/building', data: {title: 'Patrimoine'}, loadChildren: () => import('./modules/analyse/building/building.module').then(m => m.BuildingModule), canActivate: [AuthGuardService] },
  
  { path: 'etat/arriere', loadChildren: () => import('./modules/etat/arriere/arriere.module').then(m => m.ArriereModule), canActivate: [AuthGuardService] },
  { path: 'etat/depenses', loadChildren: () => import('./modules/etat/depenses/depenses.module').then(m => m.DepensesModule), canActivate: [AuthGuardService] },
  { path: 'etat/encaissements', loadChildren: () => import('./modules/etat/encaissements/encaissements.module').then(m => m.EncaissementsModule) },

  { path: '**', redirectTo: '/404' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
