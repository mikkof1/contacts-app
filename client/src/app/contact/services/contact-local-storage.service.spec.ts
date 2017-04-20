import { TestBed, inject } from '@angular/core/testing';

import { ContactLocalStorageService } from './contact-local-storage.service';

describe('ContactLocalStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactLocalStorageService]
    });
  });

  it('should ...', inject([ContactLocalStorageService], (service: ContactLocalStorageService) => {
    expect(service).toBeTruthy();
  }));
});
