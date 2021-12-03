using Coyome.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Coyome.Data.Services.Roles
{
    public interface IRoleService
    {
        Task<bool> AddRole(AddRoleRequestModel model);
    }
}
