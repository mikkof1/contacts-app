import {Observable} from "rxjs/Observable";
import {Contact} from "../contact";

export interface ContactStorageInterface {
  findContacts(): Observable<Contact[]>;
  addNewContact(contact: Contact): Observable<any>;
  editContact(contact: Contact): Observable<any>;
  deleteContact(contact: Contact): Observable<any>;
}
