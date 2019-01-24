using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Quanly.Data;
using Quanly.Service.DTO;

namespace Quanly.Service.Service
{
    public class ProductService : IProductService
    {
        private QuanlyEntities db = new QuanlyEntities();
        

        public bool DeleteProduct(int Id)
        {
            //throw new NotImplementedException();
            try
            {
                var product = db.Products.Where(x => x.Id == Id).FirstOrDefault();
                if (product == null) return false;
                db.Entry(product).State = System.Data.Entity.EntityState.Deleted;
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public Product GetProduct(int id)
        {
            //throw new NotImplementedException();
            return db.Products.Where(x => x.Id == id).FirstOrDefault();
        }

        public List<Product_Order> GetProducts()
        {
            //throw new NotImplementedException();
            var result = from p in db.Products.DefaultIfEmpty()
                         join o in db.Orders on p.Id equals o.ProductID
                         into productInfo
                         from orders in productInfo.DefaultIfEmpty()
                         select new Product_Order
                         {
                             Id = p.Id,
                             Name = p.Name,
                             Price = p.Price,
                             Quantity = p.Quantity,
                             QuantityOrder = orders == null? 0 : orders.QuantityOrder
                         };
            return result.ToList();
        }

        public bool SaveProduct(Product product)
        {
            //throw new NotImplementedException();
            try
            {
                db.Products.Add(product);
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool UpdateProduct(Product product, int id)
        {
            //throw new NotImplementedException();
            try
            {
                db.Entry(product).State = System.Data.Entity.EntityState.Modified;
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