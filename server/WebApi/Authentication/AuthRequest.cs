﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Authentication
{
    public class AuthRequest
    {
        public string UserName { get; set; }
        public string Password { get; set; }

        public AuthRequest()
        {
            
        }

    }
}
