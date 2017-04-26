import {Injectable} from '@angular/core';
import {Contact} from "../contact";
import {Observable} from "rxjs/Observable";
import * as _ from 'lodash';

@Injectable()
export class ContactLocalStorageService {

  private testListIsNeeded: boolean = false;

  private contacts: Contact[];
  private contactLocalStorageKey: string = 'ca-storageKey';

  constructor() {
    if (!localStorage.getItem(this.contactLocalStorageKey)) {
      localStorage.setItem(this.contactLocalStorageKey, JSON.stringify([]));
      if (this.testListIsNeeded) {
        this.mekeTestList();
        this.saveContactsToLocalStorage();
      }
    }
  }

  public findContacts() {
    let data = localStorage.getItem(this.contactLocalStorageKey);
    this.contacts = JSON.parse(data);
    return Observable.of(this.contacts);
  }

  public addNewContact(contact: Contact) {
    let nextId = 100;
    if (this.contacts.length > 0) {
      nextId = _.maxBy(this.contacts, 'id').id;
      nextId++;
    }
    contact.id = nextId;

    this.contacts.push(contact);
    this.saveContactsToLocalStorage();
    return Observable.of(this.contacts);
  }

  public editContact(contact: Contact) {
    let index = this.contacts.findIndex(c => c.id == contact.id);
    this.contacts[index] = contact;
    this.saveContactsToLocalStorage();
    return Observable.of(this.contacts);
  }

  public deleteContact(contact: Contact) {
    let editList: Contact[] = [];
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].id != contact.id) {
        editList.push(this.contacts[i]);
      }
    }
    this.contacts = editList;
    this.saveContactsToLocalStorage();
    return Observable.of(this.contacts);
  }

  private saveContactsToLocalStorage() {
    localStorage.setItem(this.contactLocalStorageKey, JSON.stringify(this.contacts));
  }

  private mekeTestList() {
    this.contacts = [
      new Contact(1, 'Mauno', 'Mäki', '+358 991 123', 'Ääkköskuja 58 b 9', 'Åålandia'),
      new Contact(2, 'Bruce', 'Wayne', '555-1234', 'Wayne Manor', 'Gotham City'),
      new Contact(3, 'Mikki', 'Hiiri', '888 12332', 'Torikatu 5', 'Ankkalinna'),
      new Contact(8, 'Aku', 'Ankka', '456-789789', 'Paratiisitie 13', 'Ankkalinna')
    ];
  }


}
