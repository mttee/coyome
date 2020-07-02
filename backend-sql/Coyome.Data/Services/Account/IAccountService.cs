using Coyome.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Coyome.Data.Services.Account
{
    public interface IAccountService
    {
        Task<string> Login(LoginRequestModel model);
        Task<string> Register(RegisterRequestModel model);
        Task<string> ForgotPassword(ForgotPasswordRequestModel model);
    }
}
