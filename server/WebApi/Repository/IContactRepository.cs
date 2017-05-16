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




        //   Contact FindById(int id);
        //    
        //   void Update(Contact contact);
        //   void Delete(int id);
    }
}
