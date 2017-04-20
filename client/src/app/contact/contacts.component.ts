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

  constructor(private contactService: ContactService, private dialogService: DialogService) {
    this.reloadContacts();
  }

  ngOnInit() {
  }

  reloadContacts() {
    //  this.contactService.findAllContacts().subscribe(data => this.contactsList = data);
    this.contactsList = this.contactService.findAllContacts();
  }

  addNewContact(contact: Contact) {
    //   this.contactService.addNewContact(contact).subscribe(data=>{this.reloadContacts();});
    this.contactsList = this.contactService.addNewContact(contact);
  }

  editContact(contact: Contact) {
    //  this.contactService.editContact(contact).subscribe(data=>{this.reloadContacts();});
    this.contactsList = this.contactService.editContact(contact);
  }

  deleteContact(contact: Contact) {
    //  this.contactService.deleteContact(contact).subscribe(data=>{this.reloadContacts();});
    this.contactsList = this.contactService.deleteContact(contact);
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
