import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Custompipes7Component } from './custompipes7.component';

const routes: Routes = [{ path: '', component: Custompipes7Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Custompipes7RoutingModule { }
