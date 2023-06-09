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
               .UsingEntity("perimeter_contact",
                    l => l.HasOne(typeof(Perimeter)).WithMany().HasForeignKey("id_perimeter").HasPrincipalKey(nameof(Perimeter.id)),
                    r => r.HasOne(typeof(Contact)).WithMany().HasForeignKey("id_contact").HasPrincipalKey(nameof(Contact.id)),
                    j => j.HasKey("id_perimeter", "id_contact")); ;
        }
        public DbSet<Contact> Contacts
        {
            get;
            set;
        }

        
    }
}
