import {Injectable} from '@angular/core';
import {Contact} from "../contact";
import {ContactLocalStorageService} from "./contact-local-storage.service";
import {ContactApiStorageService} from "./contact-api-storage.service";

@Injectable()
export class ContactService {

  constructor(private localStorage: ContactLocalStorageService, private apiService: ContactApiStorageService) {
  }

  public findAllContacts() {
   // return this.apiService.findContacts();
    return this.localStorage.findContacts();
  }

  public addNewContact(contact: Contact) {
  //  return this.apiService.addNewContact(contact);
    return this.localStorage.addNewContact(contact);
  }

  public editContact(contact: Contact) {
  //  return this.apiService.editContact(contact);
    return this.localStorage.editContact(contact);
  }

  public deleteContact(contact: Contact) {
  //  return this.apiService.deleteContact(contact);
    return this.localStorage.deleteContact(contact);
  }

}
