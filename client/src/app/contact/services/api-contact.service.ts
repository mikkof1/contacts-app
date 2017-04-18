import { Injectable } from '@angular/core';
import {Contact} from "../contact";
import {DialogService} from "./dialog.service";
import {Http, Headers, RequestOptions} from "@angular/http";



@Injectable()
export class ApiContactService {

  private contact: Contact;
  private apiUrl: string = "http://localhost:49478/api/contacts";
  private headers;

  constructor(private dialogService: DialogService, private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  public findContacts(): any {
    return this.http.get(this.apiUrl).map(response => response.json());
  }

  public addNewContact(contacts: Contact[]) {
    console.log('New contact start');
    let returnValue = this.dialogService.contactDialog();
    returnValue.subscribe(result => {
      if (!result) {
        console.log('New contact canceled');
        return;
      }
      let newContact = result;

      contacts.push(newContact);
      let data = JSON.stringify(newContact);

      this.http.post(this.apiUrl, data, {headers: this.headers}).subscribe(result => {
        console.log('New added: ' + result);
      });

    });

  }

  public deleteContact(contact: Contact) {
    console.log('Delete contact start');

    let data = JSON.stringify(contact);
    let options:RequestOptions = new RequestOptions({ headers: this.headers , body: data});

    this.http.delete(this.apiUrl,options).subscribe(result => {
      console.log('delete: ' + result);
    });



  }

}
