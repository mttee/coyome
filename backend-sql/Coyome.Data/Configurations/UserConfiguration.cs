using Coyome.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Coyome.Data.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("Users");
            builder.Property(x => x.FirstName).IsRequired().HasMaxLength(100);
            builder.Property(x => x.LastName).IsRequired().HasMaxLength(100);
            builder.Property(x => x.MiddleName).IsRequired().HasMaxLength(100);
            builder.Property(x => x.Gender).IsRequired();
            builder.Property(x => x.UserStatus).IsRequired().HasDefaultValue(UserStatus.Active);
            builder.Property(x => x.AccountType).IsRequired();
            builder.Property(x => x.Email).IsRequired().HasMaxLength(250);
        }
    }
}
