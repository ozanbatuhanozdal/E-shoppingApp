using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace API.Models
{
    public class Order
    {
        public int OrderID { get; set; }
        public int UserId { get; set; }
        public string OrderDate { get; set; }
        public string CustomerName { get; set; }
        public string CustomerEmail { get; set; }
        public string CustomerAdress { get; set; }
        public float TotalPrice { get; set; }
    }
}
