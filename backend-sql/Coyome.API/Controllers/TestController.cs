using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Coyome.Data.Models;
using Coyome.Data.Services;
using Microsoft.AspNetCore.Mvc;

namespace Coyome.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        private readonly ISanphamService sanphamService;
        
        public TestController(ISanphamService sanphamService)
        {
            this.sanphamService = sanphamService;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var data = await this.sanphamService.GetData();
            return Ok(data);
        }
    }
}