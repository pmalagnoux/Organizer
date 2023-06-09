using apic.Database;

namespace apic.Repository
{
    public class DbHelperPerimeter
    {
        private PerimeterContext _context;
        public DbHelperPerimeter(PerimeterContext context)
        {
            _context = context;
        }

        /// <summary>
        /// GET
        /// </summary>
        /// <returns></returns>
        public List<Perimeter> GetPerimeters()
        {
            List<Perimeter> response = new List<Perimeter>();
            var dataList = _context.Perimeters.ToList();
            dataList.ForEach(row => response.Add(new Perimeter()
            {

                id = row.id,
                name = row.name,
            }));
            return response;
        }

        public void AddPerimeter(Perimeter perimeter)
        {
            _context.Perimeters.Add(perimeter);
            _context.SaveChanges();
        }

        public void RemovePerimeter(int id)
        {
            Perimeter response = GetPerimeter(id);
            _context.Perimeters.Remove(response);
            _context.SaveChanges();

        }

        public Perimeter GetPerimeter(int id)
        {
            Perimeter response = _context.Perimeters.Find(id);
            return response;
        }

        public void AddContact(Contact contact, int id)
        {
            Perimeter response = GetPerimeter(id);
            response.contacts.Add(contact);
            _context.Perimeters.Update(response);
            _context.SaveChanges();
        }
    }
}
