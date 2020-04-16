import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';
 
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService], data: {
    title: 'Tableau de bord'
  } },

  { path: '', redirectTo: '/auth/signin', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },

  { path: '404', component: NotFoundComponent, canActivate: [AuthGuardService] },

  { path: 'statistics', data: {title: 'Statistiques'}, loadChildren: () => import('./modules/statistics/statistics.module').then(m => m.StatisticsModule) },
  { path: 'expenses', data: {title: 'Dépenses'}, loadChildren: () => import('./modules/expenses/expenses.module').then(m => m.ExpensesModule) },
  { path: 'billing', data: {title: 'Facturation et paiement'}, loadChildren: () => import('./modules/billing/billing.module').then(m => m.BillingModule) },
  { path: 'customers', data: {title: 'Clients et Contrats'}, loadChildren: () => import('./modules/customers/customers.module').then(m => m.CustomersModule) },
  { path: 'building', data: {title: 'Patrimoine'}, loadChildren: () => import('./modules/building/building.module').then(m => m.BuildingModule) },

  { path: '**', redirectTo: '/404'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
