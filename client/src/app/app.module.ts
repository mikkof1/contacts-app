// angular modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router'
import {ConnectionBackend, HttpModule, RequestOptions, XHRBackend} from '@angular/http';

// other modules
import { VibrationDirective } from './contact/services/vibration.directive';

// components
import {AppComponent} from './app.component';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactListItemComponent} from './contact/contact-list-item/contact-list-item.component';
import {ContactDialogComponent} from './contact/Dialogs/contact-dialog/contact-dialog.component';
import {MapDialogComponent} from './map/map-dialog/map-dialog.component';
import {ContactsComponent} from './contact/contacts.component';
import {LoginComponent} from './user/login/login.component';

// services
import {ContactService} from "./contact/services/contact.service";
import {DialogService} from "./contact/services/dialog.service";
import {DeviceService} from "./contact/services/device.service";
import {HttpService}from './utils/http.service';
import {ContactApiStorageService}from './contact/services/contact-api-storage.service';
import {ContactLocalStorageService}from './contact/services/contact-local-storage.service';

// pipes
import { ContactNamePipe } from './contact/pipes/contact-name.pipe';
import {ContactAddressPipe} from './contact/pipes/contact-address.pipe';
import {AuthenticationService} from "./user/servises/authentication.service";
import {UserService} from "./user/servises/user.service";



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

export function getHttp(backend: ConnectionBackend, options: RequestOptions) {
  return new HttpService(backend, options);
}

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
    ContactNamePipe,
    VibrationDirective
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
  providers: [
    {
      provide: HttpService,
      useFactory: getHttp,
      deps: [XHRBackend, RequestOptions]
    },
    ContactService,
    DialogService,
    ContactApiStorageService,
    ContactLocalStorageService,
    DeviceService,
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ContactDialogComponent,
    MapDialogComponent
  ]
})
export class AppModule {

}
