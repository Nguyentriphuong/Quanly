using Quanly.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Quanly.Service.Service
{
    
    public class UserService
    {
        private QuanlyEntities db = new QuanlyEntities();
        public User GetUser(string Username, string Password)
        {

            var user = db.Users.Where(x => x.Username.Equals(Username) && x.Password.Equals(Password)).FirstOrDefault();
            return user;
                 
        }
    }
}