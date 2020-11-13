using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
     
        // Tanımlanan entityler database için burada set edilicek
        public DbSet<User> User { get; set; } 
        public DbSet<Product> Product { get; set; }
        public DbSet<Category> Category { get; set; }
        public DbSet<Order> Order { get; set; }


        // Database ilişkileri buraya yazılıcak kaynak için entityframeworktutorial.net
        protected override void OnModelCreating(ModelBuilder builder)
        {

            /*  builder.Entity<User>().HasData(new User{
                  Id = 1,                
                  Username =  "Abraham Lincoln",
                  PasswordHash = [1234231],
                  PasswordSalt = [1234531],
                  Firstname = "Abraham",
                  Surname= "Lincoln",
                  Email = "Abrahamlincoln123@gmail.com",
                  Address = "Amerika",
                  IsAdmin=1
              }); */

            builder.Entity<User>()
                .HasKey(k => k.UserId);

            builder.Entity<Product>()
                  .HasOne(x => x.category)
                  .WithMany(x => x.Products)
                  .HasForeignKey(x => x.CategoryId);
        }


        // Database Connection Stringi
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // batuhan sql connection string
            optionsBuilder.UseSqlServer("Server=localhost\\SQLEXPRESS;Database=EshoppingApp;Trusted_Connection=True;");


        }

    }
}