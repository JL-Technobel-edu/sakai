import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Twowaybinding2Component } from './twowaybinding2.component';
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
import { Twowaybinding2RoutingModule } from './twowaybinding2-routing.module';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [
    Twowaybinding2Component
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
    Twowaybinding2RoutingModule,
  ]
})
export class Twowaybinding2Module { }
