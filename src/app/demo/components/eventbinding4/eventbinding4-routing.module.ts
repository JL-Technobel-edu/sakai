import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Eventbinding4Component } from './eventbinding4.component';

const routes: Routes = [{ path: '', component: Eventbinding4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Eventbinding4RoutingModule { }
