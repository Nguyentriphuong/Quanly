using Quanly.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quanly.Service.Service
{
    interface ICustomerService
    {
        List<Customer> GetCustomers();
        //bool GetCustomer(Customer customer);
        bool SaveCustomer(Customer customer);
        bool UpdateCustomer(Customer customer, int id);
        bool DeleteCustomer(int id);
    }
}
