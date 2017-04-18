import { TestBed, inject } from '@angular/core/testing';

import { ApiContactService } from './api-contact.service';

describe('ApiContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiContactService]
    });
  });

  it('should ...', inject([ApiContactService], (service: ApiContactService) => {
    expect(service).toBeTruthy();
  }));
});
