using apica.Context;
using apica.Models;
using Microsoft.EntityFrameworkCore;

namespace apica.Helpers
{
    public class PerimeterHelper
    {
        private DBContext _context;
        public PerimeterHelper(DBContext context)
        {
            _context = context;
        }

        public List<Perimeter> GetPerimeters()
        {
            List<Perimeter> response = new List<Perimeter>();
            var dataList = _context.Perimeters.Include(pe => pe.Contacts).ToList();
            return dataList;
        }

        public void AddPerimeter(Perimeter contact)
        {
            _context.Perimeters.Add(contact);
            _context.SaveChanges();
        }

        public void RemovePerimeter(int id)
        {
            Perimeter response = GetPerimeter(id);
            _context.Perimeters.Remove(response);
            _context.SaveChanges();

        }

        public void RemoveContact(int idContact, int id)
        {
            var contactToDelete = _context.PerimeterContacts.FirstOrDefault(c => c.PerimeterId == id && c.ContactId == idContact);
            _context.PerimeterContacts.Remove(contactToDelete);
            _context.SaveChanges();
        }

        public Perimeter GetPerimeter(int id)
        {
            Perimeter response = _context.Perimeters.Include(pe => pe.Contacts).FirstOrDefault(x=> x.Id == id);
            return response;
        }

        public void UpdatePerimeter(int id, Perimeter perimeter)
        {
            Perimeter response = _context.Perimeters.FirstOrDefault(pe => pe.Id == id);
            response.Content = perimeter.Content;
            _context.SaveChanges();
        }

        public void AddContact(int idContact, int idPerimeter)
        {
            Perimeter response = _context.Perimeters.Include(c => c.Contacts).Single(p => p.Id == idPerimeter);
            Contact contact = _context.Contacts.Find(idContact);
            response.Contacts.Add(contact);
            _context.SaveChanges();
        }
    }
}
