import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as comp from './components';

const routes: Routes = [
  {
    path: '',
    component: comp.PlaygroundComponent,
    children: [
      { path: '', redirectTo: 'mt', pathMatch: 'full' },
      { path: 'et', component: comp.ErrorTestingComponent },
      { path: 'mt', component: comp.ModalTestingComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PlaygroundRoutingModule { }
