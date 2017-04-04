import {Component} from '@angular/core';
import {Contact} from "./contact/contact";
import {ContactService} from "./contact/services/contact.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contact list';

  contactsList: Contact[];

  constructor(contactServices: ContactService) {
    this.contactsList = contactServices.findContacts();
  }

}
