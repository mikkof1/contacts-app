import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from "../../contact";
import {DialogService} from "../../services/dialog.service";
import {ContactListComponent} from "../contact-list.component";

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact;
  @Input() edit: EventEmitter<Contact>;
  @Output() remove: EventEmitter<Contact>;
  @Input() showOnMap: EventEmitter<Contact>;

  constructor() {
    this.remove = new EventEmitter();
  }

  ngOnInit() {
  }

  deleteContact() {
    console.log('this is delete button: ' + this.contact.id);
    this.remove.emit(this.contact);
  }

  editContact() {
    console.log('this is edit button: ' + this.contact.id);

  }


  openMap() {
    console.log('Map open: ' + this.contact.id);
  }

}
