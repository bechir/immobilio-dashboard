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

  { path: 'analyses', loadChildren: () => import('./modules/analyses/analyses.module').then(m => m.AnalysesModule) },
  { path: 'etats', loadChildren: () => import('./modules/etats/etats.module').then(m => m.EtatsModule) },

  { path: 'dashboard/pilotage-alert', loadChildren: () => import('./modules/dashboard/pilotage-alert/pilotage-alert.module').then(m => m.PilotageAlertModule), canActivate: [AuthGuardService] },
  { path: 'dashboard/statistics', loadChildren: () => import('./modules/dashboard/statistics/statistics.module').then(m => m.StatisticsModule), canActivate: [AuthGuardService] },
  
  { path: 'settings', loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule), canActivate: [AuthGuardService] },

  { path: '**', redirectTo: '/404' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
