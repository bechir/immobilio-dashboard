import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
 
const routes: Routes = [
  { path: '', redirectTo: AuthService.isAuth() ? '/etats/situations-caisses' : '/auth/signin', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },

  { path: '404', component: NotFoundComponent, canActivate: [AuthGuardService] },

  { path: 'analyses', loadChildren: () => import('./modules/analyses/analyses.module').then(m => m.AnalysesModule) },
  
  { path: 'etats', loadChildren: () => import('./modules/etats/etats.module').then(m => m.EtatsModule) },

  { path: 'settings', loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule), canActivate: [AuthGuardService] },
  
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuardService] },

  { path: '**', redirectTo: '/404' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
