using apic.Database;

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
            var dataList = _context.Contacts.ToList();
            dataList.ForEach(row => response.Add(new Contact()
            {

                id = row.id,
                firstName = row.firstName,
                lastName = row.lastName,
                mail = row.mail,
            }));
            return response;
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

    }
}
