import {Component, Input, OnInit, Output} from '@angular/core';
import {Contact} from "../contact";

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent implements OnInit {

  @Input() contactIn: Contact;
  @Output() contactOut: Contact;

  constructor() { }

  ngOnInit() {
  }

  onClick(){

  }

}
