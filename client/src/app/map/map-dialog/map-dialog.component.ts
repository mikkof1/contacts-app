import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "../../contact/contact";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-map-dialog',
  templateUrl: './map-dialog.component.html',
  styleUrls: ['./map-dialog.component.css']
})

export class MapDialogComponent implements OnInit {

  @Input() contact: Contact;
  url: string;

  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.url = 'https://maps.google.com/maps?output=embed&q=' + this.contact.address + ',+' + this.contact.city;
    console.log('mapUrl: ' + this.url);
  }

  trustedUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }


}
