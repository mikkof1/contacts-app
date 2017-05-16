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


        public ContactService(IContactRepository repository)
        {
            _repository = repository;
        }

        public List<Contact> FindAllContacts()
        {
            return _repository.FindAll();
        }

        public void CreateContact(Contact contact)
        {
            _repository.Create(contact);
        }

        public void UpdateContact(Contact contact)
        {
            _repository.Update(contact);
        }

        public void DeleteContact(int id)
        {
            _repository.Delete(id);
        }






    }
}
