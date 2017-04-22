import { NgModule, APP_INITIALIZER } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';

import { AppNavigationProvisioningService } from './common/app-navigation';

// We still need to create an empty routes-object, otherwise we can't reset it in the Service...
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
