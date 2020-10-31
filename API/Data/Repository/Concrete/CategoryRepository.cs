using API.Data.Repository.Interfaces;
using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data.Repository.Concrete
{
    public class CategoryRepository : RepositoryBase<Category> ,ICategoryRepository
    {
    }
}
