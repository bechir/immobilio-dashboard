import { EtatsComponent } from './etats.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtatEncaissementsComponent } from './encaissements/encaissements.component';
import { EtatDepensesComponent } from './depenses/depenses.component';

const routes: Routes = [
  { path: '', component: EtatsComponent },
  { path: 'arrieres', component: EtatEncaissementsComponent },
  { path: 'depenses', component: EtatDepensesComponent },
  { path: 'encaissements', component: EtatEncaissementsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtatsRoutingModule { }
