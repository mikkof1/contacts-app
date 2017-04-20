import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Contact} from "../contact";

@Injectable()
export class ContactApiStorageService {

  url: string = "http://localhost:49478/api/contacts";

  constructor(private http: Http) {
  }

  findContacts() {
    return this.http.get(this.url).map(response => response.json() as Contact[]);
  }

  addNewContact(contact: Contact) {
    return this.http.post(this.url, contact);
  }

  editContact(contact: Contact) {
    return this.http.put(this.url, contact);
  }

  deleteContact(contact: Contact) {
    return this.http.delete(this.url + '?id=' + contact.id);
  }

}
