using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;
using WebApi.Repository;

namespace WebApi.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public User FindAppUser(string userName, string password)
        {
            return _userRepository.FindUser(userName, password);
        }

        public void CreateAppUser(User user)
        {
            _userRepository.Create(user);
        }

    }
}
