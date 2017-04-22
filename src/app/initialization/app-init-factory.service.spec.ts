import { TestBed, inject } from '@angular/core/testing';

import { AppInitFactoryService } from './app-init-factory.service';

describe('AppInitFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppInitFactoryService]
    });
  });

  it('should ...', inject([AppInitFactoryService], (service: AppInitFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
