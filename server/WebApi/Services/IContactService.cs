using System;
using System.Collections.Generic;
using WebApi.Models;

namespace WebApi.Services
{
    public interface IContactService
    {
        List<Contact> FindAllContacts();
        void CreateContact(Contact contact);
        void UpdateContact(Contact contact);
        void DeleteContact(int id);
    }
}
