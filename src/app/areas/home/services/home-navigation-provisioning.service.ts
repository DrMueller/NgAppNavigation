import { Injectable } from '@angular/core';

import { IAppNavigationProvider, AppNavigationEntry, LazyRoute, ILazyRoute } from '../../../common/app-navigation';

@Injectable()
export class HomeNavigationProvisioningService implements IAppNavigationProvider {
  private readonly NAVIGATION_PATH = 'home';
  private readonly LOAD_CHILDREN_PATH = 'app/areas/home/home.module#HomeModule';

  // public provideRoute(): LazyRoute {
  //   const result = new LazyRoute(this.NAVIGATION_PATH, this.LOAD_CHILDREN_PATH);
  //   return result;
  // }

  public provideRoute(): ILazyRoute {
    return {
      path: 'home',
      loadChildren: 'app/areas/home/home.module#HomeModule'
    };
  }

  // public provideRoute(): ILazyRoute {
  //   return {
  //     path: this.NAVIGATION_PATH,
  //     loadChildren: this.LOAD_CHILDREN_PATH
  //   };
  // }

  public provideView(): AppNavigationEntry {
    return new AppNavigationEntry('Home', this.NAVIGATION_PATH);
  }
}
