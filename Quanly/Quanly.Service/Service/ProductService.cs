using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Quanly.Data;

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

        public List<Product> GetProducts()
        {
            //throw new NotImplementedException();
            return db.Products.ToList();
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