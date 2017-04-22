import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpqaqueTokenConstants } from '../../common/app-navigation';

import { PlaygroundRoutingModule } from './playground-routing.module';
import * as services from './services';
import * as comp from './components';


@NgModule({
  imports: [
    CommonModule,
    PlaygroundRoutingModule
  ],
  declarations: [
    comp.PlaygroundComponent,
    comp.ErrorTestingComponent,
    comp.ModalTestingComponent
  ]
})
export class PlaygroundModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: PlaygroundModule,
      providers: [
        {
          provide: OpqaqueTokenConstants.APP_NAVIGATION_TOKEN,
          useClass: services.PlaygroundNavigationProvisioningService,
          multi: true
        },
      ]
    };
  }
}
