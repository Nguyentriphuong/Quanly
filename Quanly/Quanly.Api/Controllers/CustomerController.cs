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
   // [Authorize]
    public class CustomerController : ApiController
    {
        private CustomerService customerService = new CustomerService();
        [HttpGet]
        [ActionName("GetCustomer")]
        public IEnumerable<Customer> GetShowCus()
        {
            return customerService.GetCustomers();
        }
        [HttpPost]
        //[Route("Add")]
        public IHttpActionResult Add(Customer customer)
        {
            var isSave = customerService.SaveCustomer(customer);
            if (isSave == true) return Ok();
            else return BadRequest();
        }
        [HttpPut]
        //[Route("Update")]
        public IHttpActionResult Update(Customer customer)
        {
            var isUpdate = customerService.UpdateCustomer(customer, customer.Id);
            if (isUpdate == true) return Ok();
            else return BadRequest();
        }
        [HttpDelete]
        //[Route("Remove")]
        public IHttpActionResult Remove(int id)
        {
            var isDelete = customerService.DeleteCustomer(id);
            if (isDelete == true) return Ok();
            return BadRequest();
        }
    }
}
