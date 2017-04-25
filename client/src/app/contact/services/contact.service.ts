import {Injectable} from '@angular/core';
import {Contact} from "../contact";
import {ContactLocalStorageService} from "./contact-local-storage.service";
import {ContactApiStorageService} from "./contact-api-storage.service";
import {ContactStorageInterface} from "./contact-storage-interface";
import {environment} from "../../../environments/environment";

@Injectable()
export class ContactService {

  private storageInterface: ContactStorageInterface;

  constructor(private localStorage: ContactLocalStorageService, private apiService: ContactApiStorageService) {
    if (environment.envName == 'api') {
      this.storageInterface = apiService;
    }
    else {
      this.storageInterface = localStorage;
    }
  }

  public findAllContacts() {
    return this.storageInterface.findContacts();
  }

  public addNewContact(contact: Contact) {
    return this.storageInterface.addNewContact(contact);
  }

  public editContact(contact: Contact) {
    return this.storageInterface.editContact(contact)
  }

  public deleteContact(contact: Contact) {
    return this.storageInterface.deleteContact(contact);
  }

}
