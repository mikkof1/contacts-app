import {Injectable, Input} from '@angular/core';
import {Contact} from "../contact";
import {MdDialog, MdDialogRef} from "@angular/material";
import {ContactDialogComponent} from "../Dialogs/contact-dialog/contact-dialog.component";
import {MapDialogComponent} from "../Dialogs/map-dialog/map-dialog.component";

@Injectable()
export class DialogService {


  constructor(private dialog: MdDialog) {
  }

  public contactDialog(contact?: Contact) {
    console.log('This is dialog service contactDialog method message :)');
    let dialogRef = this.dialog.open(ContactDialogComponent);
    dialogRef.componentInstance.contactInn = contact;
    return dialogRef.afterClosed();
  }

  public openMap(contact: Contact){
    let dialogRef = this.dialog.open(MapDialogComponent);
    dialogRef.componentInstance.contact = contact;
    return dialogRef.afterClosed();
  }

}

