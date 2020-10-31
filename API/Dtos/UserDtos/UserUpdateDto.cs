namespace API.Dtos.UserDtos
{
    public class UserUpdateDto
    {
        public int UserId {get;set;}
        public string Username{get;set;}        
        public string Firstname{get;set;}        
        public string Surname{get;set;}        
        public string Email{get;set;}        
        public string Password {get;set;}        
        public string Address {get;set;}
        public int IsAdmin{get;set;}
    }
}