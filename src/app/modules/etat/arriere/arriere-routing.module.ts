import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArriereComponent } from './arriere.component';

const routes: Routes = [{ path: '', component: ArriereComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArriereRoutingModule { }
