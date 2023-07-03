using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace apica.Migrations
{
    /// <inheritdoc />
    public partial class UpdateFileModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Files_Contacts_ContactId",
                table: "Files");

            migrationBuilder.DropForeignKey(
                name: "FK_Files_Types_TypeId",
                table: "Files");

            migrationBuilder.AlterColumn<int>(
                name: "TypeId",
                table: "Files",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AlterColumn<int>(
                name: "ContactId",
                table: "Files",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AddForeignKey(
                name: "FK_Files_Contacts_ContactId",
                table: "Files",
                column: "ContactId",
                principalTable: "Contacts",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Files_Types_TypeId",
                table: "Files",
                column: "TypeId",
                principalTable: "Types",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Files_Contacts_ContactId",
                table: "Files");

            migrationBuilder.DropForeignKey(
                name: "FK_Files_Types_TypeId",
                table: "Files");

            migrationBuilder.AlterColumn<int>(
                name: "TypeId",
                table: "Files",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ContactId",
                table: "Files",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Files_Contacts_ContactId",
                table: "Files",
                column: "ContactId",
                principalTable: "Contacts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Files_Types_TypeId",
                table: "Files",
                column: "TypeId",
                principalTable: "Types",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
