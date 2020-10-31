using API.Dtos.CategoryDtos;
using API.Dtos.ProductDtos;
using API.Dtos.UserDtos;
using API.Models;
using AutoMapper;

namespace API.Mapping.AutoMapperProfile
{
    public class MapProfile : Profile
    {
        public MapProfile()
        {
            CreateMap<UserAddDto, User>();
            CreateMap<User,UserAddDto>();

            CreateMap<UserUpdateDto, User>();
            CreateMap<User,UserUpdateDto>();

            CreateMap<CategoryAddDto, Category>();
            CreateMap<Category, CategoryAddDto>();

            CreateMap<ProductAddDto, Product>();
            CreateMap<Product, ProductAddDto>();
        }
    }
}