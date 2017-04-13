import {Injectable} from '@angular/core';
import {Contact} from "../contact";
import {DialogService} from "./dialog.service";
import {Http} from "@angular/http";

@Injectable()
export class ContactService {

  private testListIsNeeded: boolean = true;

  // private contacts: Contact[];
  private contact: Contact;
  private contactLocalStorageKey: string = 'ca-storageKey';

  private apiUrl: string = "http://localhost:51343/api/contacts/";
  private headers;

  constructor(private dialogService: DialogService, private http: Http) {

    this.headers = new Headers({
      'Content-Type': 'application/json'
    });

    /* // For LocalStorage use : Save for Educational use
     if (!localStorage.getItem(this.contactLocalStorageKey)) {
     localStorage.setItem(this.contactLocalStorageKey, JSON.stringify([]));
     if (this.testListIsNeeded) {
     this.mekeTestList();
     this.saveContactsToLocalStorage();
     }
     }*/

  }

  public findContacts(): any {
    return this.http.get(this.apiUrl).map(response => response.json());
  }

  public addNewContact(contacts: Contact[]) {
    console.log('New contact canceled');
    let returnValue = this.dialogService.contactDialog();
    returnValue.subscribe(result => {
      if (!result) {
        console.log('New contact canceled');
        return;
      }
      let newContact = result;

      contacts.push(newContact);
      this.addNewContactToApi(newContact);
    });

  }

  private addNewContactToApi(contact: Contact) {
    console.log('New contact get api');
    let data = JSON.stringify(contact);
    this.http.post(this.apiUrl, data, this.headers);
  }


























  /*
   // ----------------- For LocalStorage use : Save for Educational use ------------------------------------- //

   public findContactsLocal(): Contact[] {

   console.log('Open localstorage ');

   let data = localStorage.getItem(this.contactLocalStorageKey);
   this.contacts = JSON.parse(data);
   return this.contacts;
   }


   public addNewContactLocal() {
   console.log('addFunction contacService Contacts= ' + this.contacts);
   let returnValue = this.dialogService.contactDialog();
   let nextId = 0;
   let lastId = this.contacts.map(function (c) {
   if (c.id > nextId) {
   nextId = c.id
   }
   });
   nextId++;

   returnValue.subscribe(result => {
   if (!result) {
   return;
   }
   let newContact = result;
   newContact.id = nextId;
   this.contacts.push(newContact);
   this.saveContactsToLocalStorage();
   });

   }

   public editContactLocal(contact: Contact) {
   let returnValue = this.dialogService.contactDialog(contact);
   let index = this.contacts.findIndex(c => c.id == contact.id);
   returnValue.subscribe(result => {
   if (!result) {
   return;
   }
   let editedContact = result;
   this.contacts[index] = editedContact;
   this.saveContactsToLocalStorage();
   });
   }

   public deleteContactLocal(contact: Contact) {
   console.log('This contact will be erased= ' + contact.id);
   let editList: Contact[] = [];
   for (let i = 0; i < this.contacts.length; i++) {
   if (this.contacts[i].id != contact.id) {
   editList.push(this.contacts[i]);
   }
   }
   this.contacts = editList;
   this.saveContactsToLocalStorage();
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
   */

}
