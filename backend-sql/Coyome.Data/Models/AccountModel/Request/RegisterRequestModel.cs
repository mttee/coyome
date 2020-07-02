using Coyome.Data.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Coyome.Data.Models
{
    public class RegisterRequestModel
    {
        public string FirstName { get; set; }
        public string MiddletName { get; set; }
        public string LastName { get; set; }
        public Gender Gender { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public string Email { get; set; }
        public DateTime Birthdate { get; set; }
    }
}
