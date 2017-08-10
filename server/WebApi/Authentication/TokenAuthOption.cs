using System;
using Microsoft.IdentityModel.Tokens;
using System.Security.Cryptography;

namespace WebApi.Authentication
{
    public class TokenAuthOption
    {
        public static RsaSecurityKey Key { get; } = new RsaSecurityKey(RsaKey());
        public static string Audience { get; } = "ekoodiAudience";
        public static string Issuer { get; } = "ekoodiIssuer";
        public static SigningCredentials SigningCredentials { get; }=new SigningCredentials(Key,SecurityAlgorithms.RsaSha256Signature);
        public static TimeSpan ExpiresSpan { get; }=TimeSpan.FromMinutes(15);
        public static string TokenType { get; } = "Bearer";
        
        private static RSA RsaKey()
        {
            using (var rsa = RSA.Create())
            {
                rsa.KeySize = 2048;
                return rsa;
            }
        }
        
    }

}
