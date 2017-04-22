import { TestBed, inject } from '@angular/core/testing';

import { AppRoutingConfigurationService } from './app-routing-configuration.service';

describe('AppRoutingConfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppRoutingConfigurationService]
    });
  });

  it('should ...', inject([AppRoutingConfigurationService], (service: AppRoutingConfigurationService) => {
    expect(service).toBeTruthy();
  }));
});
