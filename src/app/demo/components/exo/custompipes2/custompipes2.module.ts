import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Custompipes2RoutingModule } from './custompipes2-routing.module';
import { Custompipes2Component } from './custompipes2.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';
import { CustomDatePipe } from '../custom.date.pipe';
import { CustomDegreePipe } from '../custom.degree.pipe';
import { CustomReverseNumberPipe } from '../custom.reverse.number.pipe';


@NgModule({
  declarations: [
    CustomDatePipe,
    CustomDegreePipe,
    CustomReverseNumberPipe,
    Custompipes2Component
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
    Custompipes2RoutingModule
  ]
})
export class Custompipes2Module { }
