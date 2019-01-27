using Quanly.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quanly.Service.Service
{
    interface IOrderService
    {
        List<Order> GetOrders();
        //bool GetCustomer(Customer customer);
        bool SaveOrder(Order order);
        bool UpdateOrder(Order order, int id);
        bool DeleteOrder(int id);
    }
}
