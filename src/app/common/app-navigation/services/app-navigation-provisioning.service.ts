import { Injectable, Inject } from '@angular/core';

import { OpqaqueTokenConstants } from '../constants';
import { AppNavigationEntry } from '../models';
import { IAppNavigationProvider } from '../interfaces';

@Injectable()
export class AppNavigationProvisioningService {
  constructor(
    @Inject(OpqaqueTokenConstants.APP_NAVIGATION_TOKEN) private appNavigationProviders: IAppNavigationProvider[]) {
  }

  public provideViewEntries(): AppNavigationEntry[] {
    const result = this.appNavigationProviders.map(f => {
      return f.provideView();
    });

    return result;
  }
}
