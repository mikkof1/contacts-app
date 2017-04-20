import { TestBed, inject } from '@angular/core/testing';

import { ContactApiStorageService } from './contact-api-storage.service';

describe('ContactApiStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactApiStorageService]
    });
  });

  it('should ...', inject([ContactApiStorageService], (service: ContactApiStorageService) => {
    expect(service).toBeTruthy();
  }));
});
