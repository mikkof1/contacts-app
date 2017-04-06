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
  title: string='New Contact';
  firstName:string='Matti';
  lastName:string='Virtanen';
  phone:string='555-01234';
  address:string="Katajakatu 5 as 7";
  city:string='Tuppukylä';

  constructor() { }

  ngOnInit() {
  }

  onClick(){

  }

}
