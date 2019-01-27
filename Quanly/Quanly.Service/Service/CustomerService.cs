using Quanly.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Quanly.Service.Service
{
    public class CustomerService : ICustomerService
    {
        private QuanlyEntities db = new QuanlyEntities();

        public bool DeleteCustomer(int id)
        {
            try
            {
                var customer = db.Customers.Where(x => x.Id == id).FirstOrDefault();
                if (customer == null) return false;
                db.Entry(customer).State = System.Data.Entity.EntityState.Deleted;
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }

        }

      

        public List<Customer> GetCustomers()
        {
            //throw new NotImplementedException();
            return db.Customers.ToList();
        }


        public bool SaveCustomer(Customer customer)
        {
            //throw new NotImplementedException();
            try
            {
                db.Customers.Add(customer);
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        
        

        public bool UpdateCustomer(Customer customer, int id)
        {
            //throw new NotImplementedException();
            try
            {
                db.Entry(customer).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

       
        
    }
}