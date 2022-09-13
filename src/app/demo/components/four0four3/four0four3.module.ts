import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Four0four3Component } from './four0four3.component';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';
import { Four0four3RoutingModule } from './four0four3-routing.module';



@NgModule({
  declarations: [
    Four0four3Component
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
    Four0four3RoutingModule,
  ]
})
export class Four0four3Module { }
