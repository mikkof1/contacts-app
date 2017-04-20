import {Component, OnInit} from '@angular/core';
import {ContactService} from "./services/contact.service";
import {DialogService} from "./services/dialog.service";
import {Contact} from "./contact";
import {ApiContactService} from "./services/api-contact.service"


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

  reloadContacts() {
    this.contactService.findAllContacts().subscribe(data => {
      this.contactsList = data;
      console.log('data: ' + data);
    });
  }

  addNewContact(contact: Contact) {
    this.contactService.addNewContact(contact).subscribe(data=>{
      this.reloadContacts();
    });
  }

  editContact(contact: Contact) {
    this.contactService.editContact(contact).subscribe(data=>{
      this.reloadContacts();
    });
  }

  deleteContact(contact:Contact){
    this.contactService.deleteContact(contact).subscribe(data=>{
      this.reloadContacts();
    });
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


  /*
   constructor(private apiContactServices: ApiContactService){
   apiContactServices.findContacts().subscribe(res=>{
   this.contactsList=res;
   });
   }


   constructor(private contactServices: ContactService, private dialogServices: DialogService) {
   this.contactsList = this.contactServices.findContactsLocal();
   }
   */

  ngOnInit() {
  }

  /*
   addNewContact() {
   this.contactServices.addNewContactLocal();
   }

   deleteContact(contact: Contact) {
   this.contactServices.deleteContactLocal(contact);
   this.contactsList = this.contactServices.findContactsLocal();
   }

   editContact(contact: Contact) {
   this.contactServices.editContactLocal(contact);
   this.contactsList = this.contactServices.findContactsLocal();
   }

   showMap(contact: Contact) {
   this.dialogServices.openMap(contact);
   }
   */
}
