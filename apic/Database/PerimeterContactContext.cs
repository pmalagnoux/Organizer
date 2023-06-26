using Azure;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;

namespace apic.Database
{
    public class PerimeterContactContext : DbContext
    {
        public PerimeterContactContext(DbContextOptions<PerimeterContactContext> options) : base(options) { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PerimeterContact>();
                
                
        }
        public DbSet<PerimeterContact> PerimetersContacts
        {
            get;
            set;
        }

        
    }
}
