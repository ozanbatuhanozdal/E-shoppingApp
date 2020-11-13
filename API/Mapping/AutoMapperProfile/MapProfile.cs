using API.Dtos.CategoryDtos;
using API.Dtos.OrderDtos;
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

            CreateMap<OrderAddDto, Order>();
            CreateMap<Order, OrderAddDto>();

            CreateMap<ProductAddDto, Product>();
            CreateMap<Product, ProductAddDto>();

            CreateMap<CategoryDeleteDto, Category>();
            CreateMap<Category, CategoryDeleteDto>();

            CreateMap<CategoryUpdateDto, Category>();
            CreateMap<Category, CategoryUpdateDto>();

            CreateMap<ProductDeleteDto, Product>();
            CreateMap<Product, ProductDeleteDto>();

            CreateMap<ProductUpdateDto, Product>();
            CreateMap<Product, ProductUpdateDto>();
        }
    }
}