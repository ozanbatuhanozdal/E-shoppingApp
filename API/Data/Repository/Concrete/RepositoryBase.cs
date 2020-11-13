using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace API.Data.Repository.Concrete
{
    public class RepositoryBase<TEntity> : IRepositoryBase<TEntity> where TEntity : class, new()
    {

       

        public async  Task<bool> AddAsync(TEntity entity)
        {
            using var _context = new DataContext();
            await _context.AddAsync(entity);
            await _context.SaveChangesAsync();
            return true;
        }

        // Tüm Oluşan classları listeleme
        public  async Task<List<TEntity>> GetAllASync()
        {
            using var _context = new DataContext();
            return await _context.Set<TEntity>().ToListAsync();
        }



        public async Task<List<TEntity>> GetAllASync(Expression<Func<TEntity, bool>> filter)
        {
            using var _context = new DataContext();
            return await _context.Set<TEntity>().Where(filter).ToListAsync();
        }

        
        public async Task<List<TEntity>> GetAllASync<TKey>(Expression<Func<TEntity, bool>> filter, Expression<Func<TEntity, TKey>> keySelector)
        {
            using var _context = new DataContext();
            return await _context.Set<TEntity>().Where(filter).ToListAsync();
        }

        public async Task<List<TEntity>> GetAllASync<TKey>(Expression<Func<TEntity, TKey>> keySelector)
        {
            using var _context = new DataContext();
            return await _context.Set<TEntity>().OrderByDescending(keySelector).ToListAsync();
        }

        public TEntity Find(Expression<Func<TEntity, bool>> where)
        {
            using var _context = new DataContext();
            return _context.Set<TEntity>().FirstOrDefault(where);
        }

        public async Task<TEntity> FindByIdAsync(int id)
        {
            using var _context = new DataContext();
            return await _context.FindAsync<TEntity>(id);
        }

        public async Task<TEntity> GetAsync(Expression<Func<TEntity, bool>> filter)
        {
            using var _context = new DataContext();
            return await _context.Set<TEntity>().FirstOrDefaultAsync(filter);
        }

        public async Task RemoveAsync(TEntity entity)
        {
         
            using var _context = new DataContext();
            _context.Remove(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(TEntity entity)
        {            
            using var _context = new DataContext();
            _context.Update(entity);
            await _context.SaveChangesAsync();
        }
    }
}
