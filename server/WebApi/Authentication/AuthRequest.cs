using System;

namespace WebApi.Authentication
{
    public class AuthRequest
    {
        public string UserName { get; set; }
        public string Password { get; set; }

        public AuthRequest(string userName, string password)
        {
            UserName = userName;
            Password = password;
        }

    }
}
