import {Injectable} from '@angular/core';
import {Contact} from "../contact";
import {DialogService} from "./dialog.service";

@Injectable()
export class ContactService {

  public contacts: Contact[];
  private contact: Contact;

  constructor(private dialogService: DialogService) {


  }


  public findContacts(): Contact[] {
    if (!this.contacts) {
      this.mekeTestList();
    }
    return this.contacts;
  }

  public addNewContact() {
    console.log('addFunction contacService Contacts= ' + this.contacts);
    let returnValue = this.dialogService.contactDialog();

    returnValue.subscribe(joku => {
      this.contacts.push(joku)
    });

  }

  private mekeTestList() {
    this.contacts = [
      new Contact(1, 'Mauno', 'Mäki', '+358 991 123', 'Ääkköskuja 58 b 9', 'Åålandia'),
      new Contact(2, 'Bruce', 'Wayne', '555-1234', 'Wayne Manor', 'Gotham City'),
      new Contact(3, 'Mikki', 'Hiiri', '888 12332', 'Torikatu 5', 'Ankkalinna'),
      new Contact(8, 'Aku', 'Ankka', '456-789789', 'Paratiisitie 13', 'Ankkalinna')
    ];
  }
}
