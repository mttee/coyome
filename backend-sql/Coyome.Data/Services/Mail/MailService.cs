using Coyome.Data.Models.ConfigSettingModel;
using MailKit.Net.Smtp;
using Microsoft.Extensions.Options;
using MimeKit;
using System.Threading.Tasks;

namespace Coyome.Data.Services.Mail
{
    public class MailService : IMailService
    {
        private readonly MailSettingModel _mailSetting;
        public MailService(IOptions<MailSettingModel> mailSetting)
        {
            _mailSetting = mailSetting.Value;
        }

        public Task SendMail(string username, string email, string subject)
        {

            MimeMessage message = new MimeMessage();

            MailboxAddress from = new MailboxAddress("Coyome Team", _mailSetting.From);
            message.From.Add(from);

            MailboxAddress to = new MailboxAddress(username,email);
            message.To.Add(to);

            message.Subject = subject;

            BodyBuilder bodyBuilder = new BodyBuilder();
            bodyBuilder.HtmlBody = "<h1>Hello User!</h1>";
            bodyBuilder.TextBody = "Coyome Team!";

            message.Body = bodyBuilder.ToMessageBody();

            SmtpClient client = new SmtpClient();
            client.ServerCertificateValidationCallback = (s, c, h, e) => true;

            client.Connect(_mailSetting.SmtpServer, _mailSetting.Port, _mailSetting.EnableSSL);

            //client.AuthenticationMechanisms.Remove("XOAUTH2");
            client.Authenticate(_mailSetting.From, _mailSetting.Password);

            client.Send(message);
            client.Disconnect(true);
            client.Dispose();

            return null;

        }

    }
}
