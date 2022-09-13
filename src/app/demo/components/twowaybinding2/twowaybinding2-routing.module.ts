import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Twowaybinding2Component } from './twowaybinding2.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: Twowaybinding2Component }
    ])],
    exports: [RouterModule]
})
export class Twowaybinding2RoutingModule { }
