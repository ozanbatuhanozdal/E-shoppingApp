using API.Dtos.ProductDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos
{
    public class CategoryDto
    {
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public int OrderCategory { get; set; }

        public List<ProductDto> ProductDtos { get; set; }
    }
}
