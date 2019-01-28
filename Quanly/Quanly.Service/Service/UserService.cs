using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Quanly.Data;

namespace Quanly.Service.Service
{
    public class UserService
    {
        public QuanlyEntities db = new QuanlyEntities();
        public User GetUser(string name , string pass)
        {
            //throw new NotImplementedException();
            return db.Users.Where(x => x.Username.Equals(name) && x.Password.Equals(pass)).FirstOrDefault();
        }
    }
}