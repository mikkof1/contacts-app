using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Principal;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using WebApi.Authentication;
using WebApi.Services;
using WebApi.Models;


namespace WebApi.Controllers
{
    [Route("api/auth")]
    public class AuthenticationController : Controller
    {
        private readonly IUserService _userService;

        public AuthenticationController(IUserService userService)
        {
            _userService = userService;
        }


        [HttpPost]
        public IActionResult PostGetAuthToken([FromBody]AuthRequest authRequest)
        {
            if (authRequest == null) { return Unauthorized(); }

            User user = _userService.FindAppUserByNameAndPassword(authRequest.UserName, authRequest.Password);
            if (user != null)
            {
                string token = GenerateToken(user);
                return new JsonResult(new AuthResponse(user.id.ToString(), token));
            }

            return Unauthorized();
        }


        private string GenerateToken(User user)
        {
            var handler = new JwtSecurityTokenHandler();
            var expires = DateTime.Now + TokenAuthOption.ExpiresSpan;

            ClaimsIdentity identity = new ClaimsIdentity(
                new GenericIdentity(user.userName, "TokenAuth"),
                new[]{
                    new Claim("id", user.id.ToString()),
                });

            var securityToken = handler.CreateToken(new SecurityTokenDescriptor
            {
                Issuer = TokenAuthOption.Issuer,
                Audience = TokenAuthOption.Audience,
                SigningCredentials = TokenAuthOption.SigningCredentials,
                Subject = identity,
                Expires = expires
            });
            return handler.WriteToken(securityToken);
        }



    }
}
