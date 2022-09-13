import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Custompipes2Component } from './custompipes2.component';

const routes: Routes = [{ path: '', component: Custompipes2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Custompipes2RoutingModule { }
