using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Coyome.Core.Constants;
using Coyome.Data.Models;
using Coyome.Data.Services.Account;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Coyome.API.Areas.Admin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Area(Constant.Admin_Area_Route_Name)]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        /// <summary>
        /// Login
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestModel model)
        {
            var result = await _accountService.Login(model);
            return Ok(result);
        }

        /// <summary>
        /// Forgot Password
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost("forgot-password")]
        public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordRequestModel model)
        {
            var result = await _accountService.ForgotPassword(model);
            return Ok(result);
        }
    }
}
