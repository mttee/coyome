using Coyome.Data.Models.ConfigSettingModel;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Coyome.Data.Database
{
    public class CoyomeDBContextFactory : IDesignTimeDbContextFactory<CoyomeDBContext>
    {
        public CoyomeDBContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile("appsettings.json").Build();

            var connectionString = configuration.GetConnectionString("Database");
            var optionsBuilder = new DbContextOptionsBuilder<CoyomeDBContext>();
            optionsBuilder.UseSqlServer(connectionString);

            return new CoyomeDBContext(optionsBuilder.Options);
        }
    }
}
