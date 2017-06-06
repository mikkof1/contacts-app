import {Component, OnInit} from '@angular/core';
import {ContactService} from "./services/contact.service";
import {DialogService} from "./services/dialog.service";
import {Contact} from "./contact";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {UserService} from "../user/servises/user.service";
import * as _ from 'lodash';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {

  contactsList: Contact[];

  constructor(private contactService: ContactService, private dialogService: DialogService, private router: Router, private userService: UserService) {
    this.reloadContacts();
  }

  ngOnInit() {

  }

  reloadContacts() {
    this.isAutorized();
    this.contactService.findAllContacts().subscribe(data => {

    let sortedData =  _.sortBy(data, [function (user) {
        return user.firstName;
      }]);
      this.contactsList = sortedData;
    });
  }

  addNewContact(contact: Contact) {
    if (this.isAutorized()) {
      this.contactService.addNewContact(contact).subscribe(data => {
        this.reloadContacts();
      });
    }
  }

  editContact(contact: Contact) {
    this.isAutorized();
    this.contactService.editContact(contact).subscribe(data => {
      this.reloadContacts();
    });
  }

  deleteContact(contact: Contact) {
    this.isAutorized();
    // navigator.vibrate(1000);
    let question = confirm('Do you really want to delete this contact: '
      + contact.firstName + ' ' + contact.lastName);

    if (question) {
      this.contactService.deleteContact(contact).subscribe(data => {
        this.reloadContacts();
      });
    }
  }

  openDialog(contact?: Contact) {
    if (this.isAutorized()) {
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
  }

  showMap(contact: Contact) {
    if (this.isAutorized()) {
      this.dialogService.openMap(contact);
    }
  }

  private isAutorized() {
    if (environment.envName != 'local') {
      if (!this.userService.isLoggedIn()) {
        this.router.navigate(['login']);
        return false;
      }
    }
    return true;
  }

}
