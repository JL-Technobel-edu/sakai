import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
const routes: Routes = [
  {
      path: '', component: AppLayoutComponent,
      children: [
          { path: '', loadChildren: () => import('./demo/components/binding1/binding1.module').then(m => m.Binding1Module) },
          { path: 'twowaybinding2', loadChildren: () => import('./demo/components/twowaybinding2/twowaybinding2.module').then(m => m.Twowaybinding2Module) },
          { path: 'four0four3', loadChildren: () => import('./demo/components/four0four3/four0four3.module').then(m => m.Four0four3Module) },
          { path: 'eventbinding4', loadChildren: () => import('./demo/components/eventbinding4/eventbinding4.module').then(m => m.Eventbinding4Module) },
          { path: 'pipes6', loadChildren: () => import('./demo/components/pipes6/pipes6.module').then(m => m.Pipes6Module) },
          { path: 'custompipes7', loadChildren: () => import('./demo/components/custompipes7/custompipes7.module').then(m => m.Custompipes7Module) },
          { path: 'custompipes7', loadChildren: () => import('./demo/components/custompipes7/custompipes7.module').then(m => m.Custompipes7Module) },
          { path: 'exo/custompipes2', loadChildren: () => import('./demo/components/exo/custompipes2/custompipes2.module').then(m => m.Custompipes2Module) },
      ],
  },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: 'notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
