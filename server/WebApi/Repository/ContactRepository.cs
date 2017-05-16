using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Repository
{
    public class ContactRepository : IContactRepository
    {
        private readonly DatabaseContext _context;

        public ContactRepository(DatabaseContext context)
        {
            _context = context;
        }

        public List<Contact> FindAll()
        {
            var contacts = _context.Contacts.ToList();
            return contacts;
        }

        public void Create(Contact contact)
        {
            _context.Contacts.Add(contact);
        }

    }
}
