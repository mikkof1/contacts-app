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
import {ContactDialogComponent} from './contact/Dialogs/contact-dialog/contact-dialog.component';
import {MapDialogComponent} from './map/map-dialog/map-dialog.component';
import {ContactAddressPipe} from './contact/pipes/contact-address.pipe';
import {ContactsComponent} from './contact/contacts.component';
import {LoginComponent} from './user/login/login.component';
import {ContactApiStorageService}from './contact/services/contact-api-storage.service';
import {ContactLocalStorageService}from './contact/services/contact-local-storage.service';
import { ContactNamePipe } from './contact/pipes/contact-name.pipe';

const routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
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
    ContactsComponent,
    LoginComponent,
    ContactNamePipe
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
  providers: [ContactService, DialogService, ContactApiStorageService, ContactLocalStorageService],
  bootstrap: [AppComponent],
  entryComponents: [ContactDialogComponent, MapDialogComponent]
})
export class AppModule {

}
