using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos
{
    public class DtoBase
    {

        public DateTime CreateDate { get; set; }

        public int createdByUserId { get; set; }

        public DtoBase()
        {
            CreateDate = DateTime.Now;
            createdByUserId = 1;

        }
    }
}
