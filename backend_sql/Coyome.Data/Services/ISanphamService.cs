using Coyome.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Coyome.Data.Services
{
    public interface ISanphamService
    {
        Task<List<TestModel>> GetData();
    }
}
