using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data.Repository.Interfaces;
using API.Dtos.ProductDtos;
using API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : BaseApiController
    {

        private readonly IProductRepository _ProductRepository;
        private readonly IMapper _mapper;

        public ProductController(IProductRepository productRepository,IMapper mapper)
        {
            _ProductRepository = productRepository;
            _mapper = mapper;

        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetAll()
        {
            var products = await _ProductRepository.GetAllASync();

            return Ok(products);
        }

        [HttpPost("[action]")]
        public async  Task<IActionResult> AddProduct(ProductAddDto productAddDto)
        {

            Product addProduct = _mapper.Map<Product>(productAddDto);
            if(await _ProductRepository.AddAsync(addProduct))
            {
                return Ok(addProduct);
            }
            else
            {
                return BadRequest("Product Can't Added");

            }            
        }
    }
}
