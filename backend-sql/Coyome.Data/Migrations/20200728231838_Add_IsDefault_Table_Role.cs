using Microsoft.EntityFrameworkCore.Migrations;

namespace Coyome.Data.Migrations
{
    public partial class Add_IsDefault_Table_Role : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsDefault",
                table: "Roles",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsDefault",
                table: "Roles");
        }
    }
}
