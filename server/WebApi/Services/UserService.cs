using System;
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

        public User FindAppUserByNameAndPassword(string userName, string password)
        {
            return _userRepository.FindUserByNameAndPassword(userName, password);
        }

        public User FindAppUserByName(string userName)
        {
            return _userRepository.FindUserByName(userName);
        }

        public void CreateAppUser(User user)
        {
            _userRepository.Create(user);
        }

    }
}
