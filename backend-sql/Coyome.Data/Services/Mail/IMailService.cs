using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Coyome.Data.Services.Mail
{
    public interface IMailService
    {
        Task SendMail(string username, string email, string subject);
    }
}
