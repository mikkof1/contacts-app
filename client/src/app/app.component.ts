import {Component, ViewChild} from '@angular/core';
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

  constructor(private contactServices: ContactService, private dialogService: DialogService ){
    this.contactsList = this.contactServices.findContacts();
  }

  addNewContact( ) {
    console.log('first');
     this.dialogService.contactDialog();
    console.log('second');
  }

}
