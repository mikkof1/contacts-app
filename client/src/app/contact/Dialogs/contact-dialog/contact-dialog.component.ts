import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from "../../contact";
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

  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;

  contact: Contact = new Contact();

  constructor(private dialogRef: MdDialogRef<ContactDialogComponent>) {

  }

  ngOnInit() {
    console.log('dialog read contact');
    if (this.contactInn) {
      this.title = 'Edit Contact';
      this.btnSaveText = 'Save';
      this.contact = this.contactInn;

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

    this.dialogRef.close(this.contact);
  }


}
