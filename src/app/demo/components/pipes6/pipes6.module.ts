import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pipes6RoutingModule } from './pipes6-routing.module';
import { Pipes6Component } from './pipes6.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CustompipesComponent } from './components/custompipes/custompipes.component';
import { PowPipe } from '../custompipes7/pow.pipe';



@NgModule({
  declarations: [
    PowPipe,
    Pipes6Component,
    PipesComponent,
    CustompipesComponent,

  ],
  imports: [
    CommonModule,
    Pipes6RoutingModule
  ]
})
export class Pipes6Module { }
