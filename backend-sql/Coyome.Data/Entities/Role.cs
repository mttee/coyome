using Coyome.Core.Helpers;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Coyome.Data.Entities
{
    public class Role : IdentityRole<string>
    {
        public Role()
        {
            Id = CommonHelper.NewGuid();
        }

        public string Description { get; set; }
        public bool InActive { get; set; }
        public bool IsDefault { get; set; }
        public DateTime CreatedTime { get; set; }
        public DateTime UpdatedTime { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
