using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Product
    {

        public int ProductId { get; set; }

        public string ProductName { get; set; }
        
        public double ProductPrice { get; set; }

        public string ProductImageUrl { get; set; }

        public string ProductExplanation { get; set; }

        public int CategoryId { get; set; }
        
        public virtual Category category { get; set; }
    }
}
