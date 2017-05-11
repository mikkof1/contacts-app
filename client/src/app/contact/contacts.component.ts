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

  contactsList: Contact[];

  constructor(private contactService: ContactService, private dialogService: DialogService) {
    this.reloadContacts();
  }

  ngOnInit() {

  }

  reloadContacts() {
    this.contactService.findAllContacts().subscribe(data => {
      console.log('data: ' + data);
      this.contactsList = data;
    });
  }

  addNewContact(contact: Contact) {
    this.contactService.addNewContact(contact).subscribe(data => {
      this.reloadContacts();
    });
  }

  editContact(contact: Contact) {
    this.contactService.editContact(contact).subscribe(data => {
      this.reloadContacts();
    });
  }

  deleteContact(contact: Contact) {
   // navigator.vibrate(1000);
    let question = confirm('Do you realy want to delete this contact: '
      + contact.firstName + ' ' + contact.lastName);

    if (question) {
      this.contactService.deleteContact(contact).subscribe(data => {
        this.reloadContacts();
      });
    }
  }

  openDialog(contact?: Contact) {
  //  navigator.vibrate([400,300,400,300]);
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
