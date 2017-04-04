using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ContactsApi.Models;
using ContactsApi.Services;

namespace ContactsApi.Controllers
{
    public class ContactsController : ApiController
    {
        private readonly Contact _contact = new Contact();
        private readonly ContactsHandler _contactsHandler = new ContactsHandler();

        [HttpGet]
       // [Route("api/all")]
        public Contact[] GetWholeList()
        {
            return _contactsHandler.GetList().ToArray();
        }

        [HttpPost]
       // [Route("api/new")]
        public int PostNewContact([FromBody] Contact contact)
        {
            return _contactsHandler.AddNewContact(contact);
        }

        [HttpDelete]
       // [Route("api/del")]
        public bool DeleteContact([FromBody] Contact contact)
        {
            return _contactsHandler.DeleteContact(contact);
        }

        [HttpPut]
       // [Route("api/edit")]
        public bool PutEditContact([FromBody] Contact contact)
        {
            return _contactsHandler.EditContact(contact);
        }

    }
}
