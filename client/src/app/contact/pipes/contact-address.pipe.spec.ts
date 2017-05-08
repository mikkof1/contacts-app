import {ContactAddressPipe} from './contact-address.pipe';
import {Contact} from "../contact";

describe('ContactAddressPipe', () => {
  const pipe = new ContactAddressPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return address and city', () => {
    let contact = new Contact(1, 'Firstname', 'Lastname', '555-5555', 'Street address', 'City');
    expect(pipe.transform(contact)).toBe(contact.address + ', ' + contact.city);
  });

  it('should return address', () => {
    let contact = new Contact(1, 'Firstname', 'Lastname', '555-5555', 'Street address', '');
    expect(pipe.transform(contact)).toBe(contact.address);
    contact.city = null;
    expect(pipe.transform(contact)).toBe(contact.address);
  });

  it('should return city', () => {
    let contact = new Contact(1, 'Firstname', 'Lastname', '555-5555', '', 'City');
    expect(pipe.transform(contact)).toBe(contact.city);
    contact.address = null;
    expect(pipe.transform(contact)).toBe(contact.city);
  });

  it('should return empty string', () => {
    let contact = new Contact(1, 'Firstname', 'Lastname', '555-5555', '', '');
    expect(pipe.transform(contact)).toBe('');
    expect(pipe.transform(null)).toBe('');
  });


});
