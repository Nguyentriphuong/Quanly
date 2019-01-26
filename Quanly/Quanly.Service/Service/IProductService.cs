using Quanly.Data;
using Quanly.Service.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quanly.Service.Service
{
    interface IProductService
    {
        List<Product_Order> GetProducts();
        Product GetProduct(int id);
        bool SaveProduct(Product product);
        bool UpdateProduct(Product product, int id);
        bool DeleteProduct(int Id);
    }
}
