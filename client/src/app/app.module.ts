import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule, MdDialog} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router'

import {AppComponent} from './app.component';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactListItemComponent} from './contact/contact-list-item/contact-list-item.component';
import {ContactService} from "./contact/services/contact.service";
import {DialogService} from "./contact/services/dialog.service";
import {ApiContactService} from "./contact/services/api-contact.service";
import {ContactDialogComponent} from './contact/Dialogs/contact-dialog/contact-dialog.component';
import { MapDialogComponent } from './map/map-dialog/map-dialog.component';
import { ContactAddressPipe } from './contact/pipes/contact-address.pipe';
import { ContactsComponent } from './contact/contacts.component';

const routes = [
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    component: ContactsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDialogComponent,
    MapDialogComponent,
    ContactAddressPipe,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ContactService, DialogService, ApiContactService],
  bootstrap: [AppComponent],
  entryComponents: [ContactDialogComponent, MapDialogComponent]
})
export class AppModule {

}
