using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using WebApi.Models;
using WebApi.Services;
using Microsoft.AspNetCore.Authorization;

namespace WebApi.Controllers
{
    [Route("api/contacts")]
    [Authorize("Bearer")]
    public class ContactsController : Controller
    {
        private readonly Contact _contact = new Contact();

        private IContactService _contactService;

        public ContactsController(IContactService contactService)
        {
            _contactService = contactService;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<Contact> Get()
        {
            return _contactService.FindAllContacts();
        }

        [HttpPost]
        public void PostNewContact([FromBody] Contact contact)
        {
            _contactService.CreateContact(contact);
        }
        
        [HttpDelete("{id}")]
        public void DeleteContact(int id)
        {
            _contactService.DeleteContact(id);
        }

        [HttpPut]
        public void PutEditContact([FromBody] Contact contact)
        {
             _contactService.UpdateContact(contact);
        }
       
    }
}
