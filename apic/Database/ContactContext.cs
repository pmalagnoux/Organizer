using Microsoft.EntityFrameworkCore;

namespace apic.Database
{
    public class ContactContext : DbContext
    {
        public ContactContext(DbContextOptions<ContactContext> options) : base(options) { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Contact>()
                .HasMany(e => e.perimeters)
                .WithMany(e => e.contacts)
                .UsingEntity<PerimeterContact>();
            
        }
        public DbSet<Contact> Contacts
        {
            get;
            set;
        }
    }
}
