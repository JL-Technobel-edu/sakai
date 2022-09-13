import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Four0four3Component } from './four0four3.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: Four0four3Component }
    ])],
    exports: [RouterModule]
})
export class Four0four3RoutingModule { }
