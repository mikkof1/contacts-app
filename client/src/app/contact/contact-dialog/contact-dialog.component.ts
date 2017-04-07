import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from "../contact";
import {DialogService} from "../services/dialog.service";
import {ContactService} from "../services/contact.service";
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent implements OnInit {

  @Input() contactInn: Contact;

  title: string = 'New Contact';
  btnSaveText: string = 'Add';

  id: number = -1;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;

  contact: Contact = new Contact(this.id, this.firstName, this.lastName, this.phone, this.address, this.city);

  constructor( private dialogRef:MdDialogRef<ContactDialogComponent>) {

  }

  ngOnInit() {
    if (this.contactInn) {
      this.id = this.contactInn.id;
      this.firstName = this.contactInn.firstName;
      this.lastName = this.contactInn.lastName;
      this.phone = this.contactInn.phone;
      this.address = this.contactInn.address;
      this.city = this.contactInn.city;
    }
  }

  onSave() {
    this.contact.firstName = this.firstName;
    this.contact.lastName = this.lastName;
    this.contact.phone = this.phone;
    this.contact.address = this.address;
    this.contact.city = this.city;

    console.log('return this: ' + this.contact);

    this.dialogRef.close(this.contact);
  }

}