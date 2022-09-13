import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Eventbinding4RoutingModule } from './eventbinding4-routing.module';
import { Eventbinding4Component } from './eventbinding4.component';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    Eventbinding4Component
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
    Eventbinding4RoutingModule
  ]
})
export class Eventbinding4Module { }
