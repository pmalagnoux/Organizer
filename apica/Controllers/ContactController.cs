using apica.Context;
using apica.Helpers;
using apica.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace apica.Controllers
{

    [Route("/contact")]
    [ApiController]
    public class ContactController : ControllerBase
    {

        private readonly ContactHelper _db;


        public ContactController(DBContext dBContext)
        {
            _db = new ContactHelper(dBContext);
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

        [HttpPost("{id}")]
        public void UpdateById(int id, Contact contact)
        {
            try
            {
                _db.UpdateContact(id, contact);
               
            }
            catch (Exception ex)
            {
            
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

        [HttpDelete("{id}/deletePerimeter/{idPerimeter}")]
        public void DeletePerimeter(int id, int idPerimeter)
        {
            try
            {
                _db.RemovePerimeter(idPerimeter, id);

            }
            catch (Exception ex)
            {

            }

        }

        [HttpPost("{id}/addPerimeter/{idPerimeter}")]
        public void AddPerimeter(int id, int idPerimeter)
        {
            try
            {
                _db.AddPerimeter(idPerimeter, id);

            }
            catch (Exception ex)
            {

            }
        }
    }
}
