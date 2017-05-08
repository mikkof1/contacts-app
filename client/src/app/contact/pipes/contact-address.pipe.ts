import {Pipe, PipeTransform} from '@angular/core';
import {Contact} from "../contact";
import * as _ from "lodash";


@Pipe({
  name: 'contactAddress'
})
export class ContactAddressPipe implements PipeTransform {

  transform(contact: Contact, args?: any): any {

    if (!contact) return '';
    function parseAddress(address, city) {
      let addressParts = [address || null, city || null];
      addressParts = _.reject(addressParts, _.isNull);
      return addressParts.join(', ');
    }

    return parseAddress(contact.address, contact.city);
  }


}
