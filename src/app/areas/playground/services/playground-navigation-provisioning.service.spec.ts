import { TestBed, inject } from '@angular/core/testing';

import { PlaygroundNavigationProvisioningService } from './playground-navigation-provisioning.service';

describe('PlaygroundNavigationProvisioningService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaygroundNavigationProvisioningService]
    });
  });

  it('should ...', inject([PlaygroundNavigationProvisioningService], (service: PlaygroundNavigationProvisioningService) => {
    expect(service).toBeTruthy();
  }));
});
