import {Injectable} from '@angular/core';
import {Contact} from "../contact";
import {DialogService} from "./dialog.service";

@Injectable()
export class ContactService {

  private testListIsNeeded: boolean = true;

  private contacts: Contact[];
  private contact: Contact;
  private contactLocalStorageKey: string = 'ca-storageKey';

  constructor(private dialogService: DialogService) {
    if (!localStorage.getItem(this.contactLocalStorageKey)) {
      localStorage.setItem(this.contactLocalStorageKey, JSON.stringify([]));
      if (this.testListIsNeeded) {
        this.mekeTestList();
        this.saveContactsToLocalStorage();
      }
    }

  }


  public findContacts() {//: Contact[] {

    console.log('Open localstorage ');

    let data = localStorage.getItem(this.contactLocalStorageKey);
    let table = JSON.parse(data);
    let contacts = [];

    for (var i = 0; i < table.length; i++) {
      let localContact: Contact = new Contact(table[i]._id, table[i]._firstName, table[i]._lastName, table[i]._phone, table[i]._address, table[i]._city);
      contacts.push(localContact);
    }

    this.contacts = contacts;

    return this.contacts;
  }

  public addNewContact() {
    console.log('addFunction contacService Contacts= ' + this.contacts);
    let returnValue = this.dialogService.contactDialog();
    let nextId = 0;
    let lastId = this.contacts.map(function (c) {
      if (c.id > nextId) {
        nextId = c.id
      }
    });
    nextId++;

    console.log('nextId: ' + nextId);
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

  public deleteContact(contact: Contact) {
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
}
