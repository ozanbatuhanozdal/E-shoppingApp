using API.Data.Repository.Interfaces;
using API.Dtos.OrderDtos;
using API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : BaseApiController
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IMapper _mapper;

        public OrderController(IOrderRepository orderRepository, IMapper mapper)
        {
            _orderRepository = orderRepository;
            _mapper = mapper;

        }


        [HttpGet("[action]")]
        public async Task<IActionResult> GetAll()
        {
            var orders = await _orderRepository.GetAllASync();

            return Ok(orders);
        }

        [HttpPost]
        public async Task<IActionResult> PlaceOrder(OrderAddDto orderAddDto)
        {
            Order placeOrder = _mapper.Map<Order>(orderAddDto);
            if (await _orderRepository.AddAsync(placeOrder))
            {
                return Ok(placeOrder);
            }
            else
            {
                return BadRequest("Purchase Failed");
            }
        }

        [HttpGet("{id}")]
        public async  Task<IActionResult> GetAll(int id)
        {
            var order =  await _orderRepository.GetAllASync(x=> x.UserId == id);

            return Ok(order);
        }
    }
}
