import { Injectable, Injector } from '@angular/core';

import { AppRoutingConfigurationService } from '../common/app-navigation';

@Injectable()
export class AppInitFactoryService {
  // Can't inject config-service directly, otherwise we get cyclic dependencies
  constructor(private injector: Injector) {
  }

  public initialize(): void {
    const appRoutingConfig = this.injector.get(AppRoutingConfigurationService);
    appRoutingConfig.configureRoutes();
  }
}
