using System;

namespace API.Models
{
    public class EntityBase
    {
        public DateTime CreateDate{get;set;}

        public int createdByUserId {get;set;}

        public EntityBase()
        {
            CreateDate = DateTime.Now;
            createdByUserId = 1;
            
        }
        
    }
}