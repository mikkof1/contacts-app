import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from "../contact";

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact;
  @Output() edit: EventEmitter<Contact>;
  @Output() remove: EventEmitter<Contact>;
  @Output() showOnMap: EventEmitter<Contact>;

  constructor() {
    this.remove = new EventEmitter();
    this.edit = new EventEmitter();
    this.showOnMap = new EventEmitter();
  }

  ngOnInit() {
  }

  deleteContactItem() {
    console.log('this is delete button: ' + this.contact.id);
    this.remove.emit(this.contact);
  }

  editContactItem() {
    this.edit.emit(this.contact);
  }


  showMapItem() {
    this.showOnMap.emit(this.contact);
  }

}
