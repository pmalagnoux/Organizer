
using Microsoft.EntityFrameworkCore;
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
                .UsingEntity<PerimeterContact>();
        }
        public DbSet<Perimeter> Perimeters
        {
            get;
            set;
        }
    }
}
