using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos.UserDtos
{
    public class UserDto
    {
        public int UserId { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }
        public string Firstname { get; set; }
        public string Adress { get; set; }
        public int IsAdmin { get; set; }
    }
}
