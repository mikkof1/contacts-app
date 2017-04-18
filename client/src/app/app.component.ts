import {Component} from '@angular/core';
import {Contact} from "./contact/contact";
import {ContactService} from "./contact/services/contact.service";
import {DialogService} from "./contact/services/dialog.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contact list';

  contactsList: Contact[];

  constructor(private contactServices: ContactService, private dialogServices: DialogService) {
    this.contactServices.findContacts().subscribe(response => {
      this.contactsList = response;
    });
  }

  addNewContact() {
    // this.contactServices.addNewContact();
    this.contactServices.addNewContact(this.contactsList);
  }

  deleteContact(contact: Contact) {
    this.contactServices.deleteContact(contact);
  //  this.contactsList = this.contactServices.findContacts();
  }

  editContact(contact: Contact) {
    //   this.contactServices.editContact(contact);
  }

  showMap(contact: Contact) {
    this.dialogServices.openMap(contact);
  }

}
