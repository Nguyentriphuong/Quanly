using Quanly.Data;
using Quanly.Service.DTO;
using Quanly.Service.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Quanly.Api.Controllers
{
    [Authorize]
    public class ProductController : ApiController
    {
        private ProductService productService = new ProductService();
        [ActionName("GetProduct")]
        public IEnumerable<Product_Order> GetProducts()
        {
            return productService.GetProducts();
        }
        //[ActionName("GetProduct")]
        //public IHttpActionResult GetProduct(int id)
        //{
        //    var ps =  productService.GetProduct(id);
        //    if (ps == null) return NotFound();
        //    return Ok(ps);
        //}
        [HttpPost]
        //[Route("Add")]

        public IHttpActionResult Add(Product product)
        {
            var isSave = productService.SaveProduct(product);
            if (isSave == true) return Ok();
            return BadRequest();
        }
        [HttpPut]
        //[Route("Update")]
        public IHttpActionResult Update(Product product)
        {
            var isUpdate = productService.UpdateProduct(product, product.Id);
            if (isUpdate == true) return Ok();
            return BadRequest();
        }
        [HttpDelete]
        //[Route("Remove/{id}")]
        public IHttpActionResult Remove(int id)
        {
            var isDelete = productService.DeleteProduct(id);
            if (isDelete == true) return Ok();
            return BadRequest();
        }
    }
}
