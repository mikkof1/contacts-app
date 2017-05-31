import {Injectable} from '@angular/core';
import {Contact} from "../contact";
import {environment} from "../../../environments/environment";
import 'rxjs/Rx';
import {HttpService} from "../../utils/http.service";

@Injectable()
export class ContactApiStorageService {

  private url = environment.storageUrl + "/contacts";

  constructor(private http: HttpService) {
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
    return this.http.delete(this.url + '/' + contact.id);
  }

}
