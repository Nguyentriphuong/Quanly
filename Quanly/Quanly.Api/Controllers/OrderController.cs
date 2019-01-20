using Quanly.Data;
using Quanly.Service.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Quanly.Api.Controllers
{
    public class OrderController : ApiController
    {
        private OrderService orderService = new OrderService();
        [ActionName("GetOrder")]
        public IEnumerable<Order> GetProducts()
        {
            return orderService.GetOrders();
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

        public IHttpActionResult Add(Order order)
        {
            var isSave = orderService.SaveOrder(order);
            if (isSave == true) return Ok();
            return BadRequest();
        }
        [HttpPut]
        //[Route("Update")]
        public IHttpActionResult Update(Order order)
        {
            var isUpdate = orderService.UpdateOrder(order, order.Id);
            if (isUpdate == true) return Ok();
            return BadRequest();
        }
        [HttpDelete]
        //[Route("Remove/{id}")]
        public IHttpActionResult Remove(int id)
        {
            var isDelete = orderService.DeleteOrder(id);
            if (isDelete == true) return Ok();
            return BadRequest();
        }
    }
}
