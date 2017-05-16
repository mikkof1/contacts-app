using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Services
{
    public interface IContactService
    {
        List<Contact> FindAllContacts();
        void CreateContact(Contact contact);
        //   Contact FindContactById(int id);
        //   
        //   void UpdateContact(Contact contact);
        //   void DeleteContact(int id);

    }
}
