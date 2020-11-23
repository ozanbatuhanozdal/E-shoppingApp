using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using API.Data.Repository.Interfaces;
using API.Dtos.UserDtos;
using API.Models;
using API.Services.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : BaseApiController
    {
        private readonly IUserRepository _userRepository;
        private readonly ITokenService _tokenService;
        private readonly IMapper _mapper;
        public UserController(IUserRepository userRepository, IMapper mapper,ITokenService tokenService)
        {
            _userRepository = userRepository;
            _mapper = mapper;
            _tokenService = tokenService;

        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetAll()
        {
            var users = await _userRepository.GetAllASync();

            return Ok(users);
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> RegisterUser(UserAddDto userAddDto)
        {
            if(UserExist(userAddDto.Email))
            { 
            using var hmac = new HMACSHA512();
            var addUser = _mapper.Map<User>(userAddDto);

            addUser.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(userAddDto.Password));
            addUser.PasswordSalt = hmac.Key;
            if(await _userRepository.AddAsync(addUser))
            {
            UserDto userDto = new UserDto();
            userDto.Email = addUser.Email;
            userDto.Firstname = addUser.Firstname;
            userDto.UserId = addUser.UserId;
            userDto.IsAdmin = addUser.IsAdmin;
            userDto.Adress = addUser.Address;
            userDto.Token = _tokenService.CreateToken(addUser);

            return Ok(addUser);
            }
            else
            {
                    return BadRequest("User Can't Registered");
            }

            }
            else
            {
                return BadRequest("Email is taken");
            }
        }

        [HttpPost("[action]")]
        public IActionResult LoginUser(UserLoginDto userLoginDto)
        {
            var user = _userRepository.Find(x => x.Email == userLoginDto.Email);
            if (user == null)
            {
                return Unauthorized("Wrong Email/Password");
            }
            using var hmac = new HMACSHA512(user.PasswordSalt);

            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(userLoginDto.Password));
            for (int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != user.PasswordHash[i])
                    return Unauthorized("Wrong Email/Password");
            }

            UserDto userDto = new UserDto();

            userDto.Email = user.Email;
            userDto.Token = _tokenService.CreateToken(user);
            userDto.Firstname = user.Firstname;
            userDto.UserId = user.UserId;
            userDto.IsAdmin = user.IsAdmin;
            userDto.Adress = user.Address;

            return Ok(userDto);

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(UserUpdateDto userUpdateDto)
        {
            var updateUser =  _userRepository.Find(x=> x.UserId == userUpdateDto.UserId);

            if(updateUser == null)
            {
            return BadRequest("User Cant updated");
            }
            else
            {

            
            updateUser = _mapper.Map<User>(userUpdateDto);
                
            await _userRepository.UpdateAsync(updateUser);

            return Ok(updateUser);
            }

        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {

            var User = _userRepository.Find(x => x.UserId == id);
            if(User == null)
            {
                BadRequest("This Id cannot match with the user");
            }
            
            return Ok(User);
            
        }


        private bool UserExist(string email)
        {
            User user = _userRepository.Find(x => x.Email.ToLower() == email.ToLower());
            if (user == null)
            {
                return true;
            }
            else
            {
                return false;
            }


        }


        





    }
}