import {TestBed, inject} from '@angular/core/testing';

import {ContactLocalStorageService} from './contact-local-storage.service';
import {Contact} from "../contact";
import * as _ from 'lodash';

describe('ContactLocalStorageService', () => {

  let localStorageKey = 'ca-storageKey';

  let addContact = new Contact(null, 'first', 'last', '123', 'address', 'city');

  let contactsArray = [
    new Contact(1, 'Mauno', 'Mäki', '+358 991 123', 'Ääkköskuja 58 b 9', 'Åålandia'),
    new Contact(2, 'Bruce', 'Wayne', '555-1234', 'Wayne Manor', 'Gotham City'),
    new Contact(3, 'Mikki', 'Hiiri', '888 12332', 'Torikatu 5', 'Ankkalinna'),
    new Contact(8, 'Aku', 'Ankka', '456-789789', 'Paratiisitie 13', 'Ankkalinna')
  ];
  let contactIds = [1, 2, 3, 8];


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactLocalStorageService]
    });
  });

  // Local storage Mock
  beforeEach(() => {
    let store = {};

    spyOn(localStorage, 'getItem').and.callFake(function (key) {
      return store[key];
    });
    spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
      store[key] = value;
    });
  });


  it('should initialize local storage', inject([ContactLocalStorageService], (service: ContactLocalStorageService) => {
    let data = localStorage.getItem(localStorageKey);
    expect(JSON.parse(data)).toEqual([]);
  }));

  it('#findContacts should return all contacts', inject([ContactLocalStorageService], (service: ContactLocalStorageService) => {
    localStorage.setItem(localStorageKey, JSON.stringify(contactsArray));
    service.findContacts().subscribe((contacts: Contact[]) => {

      expect(contacts.length).toBe(4);
      _.forEach(contacts, function (c) {
        expect(contactIds).toContain(c.id);
      });

    });
  }));

  it('#addContact should get and set new contact and return all contacts', inject([ContactLocalStorageService], (service: ContactLocalStorageService) => {
    localStorage.setItem(localStorageKey, JSON.stringify(contactsArray));
    service.addNewContact(addContact).subscribe((contacts) => {

      expect(contacts.length).toBe(5);
      expect(contacts[contacts.length - 1].id).toEqual(9);
    });
  }));

  it('#editContact should edit contact and return all contacts', inject([ContactLocalStorageService], (service: ContactLocalStorageService) => {
    localStorage.setItem(localStorageKey, JSON.stringify(contactsArray));
    contactsArray[0].phone='555';
    service.editContact(contactsArray[0]).subscribe((contacts: Contact[]) => {

      expect(contacts.length).toBe(4);
      expect(contacts[0].phone).toEqual('555');
    });
  }));


  it('#deleteContact should delete contact and return all contacts', inject([ContactLocalStorageService], (service: ContactLocalStorageService) => {
    localStorage.setItem(localStorageKey, JSON.stringify(contactsArray));
    service.deleteContact(contactsArray[0]).subscribe((contacts: Contact[]) => {

      expect(contacts.length).toBe(3);
      expect(contacts[0].id).toEqual(2);
    });
  }));


});
