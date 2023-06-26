using apic.Database;
using Microsoft.EntityFrameworkCore;

namespace apic.Repository
{
    public class DbHelper
    {
        private ContactContext _context;
        public DbHelper(ContactContext context)
        {
            _context = context;
        }

        /// <summary>
        /// GET
        /// </summary>
        /// <returns></returns>
        public List<Contact> GetContacts()
        {
            List<Contact> response = new List<Contact>();
            var dataList = _context.Contacts.FromSql($"SELECT c.id, c.first_name, c.last_name, c.mail, t.name FROM contact AS c LEFT JOIN ( SELECT p.id_contact, p.id_perimeter, p0.id, p0.name FROM perimeter_contact AS p INNER JOIN perimeter AS p0 ON p.id_perimeter = p0.id) AS t ON c.id = t.id_contact").ToList();
            return dataList;
        }

        public void AddContact(Contact contact)
        {
            _context.Contacts.Add(contact);
            _context.SaveChanges();
        }

        public void RemoveContact(int id)
        {
            Contact response = GetContact(id);
            _context.Contacts.Remove(response);
            _context.SaveChanges();

        }

        public Contact GetContact(int id)
        {
            Contact response = _context.Contacts.Find(id);
            return response;
        }

        public void AddPerimeter(Perimeter perimeter, int id)
        {   
            Contact response = GetContact(id);
            response.perimeters.Add(perimeter);
            _context.Contacts.Update(response);
            _context.SaveChanges();
        }
    }
}
