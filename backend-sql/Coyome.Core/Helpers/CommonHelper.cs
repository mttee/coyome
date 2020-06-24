using System;
using System.Collections.Generic;
using System.Text;

namespace Coyome.Core.Helpers
{
    public static class CommonHelper
    {
        public static string NewGuid()
        {
            var guid = Guid.NewGuid().ToString();
            return guid;
        }
    }
}
