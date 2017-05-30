using System;
using System.Collections.Generic;
using System.Linq;
using WebApi.Models;

namespace WebApi.Repository
{
    public class ContactRepository : IContactRepository
    {
        private readonly DatabaseContext _context;
        private readonly bool _testDataNeeded = false;

        public ContactRepository(DatabaseContext context)
        {
            _context = context;

            if (_testDataNeeded)
            {
                _testDataNeeded = false;
                if (!_context.Contacts.Any())
                {
                    List<Contact> testList = TestContactsList();
                    foreach (Contact contact in testList)
                    {
                        Create(contact);
                    }
                }

            }
        }

        public List<Contact> FindAll()
        {
            var contacts = _context.Contacts.ToList();
            return contacts;
        }

        public void Create(Contact contact)
        {
            _context.Contacts.Add(contact);
            _context.SaveChanges();
        }

        public void Update(Contact contact)
        {
            _context.Contacts.Update(contact);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var contact = _context.Contacts.FirstOrDefault(con => con.id == id);
            if (contact != null)
            {
                _context.Remove(contact);
                _context.SaveChanges();
            }

        }

        
        private List<Contact> TestContactsList()
        {
            List<Contact> contactsList = new List<Contact>();

            Contact con1 = new Contact
            {
                firstName = "Aku",
                lastName = "Ankka",
                phone = "456-789789",
                address = "Paratiisitie 13",
                city = "Ankkalinna"
            };
            contactsList.Add(con1);

            Contact con2 = new Contact()
            {
                firstName = "Sql",
                lastName = "Server",
                phone = "911",
                address = "localhost",
                city = "computer"
            };
            contactsList.Add(con2);

            Contact con3 = new Contact()
            {
                firstName = "Bruce",
                lastName = "Wayne",
                phone = "555-666 123",
                address = "Wayne Manor",
                city = "Gotham City"
            };
            contactsList.Add(con3);

            return contactsList;
        }


    }
}
