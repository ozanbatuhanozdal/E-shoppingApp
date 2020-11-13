using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
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
        private readonly ICategoryRepository _categoryRepository;  
        private readonly IMapper _mapper;

        public ProductController(IProductRepository productRepository,ICategoryRepository categoryRepository, IMapper mapper)
        {
            _ProductRepository = productRepository;
            _mapper = mapper;

            _categoryRepository = categoryRepository;

        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetAll()
        {
            var products = await _ProductRepository.GetAllASync();
            var categorys = await  _categoryRepository.GetAllASync();

            foreach(Product product in products)
            {
                foreach(Category category in categorys)
                {
                    if(product.CategoryId == category.CategoryId)
                    {
                        product.category = category;
                    }
                }
            }


            return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAll(int id)
        {
            Product product = await _ProductRepository.FindByIdAsync(id);

            return Ok(product);
        }


        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> GetProductsByCategoryId(int id)
        {
            
            List<Product> Products = await _ProductRepository.GetAllASync(x=> x.CategoryId == id);
            if (Products.Count == 0)
            {
                return BadRequest("İd' parameter cant found");
            }
            else
            {
                return Ok(Products);
            }

        }


        [HttpPost]
        public async Task<IActionResult> AddProduct(ProductAddDto productAddDto)
        {

            Product addProduct = _mapper.Map<Product>(productAddDto);
            string webRootPath = "assets/img/" + addProduct.ProductImageUrl;
            addProduct.ProductImageUrl = webRootPath;
            if (await _ProductRepository.AddAsync(addProduct))
            {
                return Ok(addProduct);
            }
            else
            {
                return BadRequest("Product Can't Added");

            }
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategory(int id)
        {
            var result = _ProductRepository.Find(f => f.ProductId == id);

            if (result == null)
            {
                return BadRequest();
            }
            await _ProductRepository.RemoveAsync(result);

            return Ok(result);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateCategory(ProductUpdateDto productUpdateDto)
        {
            Product updatedCategory = await _ProductRepository.FindByIdAsync(productUpdateDto.ProductId);

            if(updatedCategory == null)
            {
                return BadRequest("Can't Updated");
            }
            else
            {
           
            updatedCategory = _mapper.Map<Product>(productUpdateDto);

            await _ProductRepository.UpdateAsync(updatedCategory);

            return Ok(updatedCategory);

            }
        }

        [HttpPost("[action]"), DisableRequestSizeLimit]
        public ActionResult UploadFile()
        {
            try
            {
                var file = Request.Form.Files[0];
                string folderName = "img";
                string webRootPath = "D:/E-shoppingApp/YZM-4215---GRUP17/client/src/assets/";
                string newPath = Path.Combine(webRootPath, folderName);
                if (!Directory.Exists(newPath))
                {
                    Directory.CreateDirectory(newPath);
                }
                if (file.Length > 0)
                {
                    string fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    string fullPath = Path.Combine(newPath, fileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                }
                return Ok("Upload Successful.");
            }
            catch (System.Exception ex)
            {
                return BadRequest("Upload Failed: " + ex.Message);
            }
        }


    }
}
