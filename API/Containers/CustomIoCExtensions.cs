using API.Data.Repository;
using API.Data.Repository.Concrete;
using API.Data.Repository.Interfaces;
using API.Services.Concrete;
using API.Services.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace API.Containers
{
    public static class CustomIoCExtensions
    {

        public static void AddDependencies(this IServiceCollection services)
        {

            services.AddScoped(typeof(IRepositoryBase<>),typeof(RepositoryBase<>));
            services.AddScoped<IUserRepository,UserRepository>();

            services.AddScoped<ICategoryRepository, CategoryRepository>();
            services.AddScoped<IOrderRepository, OrderRepository>();
            services.AddScoped<IProductRepository, ProductRepository>();
            
            services.AddScoped<ITokenService, TokenService>();
        }
        
    }
}