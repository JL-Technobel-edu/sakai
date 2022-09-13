import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Custompipes7RoutingModule } from './custompipes7-routing.module';
import { Custompipes7Component } from './custompipes7.component';
import { PowPipe } from './pow.pipe';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    PowPipe,
    Custompipes7Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartModule,
    MenuModule,
    TableModule,
    StyleClassModule,
    PanelMenuModule,
    ButtonModule,
    DividerModule,
    InputTextModule,
    CheckboxModule,
    InputNumberModule,
    CardModule,
    Custompipes7RoutingModule
  ]
})
export class Custompipes7Module { }
