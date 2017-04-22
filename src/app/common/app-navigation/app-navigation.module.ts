import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import * as services from './services';
import { AppNavigationListComponent } from './components';

@NgModule({
  exports: [
    AppNavigationListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AppNavigationListComponent],
  providers: [
    services.AppNavigationProvisioningService,
    services.AppRoutingConfigurationService
  ]
})
export class AppNavigationModule { }