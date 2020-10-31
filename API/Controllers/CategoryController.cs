using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data.Repository.Interfaces;
using API.Dtos.CategoryDtos;
using API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class CategoryController : BaseApiController
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IMapper _mapper;

        public CategoryController(IMapper mapper, ICategoryRepository categoryRepository)
        {
            _mapper = mapper;
            _categoryRepository = categoryRepository;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetAll()
        {
            var categories = await _categoryRepository.GetAllASync();

            return Ok(categories);
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
    }
}
