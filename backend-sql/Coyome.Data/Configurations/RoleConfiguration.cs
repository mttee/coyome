using Coyome.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Coyome.Data.Configurations
{
    public class RoleConfiguration : IEntityTypeConfiguration<Role>
    {
        public void Configure(EntityTypeBuilder<Role> builder)
        {
            builder.ToTable("Roles");
            builder.Property(x => x.Name).IsRequired().HasMaxLength(200);
            builder.Property(x => x.InActive).IsRequired().HasDefaultValue(true);
            builder.Property(x => x.Description).HasMaxLength(500);
        }
    }
}
