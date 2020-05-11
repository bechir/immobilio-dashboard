import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtatEncaissementsComponent } from './encaissements/encaissements.component';
import { EtatDepensesComponent } from './depenses/depenses.component';
import { EtatSituationsCaissesComponent } from './situations-caisses/situations-caisses.component';

const routes: Routes = [
  { path: 'arrieres', component: EtatEncaissementsComponent, data: {title: 'Arriérés'} },
  { path: 'depenses', component: EtatDepensesComponent, data: {title: 'Dépenses'} },
  { path: 'encaissements', component: EtatEncaissementsComponent, data: {title: 'Encaissements'} },
  { path: 'situations-caisses', component: EtatSituationsCaissesComponent, data: {title: 'Situations des caisses'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtatsRoutingModule { }
