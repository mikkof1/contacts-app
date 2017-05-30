using System;
using WebApi.Models;

namespace WebApi.Services
{
    public interface IUserService
    {
        User FindAppUserByNameAndPassword(string userName, string password);
        User FindAppUserByName(string userName);
        void CreateAppUser(User user);
    }
}
