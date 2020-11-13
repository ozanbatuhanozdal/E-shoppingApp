using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public int OrderCategory { get; set; }
        public virtual List<Product> Products { get; set; }
        
    }
}
