import {Injectable, Input} from '@angular/core';
import {Contact} from "../contact";
import {MdDialog, MdDialogRef} from "@angular/material";
import {ContactDialogComponent} from "../contact-dialog/contact-dialog.component";

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


}

