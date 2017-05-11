import {TestBed, inject} from '@angular/core/testing';

import {ContactApiStorageService} from './contact-api-storage.service';
import {HttpModule, ResponseOptions, XHRBackend} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {Contact} from "../contact";
import {environment} from "../../../environments/environment";

describe('ContactApiStorageService', () => {

  let addContact = new Contact(null, 'first', 'last', '123', 'address', 'city');
  const mockResponse = {
    data: [
      {id: 1, firstName: 'Mauno', lastName: 'Mäki', phone: '+358 991 123', address: 'Ääkköskuja 58 b 9', city: 'Åålandia'},
      {id: 2, firstName: 'Bruce', lastName: 'Wayne', phone: '555-1234', address: 'Wayne Manor', city: 'Gotham City'},
      {id: 3, firstName: 'Mikki', lastName: 'Hiiri', phone: '888 12332', address: 'Torikatu 5', city: 'Ankkalinna'},
      {id: 8, firstName: 'Aku', lastName: 'Ankka', phone: '456-789789', address: 'Paratiisitie 13', city: 'Ankkalinna'}
    ]
  };
  let contactIds = [1, 2, 3, 8];

  // api storage Mock
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        {provide:environment.storageUrl, useValue:'http://localhost:49478/api'},
        ContactApiStorageService,
        {provide: XHRBackend, useClass: MockBackend}
      ]
    });
  });

  /*
  it('should initialize url', inject([ContactApiStorageService, XHRBackend],
    (service: ContactApiStorageService, mockBackend) => {
    expect()
    }));
*/

  it('#findContacts should return all api contacts', inject([ContactApiStorageService, XHRBackend],
    (service: ContactApiStorageService, mockBackend) => {
      console.log('Start test');

      mockBackend.connections.subscribe((connction) => {
        connction.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });

      service.findContacts().subscribe((contacts) => {
        console.log('result: '+contacts);
        expect(contacts.length).toBe(4);
      });

    }));


});


