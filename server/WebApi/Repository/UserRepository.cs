using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Repository
{
    public class UserRepository
    {
        private readonly DatabaseContext _context;
        private bool _testDataNeeded = true;

        public UserRepository(DatabaseContext context)
        {
            _context = context;

            if (_testDataNeeded)
            {
                _testDataNeeded = false;
                if (!_context.Contacts.Any())
                {
                    List<User> testList = TestUsersList();
                    foreach (User user in testList)
                    {
                        Create(user);
                    }
                }

            }
        }

        public User FindUser(string userName, string password)
        {
            User user = _context.Users.FirstOrDefault(u => u.userName == userName && u.password == password);
            return user;
        }

        public void Create(User user)
        {
            _context.Add(user);
            _context.SaveChanges();
        }


        private List<User> TestUsersList()
        {
            List<User> returnList = new List<User>();

            User user1=new User
            {
                userName = "admin",
                password = "admin",
                email = "admin@email.com"
            };
            returnList.Add(user1);

            User user2 = new User
            {
                userName = "mikko",
                password = "mikko",
                email = "mikko@email.com"
            };
            returnList.Add(user1);

            return returnList;
        }

    }
}
