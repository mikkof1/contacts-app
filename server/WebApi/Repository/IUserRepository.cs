﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Repository
{
    public interface IUserRepository
    {
        User FindUser(string userName, string password);
        void Create(User user);
    }
}
