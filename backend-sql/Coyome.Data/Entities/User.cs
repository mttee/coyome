using Coyome.Core.Helpers;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Coyome.Data.Entities
{
    public class User : IdentityUser<string>
    {
        public User()
        {
            Id = CommonHelper.NewGuid();
        }

        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public DateTime Birthdate { get; set; }
        public Gender Gender { get; set; }
        public UserStatus UserStatus { get; set; }
        public AccountType AccountType { get; set; }
        public DateTime CreatedTime { get; set; }
        public DateTime UpdatedTime { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }

    }

    public enum UserStatus
    {
        Active,
        InActive,
        Delete
    }

    public enum AccountType
    {
        Admin,
        Officer,
        User
    }

    public enum Gender
    {
        Male,
        Female,
        Other
    }
}
