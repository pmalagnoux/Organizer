using apic.Database;
using apic.Repository;
using Microsoft.AspNetCore.Mvc;

namespace apic.Controllers
{
    [Route("/contact")]
    [ApiController]
    public class ContactController : ControllerBase
    {

        private readonly DbHelper _db;


        public ContactController(ContactContext contactContext)
        {
            _db = new DbHelper(contactContext);
        }

        [HttpGet("")]
        public IEnumerable<Contact> Get()
        {
            try
            {
                IEnumerable<Contact> data = _db.GetContacts();
                return data;
            }
            catch (Exception ex)
            {
                return null;
            }
        }


        [HttpGet("{id}")]
        public Contact GetById(int id)
        {
            try
            {
                Contact data = _db.GetContact(id);
                return data;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        [HttpPost("addContact")]
        public void Add(Contact contact)
        {
            try
            {
                _db.AddContact(contact);
                
            }
            catch (Exception ex)
            {
                
            }
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            try
            {
                _db.RemoveContact(id);

            }
            catch (Exception ex)
            {

            }
           
        }

        [HttpPost("{id}/addPerimeter")]
        public void AddContact(Perimeter perimeter, int id)
        {
            try
            {
                _db.AddPerimeter(perimeter, id);

            }
            catch (Exception ex)
            {

            }
        }
    }
}
