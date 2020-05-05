import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepensesComponent } from './depenses.component';

const routes: Routes = [{ path: '', component: DepensesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepensesRoutingModule { }
