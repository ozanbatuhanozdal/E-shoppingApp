using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos.CategoryDtos
{
    public class CategoryAddDto
    {
        [Required]
        public string CategoryName { get; set; }
        
        public int OrderCategory { get; set; }
    }
}
