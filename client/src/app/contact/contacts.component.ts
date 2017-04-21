import {Component, OnInit} from '@angular/core';
import {ContactService} from "./services/contact.service";
import {DialogService} from "./services/dialog.service";
import {Contact} from "./contact";
import {environment} from "../../environments/environment";


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  title = 'Contact list';

  contactsList: Contact[];

  constructor(private contactService: ContactService, private dialogService: DialogService) {
    this.reloadContacts();
  }

  ngOnInit() {

    console.log('enviroment name: ' + environment.envName);
  }

  reloadContacts() {
    if (environment.envName == 'api') {
      this.contactService.findAllContacts().subscribe(data => this.contactsList = data);
    }
    else {
      this.contactsList = this.contactService.findAllContactsLocal();
    }

  }

  addNewContact(contact: Contact) {
    if (environment.envName == 'api') {

      this.contactService.addNewContact(contact).subscribe(data => {
        this.reloadContacts();
      });
    }
    else {
      this.contactsList = this.contactService.addNewContactLocal(contact);
    }
  }

  editContact(contact: Contact) {
    if (environment.envName == 'api') {
      this.contactService.editContact(contact).subscribe(data => {
        this.reloadContacts();
      });
    }
    else {
      this.contactsList = this.contactService.editContactLocal(contact);
    }
  }

  deleteContact(contact: Contact) {
    if (environment.envName == 'api') {
      this.contactService.deleteContact(contact).subscribe(data => {
        this.reloadContacts();
      });
    }
    else {
      this.contactsList = this.contactService.deleteContactLocal(contact);
    }
  }

  openDialog(contact?: Contact) {
    let returnValue = this.dialogService.contactDialog(contact);

    returnValue.subscribe(returnContact => {
      if (!returnContact) {
        return;
      }
      if (returnContact.id) {
        this.editContact(returnContact);
      }
      else {
        this.addNewContact(returnContact);
      }
    });

  }

  showMap(contact: Contact) {
    this.dialogService.openMap(contact);
  }


}
