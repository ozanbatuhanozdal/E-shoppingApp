using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    [Table("Users")]
    public class User : EntityBase
    {
        public User()        
        {
            this.IsAdmin = 0;
        }

        [Key]
        public int UserId {get;set;}
        [StringLength(50)]
        public string Username{get;set;}
        [StringLength(50)]
        public string Firstname{get;set;}
        [StringLength(50)]
        public string Surname{get;set;}
        [Required,StringLength(50),EmailAddress]
        public string Email{get;set;}
        [Required]
        public byte[] PasswordHash {get;set;}

        public byte[] PasswordSalt { get; set; }

        [Required]
        public string Address {get;set;}

        public int IsAdmin{get;set;}
    }
}
