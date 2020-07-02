using Coyome.Data.Entities;
using Coyome.Data.Models;
using Coyome.Data.Services.Mail;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Coyome.Data.Services.Account
{
    public class AccountService : IAccountService
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly RoleManager<Role> _roleManager;
        private readonly IConfiguration _config;
        private readonly IMailService _mailService;

        public AccountService(UserManager<User> userManager, SignInManager<User> signInManager
            , RoleManager<Role> roleManager, IConfiguration config, IMailService mailService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _config = config;
            _mailService = mailService;
        }

        public async Task<string> ForgotPassword(ForgotPasswordRequestModel model)
        {
            //var user = await _userManager.FindByEmailAsync(model.Email);
            //if (user == null)
            //    return null;

            //var removePassword = await _userManager.RemovePasswordAsync(user);
            //var newPassword = await _userManager.AddPasswordAsync(user, "newPassword");

            await _mailService.SendMail("Minh Tri", "minhtri2497@gmail.com", "Test");

            return string.Empty;
        }

        public async Task<string> Login(LoginRequestModel model)
        {
            var user = await _userManager.FindByNameAsync(model.UserName);
            if (user == null)
                return null;

            var result = await _signInManager.PasswordSignInAsync(user, model.Password, model.RememberMe, true);
            if (!result.Succeeded)
                return null;

            var roles = await _userManager.GetRolesAsync(user);

            var claims = new[]
            {
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(ClaimTypes.Role, string.Join(";", roles))
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Tokens:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_config["Tokens:Issuer"],
                _config["Tokens:Issuer"],
                claims,
                expires: DateTime.Now.AddMonths(1),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public async Task<string> Register(RegisterRequestModel model)
        {
            var user = await _userManager.FindByNameAsync(model.UserName);
            if (user != null)
                return null;

            return string.Empty;
        }
    }
}
