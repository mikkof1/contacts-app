import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Contact} from "../contact";
import {environment} from "../../../environments/environment";
import 'rxjs/Rx';

@Injectable()
export class ContactApiStorageService {

  private url = environment.storageUrl + "/contacts";

  constructor(private http: Http) {
  }

  findContacts() {
    console.log('Read api contacts');
    return this.http.get('http://localhost:49478/api/contacts').map(response => response.json() as Contact[]);
  }

  addNewContact(contact: Contact) {
    return this.http.post(this.url, contact);
  }

  editContact(contact: Contact) {
    return this.http.put(this.url, contact);
  }

  deleteContact(contact: Contact) {
    return this.http.delete(this.url + '/' + contact.id);
  }

}
