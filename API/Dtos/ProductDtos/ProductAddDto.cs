using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos.ProductDtos
{
    public class ProductAddDto : DtoBase
    {
        [Required]
        public string ProductName { get; set; }
        [Required]
        public double ProductPrice { get; set; }

        public string ProductImageUrl { get; set; }

        public string ProductExplanation { get; set; }

        public int CategoryId { get; set; }
        
        public virtual CategoryDto CategoryDto { get; set; }
    }
}
