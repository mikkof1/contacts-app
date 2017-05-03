import { Pipe, PipeTransform } from '@angular/core';
import {Contact} from "../contact";
import * as _ from "lodash";

@Pipe({
  name: 'contactName'
})
export class ContactNamePipe implements PipeTransform {

  transform(contact: Contact, args?: any): any {

    let addressParts = [contact.firstName || null, contact.lastName || null];
    addressParts = _.reject(addressParts, _.isNull);

    return addressParts.join(' ');
  }

}
