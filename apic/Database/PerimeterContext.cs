using Azure;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;

namespace apic.Database
{
    public class PerimeterContext : DbContext
    {
        public PerimeterContext(DbContextOptions<PerimeterContext> options) : base(options) { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Perimeter>()
                .HasMany(e => e.contacts)
                .WithMany(e => e.perimeters)
            .UsingEntity("perimeter_contact",
                l => l.HasOne(typeof(Contact)).WithMany().HasForeignKey("id_contact").HasPrincipalKey(nameof(Contact.id)),
                r => r.HasOne(typeof(Perimeter)).WithMany().HasForeignKey("id_perimeter").HasPrincipalKey(nameof(Perimeter.id)),
                j => j.HasKey("id_contact", "id_perimeter"));

        }
        public DbSet<Perimeter> Perimeters
        {
            get;
            set;
        }

        
    }
}
