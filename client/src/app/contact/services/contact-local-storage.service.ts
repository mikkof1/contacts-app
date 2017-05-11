import {Injectable} from '@angular/core';
import {Contact} from "../contact";
import {Observable} from "rxjs/Observable";
import * as _ from 'lodash';
import 'rxjs/add/observable/of';

@Injectable()
export class ContactLocalStorageService {

  private contactLocalStorageKey: string = 'ca-storageKey';

  constructor() {
    if (!localStorage.getItem(this.contactLocalStorageKey)) {
      localStorage.setItem(this.contactLocalStorageKey, JSON.stringify([]));
    }
  }

  private loadAllContacts() {
    let data = localStorage.getItem(this.contactLocalStorageKey);
    let contacts = JSON.parse(data);
    return contacts;
  }

  public findContacts() {
    return Observable.of(this.loadAllContacts());
  }

  public addNewContact(contact: Contact) {
    let nextId = 100;
    let contacts: Contact[] = this.loadAllContacts();
    if (contacts.length > 0) {
      nextId = _.maxBy(contacts, 'id').id;
      nextId++;
    }
    contact.id = nextId;
    contacts.push(contact);
    this.saveContactsToLocalStorage(contacts);
    return Observable.of(contacts);
  }

  public editContact(contact: Contact) {
    let contacts: Contact[] = this.loadAllContacts();
    let index = contacts.findIndex(c => c.id == contact.id);
    contacts[index] = contact;
    this.saveContactsToLocalStorage(contacts);
    return Observable.of(contacts);
  }

  public deleteContact(contact: Contact) {
    let contacts: Contact[] = this.loadAllContacts();
    let editList: Contact[] = [];
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].id != contact.id) {
        editList.push(contacts[i]);
      }
    }
    contacts = editList;
    this.saveContactsToLocalStorage(contacts);
    return Observable.of(contacts);
  }

  private saveContactsToLocalStorage(contacts) {
    localStorage.setItem(this.contactLocalStorageKey, JSON.stringify(contacts));
  }


}
