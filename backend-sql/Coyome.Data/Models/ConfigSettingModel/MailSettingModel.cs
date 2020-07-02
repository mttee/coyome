using System;
using System.Collections.Generic;
using System.Text;

namespace Coyome.Data.Models.ConfigSettingModel
{
    public class MailSettingModel
    {
        public string From { get; set; }
        public string Password { get; set; }
        public string SmtpServer { get; set; }
        public int Port { get; set; }
        public bool EnableSSL { get; set; }
    }
}
