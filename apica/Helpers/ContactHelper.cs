using apica.Context;
using apica.Models;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata;

namespace apica.Helpers
{
    public class ContactHelper
    {
        private DBContext _context;
        public ContactHelper(DBContext context)
        {
            _context = context;
        }

        public List<Contact> GetContacts()
        {
            List<Contact> response = new List<Contact>();
            var dataList = _context.Contacts.Include(pe => pe.Perimeters).ToList();
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

        public void RemovePerimeter(int idPerimeter, int id)
        {
            var perimeterToDelete = _context.PerimeterContacts.FirstOrDefault(c => c.PerimeterId == idPerimeter && c.ContactId == id);
            _context.PerimeterContacts.Remove(perimeterToDelete);
            _context.SaveChanges();
        }

        public Contact GetContact(int id)
        {
            Contact response = _context.Contacts.Include(pe => pe.Perimeters).FirstOrDefault(x=> x.Id == id);
            return response;
        }

        public void UpdateContact(int id, Contact contact)
        {
            Contact response = _context.Contacts.FirstOrDefault(c => c.Id == id);
            response.FirstName = contact.FirstName;
            response.LastName = contact.LastName;
            response.Mail = contact.Mail;
            _context.SaveChanges(); 
        }

        public void AddPerimeter(Perimeter perimeter, int id)
        {
            Contact response = GetContact(id);
            response.Perimeters.Add(perimeter);
            _context.Contacts.Update(response);
            _context.SaveChanges();
        }
    }
}
