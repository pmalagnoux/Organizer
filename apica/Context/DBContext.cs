using apica.Models;
using Microsoft.EntityFrameworkCore;
using File = apica.Models.File;
using Type = apica.Models.Type;
namespace apica.Context
{
    public class DBContext : DbContext
    {
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Type> Types { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<File> Files { get; set; }
        public DbSet<Perimeter> Perimeters { get; set; }
        public DbSet<PerimeterContact> PerimeterContacts { get; set; }
        public DbSet<FileTag> FileTags { get; set; }

        public DBContext(DbContextOptions<DBContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<File>()
            .HasOne(f => f.Contact)
            .WithMany(c => c.Files)
            .HasForeignKey(f => f.ContactId);

        modelBuilder.Entity<File>()
            .HasOne(f => f.Type)
            .WithMany()
            .HasForeignKey(f => f.TypeId);

        modelBuilder.Entity<PerimeterContact>()
            .HasKey(pc => new { pc.ContactId, pc.PerimeterId });

        modelBuilder.Entity<Perimeter>()
            .HasMany(pc => pc.Contacts)
            .WithMany(c => c.Perimeters)
            .UsingEntity<PerimeterContact>();

            modelBuilder.Entity<Contact>()
            .HasMany(pc => pc.Perimeters)
            .WithMany(p => p.Contacts)
            .UsingEntity<PerimeterContact>();

            modelBuilder.Entity<FileTag>()
            .HasKey(ft => new { ft.FileId, ft.TagId });

        modelBuilder.Entity<Tag>()
            .HasMany(ft => ft.Files)
            .WithMany(f => f.Tags)
            .UsingEntity<FileTag>();

            modelBuilder.Entity<File>()
            .HasMany(ft => ft.Tags)
            .WithMany(t => t.Files)
            .UsingEntity<FileTag>();
        }

    }
}
