using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos.OrderDtos
{
    public class OrderAddDto
    {
        public string OrderDate { get; set; }
        public string CustomerName { get; set; }
        public string CustomerEmail { get; set; }
        public string CustomerAdress { get; set; }
        public int TotalPrice { get; set; }
        public int UserId { get; set; }
    }
}
