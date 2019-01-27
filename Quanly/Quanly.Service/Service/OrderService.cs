using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Quanly.Data;

namespace Quanly.Service.Service
{
    public class OrderService : IOrderService
    {
        private QuanlyEntities db = new QuanlyEntities();
        public bool DeleteOrder(int id)
        {
            try
            {
                var order = db.Orders.Where(x => x.Id == id).FirstOrDefault();
                if (order == null) return false;
                db.Entry(order).State = System.Data.Entity.EntityState.Deleted;
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public List<Order> GetOrders()
        {
            return db.Orders.ToList();
        }

        public bool SaveOrder(Order order)
        {
            try
            {
                db.Orders.Add(order);
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool UpdateOrder(Order order, int id)
        {
            try
            {
                db.Entry(order).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public static implicit operator OrderService(ProductService v)
        {
            throw new NotImplementedException();
        }
    }
}