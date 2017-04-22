import { Injectable } from '@angular/core';

import { IAppNavigationProvider, AppNavigationEntry, LazyRoute, ILazyRoute } from '../../../common/app-navigation';

@Injectable()
export class PlaygroundNavigationProvisioningService implements IAppNavigationProvider {
  private readonly NAVIGATION_PATH = 'playground';
  private readonly LOAD_CHILDREN_PATH = 'app/areas/playground/playground.module#PlaygroundModule';

  // public provideRoute(): LazyRoute {
  //   return new LazyRoute(this.NAVIGATION_PATH, this.LOAD_CHILDREN_PATH);
  // }

  public provideRoute(): ILazyRoute {
    return {
      path: 'playground',
      loadChildren: 'app/areas/playground/playground.module#PlaygroundModule'
    };
  }

  public provideView(): AppNavigationEntry {
    return new AppNavigationEntry('Playground', this.NAVIGATION_PATH);
  }
}
