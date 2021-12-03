using Coyome.Core.Constants;
using Coyome.Data.Entities;
using Coyome.Data.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Coyome.Data.Services.Roles
{
    public class RoleService : IRoleService
    {
        private readonly RoleManager<Role> _roleManager;
        public RoleService(RoleManager<Role> roleManager)
        {
            _roleManager = roleManager;
        }

        public async Task<bool> AddRole(AddRoleRequestModel model)
        {
            var roleExist = await _roleManager.RoleExistsAsync(model.Name);
            if(roleExist)
                throw new System.ArgumentException(ErrorStringConstant.ROLE_EXIST);

            var role = new Role();
            role.Name = model.Name;
            role.Description = model.Description;
            role.InActive = model.InActive;
            await _roleManager.CreateAsync(role);
            return true;
        }
    }
}
