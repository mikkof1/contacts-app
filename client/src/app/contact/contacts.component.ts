import {Component, OnInit} from '@angular/core';
import {ContactService} from "./services/contact.service";
import {DialogService} from "./services/dialog.service";
import {Contact} from "./contact";


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  title = 'Contact list';

  contactsList: Contact[];

  constructor(private contactServices: ContactService, private dialogServices: DialogService) {
    this.contactsList = this.contactServices.findContactsLocal();
  }

  ngOnInit() {
  }

  addNewContact() {
    this.contactServices.addNewContactLocal();
  }

  deleteContact(contact: Contact) {
    this.contactServices.deleteContactLocal(contact);
    this.contactsList = this.contactServices.findContactsLocal();
  }

  editContact(contact: Contact) {
    this.contactServices.editContactLocal(contact);
  }

  showMap(contact: Contact) {
    this.dialogServices.openMap(contact);
  }
}
