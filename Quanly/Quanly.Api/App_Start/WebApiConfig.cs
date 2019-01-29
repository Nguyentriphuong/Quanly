using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Formatting;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Quanly.Api
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            //var enableCorsAttribute = new EnableCorsAttribute("http://localhost:1997", "Origin,Content-Type,Accept", "GET ,PUT ,POST ,DELETE, OPTIONS");
            //config.EnableCors(enableCorsAttribute);

            //// Web API configuration and services
            ///
            var cors = new EnableCorsAttribute("http://localhost:8080", "*", "*");
            config.EnableCors(cors);
            // Web API configuration and services  
            config.Formatters.Clear();
            config.Formatters.Add(new JsonMediaTypeFormatter());
            // Configure Web API to use only bearer token authentication.  
            //config.SuppressDefaultHostAuthentication();
            //config.Filters.Add(new HostAuthenticationFilter(OAuthDefaults.AuthenticationType));
            // Web API routes  
            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(
                name: "ActionApi",
                routeTemplate: "quanly/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "quanly/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
