using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data.Repository.Interfaces;
using API.Dtos;
using API.Dtos.CategoryDtos;
using API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : BaseApiController
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IMapper _mapper;

        public CategoryController(ICategoryRepository categoryRepository, IMapper mapper)
        {
            _categoryRepository = categoryRepository;
            _mapper = mapper;

        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetAll()
        {
            var products = await _categoryRepository.GetAllASync();

            return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAll(int id)
        {
            Category category = await _categoryRepository.FindByIdAsync(id);

            return Ok(category);
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> AddCategory(CategoryAddDto categoryAddDto)
        {
            Category addCategory = _mapper.Map<Category>(categoryAddDto);
            if (await _categoryRepository.AddAsync(addCategory))
            {
                return Ok(addCategory);
            }
            else
            {
                return BadRequest("Category Can't Added");
            }
        }

        // 30.10.2020 Writing Category Update and Delete Actions
       [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategory(int id)
        {    
            var result = _categoryRepository.Find(f => f.CategoryId == id);

            if (result == null)
            {
                return BadRequest();
            }
            await _categoryRepository.RemoveAsync(result);
            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> UpdateCategory(CategoryUpdateDto categoryUpdateDto)
        {
            Category updatedCategory = await _categoryRepository.FindByIdAsync(categoryUpdateDto.CategoryId);

            updatedCategory = _mapper.Map<Category>(categoryUpdateDto);

            await _categoryRepository.UpdateAsync(updatedCategory);

            return BadRequest(updatedCategory);
        }
    }
}
