import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Binding1Component } from './binding1.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: Binding1Component }
    ])],
    exports: [RouterModule]
})
export class Binding1RoutingModule { }
