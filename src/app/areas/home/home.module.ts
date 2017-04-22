import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent, WelcomeComponent } from './components';
import { HomeNavigationProvisioningService } from './services';

import { OpqaqueTokenConstants } from '../../common/app-navigation';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    WelcomeComponent
  ]
})
export class HomeModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: HomeModule,
      providers: [
        {
          provide: OpqaqueTokenConstants.APP_NAVIGATION_TOKEN,
          useClass: HomeNavigationProvisioningService,
          multi: true
        },
      ]
    };
  }
}
