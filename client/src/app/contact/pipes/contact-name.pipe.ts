import { Pipe, PipeTransform } from '@angular/core';
import {Contact} from "../contact";
import * as _ from "lodash";

@Pipe({
  name: 'contactName'
})
export class ContactNamePipe implements PipeTransform {

  transform(contact: Contact, args?: any): any {

    let parts = [contact.firstName || null, contact.lastName || null];
    parts = _.reject(parts, _.isNull);

    return parts.join(' ');
  }

}
