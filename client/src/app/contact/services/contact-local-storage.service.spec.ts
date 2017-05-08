import {TestBed, inject} from '@angular/core/testing';

import {ContactLocalStorageService} from './contact-local-storage.service';
import {Contact} from "../contact";
import * as _ from 'lodash';

describe('ContactLocalStorageService', () => {

  let localStorageKey = 'ca-storageKey';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactLocalStorageService]
    });
  });

  // Local strage Mock
  beforeEach(() => {
    let store = {};

    spyOn(localStorage, 'getItem').and.callFake(function (key) {
      return store[key];
    });
    spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
      store[key] = value;
    });
  });

  function contactsArray() {
    return [
      new Contact(1, 'Mauno', 'Mäki', '+358 991 123', 'Ääkköskuja 58 b 9', 'Åålandia'),
      new Contact(2, 'Bruce', 'Wayne', '555-1234', 'Wayne Manor', 'Gotham City'),
      new Contact(3, 'Mikki', 'Hiiri', '888 12332', 'Torikatu 5', 'Ankkalinna'),
      new Contact(8, 'Aku', 'Ankka', '456-789789', 'Paratiisitie 13', 'Ankkalinna')
    ];
  }

  let contactIds = [1, 2, 3, 8];
  let firstContact = new Contact(null, 'first', 'last', '123', 'address', 'city');

  it('should initialize local storage', inject([ContactLocalStorageService], (service: ContactLocalStorageService) => {
    let data = localStorage.getItem(localStorageKey);
    expect(JSON.parse(data)).toEqual([]);
  }));

  it('#findContacts should return all contacts', inject([ContactLocalStorageService], (service: ContactLocalStorageService) => {
    let contacts = contactsArray();

    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    service.findContacts().subscribe((contacts: Contact[]) => {

      expect(contacts.length).toBe(4);
      _.forEach(contacts, function (c) {
        expect(contactIds).toContain(c.id);
      });

    });
  }));

  it('#addContact should return all contacts', inject([ContactLocalStorageService], (service: ContactLocalStorageService) => {


  }));


});
