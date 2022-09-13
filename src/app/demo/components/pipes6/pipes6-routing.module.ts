import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustompipesComponent } from './components/custompipes/custompipes.component';
import { PipesComponent } from './components/pipes/pipes.component';


const routes: Routes = [
  { path: '', component: PipesComponent },
  { path: 'custompipes7', component: CustompipesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pipes6RoutingModule { }
