using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos.OrderDtos
{
    public class OrderDto
    {
        public int OrderID { get; set; }
        public string OrderDate { get; set; }
        public string CustomerName { get; set; }
        public string CustomerEmail { get; set; }
        public string CustomerAdress { get; set; }
        public float TotalPrice { get; set; }
    }
}
