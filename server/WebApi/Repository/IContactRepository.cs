using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Repository
{
    public interface IContactRepository
    {
        List<Contact> FindAll();
        void Create(Contact contact);
        void Update(Contact contact);
        void Delete(int id);


        //   Contact FindById(int id);
        //    
        //   
        //   
    }
}
