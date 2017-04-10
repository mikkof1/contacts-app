import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "../../contact";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-map-dialog',
  templateUrl: './map-dialog.component.html',
  styleUrls: ['./map-dialog.component.css']
})
export class MapDialogComponent implements OnInit {

  @Input() contact: Contact;
  mapUrl: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    let url ='www.google.fi';// 'https://www.google.fi/maps/place/' + this.contact.address + ',+' + this.contact.city;
    console.log('mapUrl: ' + url);
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


}
