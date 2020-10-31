using System.ComponentModel.DataAnnotations;

namespace API.Dtos.UserDtos
{
    public class UserAddDto : DtoBase
    {
        public string Username{get;set;}        
        public string Firstname{get;set;}        
        public string Surname{get;set;} 
        [Required,EmailAddress]
        public string Email{get;set;}        
        [Required]
        public string Password {get;set;}        
        public string Address {get;set;}
        public int IsAdmin{get;set;}
    }
}