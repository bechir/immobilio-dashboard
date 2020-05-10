import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtatEncaissementsComponent } from './encaissements/encaissements.component';
import { EtatDepensesComponent } from './depenses/depenses.component';
import { EtatSituationsCaissesComponent } from './situations-caisses/situations-caisses.component';

const routes: Routes = [
  { path: 'arrieres', component: EtatEncaissementsComponent },
  { path: 'depenses', component: EtatDepensesComponent },
  { path: 'encaissements', component: EtatEncaissementsComponent },
  { path: 'situations-caisses', component: EtatSituationsCaissesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtatsRoutingModule { }
