using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Coyome.Core.Constants;
using Coyome.Data.Models;
using Coyome.Data.Services.Roles;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Coyome.API.Areas.Admin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Area(Constant.Admin_Area_Route_Name)]
    public class RoleController : ControllerBase
    {
        private readonly IRoleService _roleService;
        /// <summary>
        /// Contructor RoleController
        /// </summary>
        public RoleController(IRoleService roleService)
        {
            _roleService = roleService;
        }

        /// <summary>
        /// Add New Role
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> AddRole([FromBody] AddRoleRequestModel model)
        {
            var result = await _roleService.AddRole(model);
            return Ok(result);
        }

    }
}
