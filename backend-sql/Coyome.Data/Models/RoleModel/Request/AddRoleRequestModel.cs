using System;
using System.Collections.Generic;
using System.Text;

namespace Coyome.Data.Models
{
    public class AddRoleRequestModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public bool InActive { get; set; }
    }
}
