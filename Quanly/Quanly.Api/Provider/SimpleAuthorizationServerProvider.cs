using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.Owin.Security.OAuth;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity.EntityFramework;
using Quanly.Data;
using Quanly.Service.Service;

namespace Quanly.Api.Provider
{
    public class SimpleAuthorizationServerProvider : OAuthAuthorizationServerProvider
    {
        private UserService us = new UserService();
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }
        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            //context.Validated(new ClaimsIdentity(context.Options.AuthenticationType));
            context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { "*" });



            var user = us.GetUser(context.UserName, context.Password);
            if (user == null)
            {

                context.SetError("invalid_grant", "The user name or password is incorrect.");

                return;
            }
            var identity = new ClaimsIdentity(context.Options.AuthenticationType);
            identity.AddClaim(new Claim("sub", context.UserName));
            identity.AddClaim(new Claim("role", "user"));

            context.Validated(identity);

        }
    }
}