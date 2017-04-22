import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { OpqaqueTokenConstants } from '../constants';
import { IAppNavigationProvider, IRoute } from '../interfaces';
import { RedirectRoute } from '../models';

@Injectable()
export class AppRoutingConfigurationService {

  constructor(
    @Inject(OpqaqueTokenConstants.APP_NAVIGATION_TOKEN) private appNavigationProviders: IAppNavigationProvider[],
    private router: Router) {
  }

  public configureRoutes(): void {
    const routes = this.getAllRoutes();
    this.router.resetConfig(routes);
  }

  private getAllRoutes(): IRoute[] {
    const routes = this.getAreaRoutes();
    const defaultRoute = this.getDefaultRedirectRoute();
    routes.push(defaultRoute);

    return routes;
  }

  private getAreaRoutes(): IRoute[] {
    const result = this.appNavigationProviders.map(f => {
      return f.provideRoute();
    });

    return result;
  }

  private getDefaultRedirectRoute(): RedirectRoute {
    return new RedirectRoute('', '/home', 'full');
  }
}
