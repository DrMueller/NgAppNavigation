import { TestBed, inject } from '@angular/core/testing';

import { HomeNavigationProvisioningService } from './home-navigation-provisioning.service';

describe('HomeNavigationProvisioningService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeNavigationProvisioningService]
    });
  });

  it('should ...', inject([HomeNavigationProvisioningService], (service: HomeNavigationProvisioningService) => {
    expect(service).toBeTruthy();
  }));
});
