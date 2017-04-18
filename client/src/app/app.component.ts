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
    this.contactsList = this.contactServices.findContactsLocal();
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
