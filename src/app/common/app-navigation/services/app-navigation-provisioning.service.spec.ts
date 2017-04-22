import { TestBed, inject } from '@angular/core/testing';

import { AppNavigationProvisioningService } from './app-navigation-provisioning.service';

describe('AppNavigationProvisioningService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppNavigationProvisioningService]
    });
  });

  it('should ...', inject([AppNavigationProvisioningService], (service: AppNavigationProvisioningService) => {
    expect(service).toBeTruthy();
  }));
});
