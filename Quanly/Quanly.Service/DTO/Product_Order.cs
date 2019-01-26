using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Quanly.Service.DTO
{
    public class Product_Order
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public int Quantity { get; set; }
        public int QuantityOrder { get; set; }
    }
    
}