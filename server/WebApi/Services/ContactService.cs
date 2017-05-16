using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;
using WebApi.Repository;

namespace WebApi.Services
{
    public class ContactService : IContactService
    {
        private readonly IContactRepository _repository;
        private bool _testDataNeeded = true;

        public ContactService(IContactRepository repository)
        {
            _repository = repository;

            if (_testDataNeeded)
            {
                _testDataNeeded = false;
                List<Contact>

            }

        }

        public List<Contact> FindAllContacts()
        {
            return _repository.FindAll();
        }

        public void CreateContact(Contact contact)
        {
            _repository.Create(contact);
        }







        private List<Contact> TestContactsList()
        {
            List<Contact> contactsList = new List<Contact>();

            Contact con1 = new Contact
            {
                id = 1,
                firstName = "Aku",
                lastName = "Ankka",
                phone = "456-789789",
                address = "Paratiisitie 13",
                city = "Ankkalinna"
            };
            contactsList.Add(con1);

            Contact con2 = new Contact()
            {
                id = 2,
                firstName = "Teppo",
                lastName = "Tulppu",
                phone = "456-123123",
                address = "Paratiisitie 14",
                city = "Ankkalinna"
            };
            contactsList.Add(con2);

            Contact con3 = new Contact()
            {
                id = 3,
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
