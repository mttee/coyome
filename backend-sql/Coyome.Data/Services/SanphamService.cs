using AutoMapper;
using Coyome.Data.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Coyome.Data.Services
{
    public class SanphamService : ISanphamService
    {
        private IMongoCollection<TestModel> _sanpham;
        protected readonly IMapper mapper;
        public SanphamService(IDatabaseSettings settings, IMapper mapper)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _sanpham = database.GetCollection<TestModel>(settings.CollectionName);
            this.mapper = mapper;
        }
        public async Task<List<TestModel>> GetData()
        {
            var result = await _sanpham.Find(FilterDefinition<TestModel>.Empty).ToListAsync();
            return mapper.Map<List<TestModel>>(result);
        }
    }
}
