using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Repository
{
    public interface IUserRepository
    {
        User FindUserByNameAndPassword(string userName, string password);
        User FindUserByName(string userName);
        void Create(User user);
    }
}
