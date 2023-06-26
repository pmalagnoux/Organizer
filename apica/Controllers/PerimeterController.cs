using apica.Context;
using apica.Helpers;
using apica.Models;

using Microsoft.AspNetCore.Mvc;

namespace apic.Controllers
{
    [Route("/perimeter")]
    [ApiController]
    public class PerimeterController : ControllerBase
    {

        private readonly PerimeterHelper _db;


        public PerimeterController(DBContext dBContext)
        {
            _db = new PerimeterHelper(dBContext);
        }

        [HttpGet("")]
        public IEnumerable<Perimeter> Get()
        {
            try
            {
                IEnumerable<Perimeter> data = _db.GetPerimeters();
                return data;
            }
            catch (Exception ex)
            {
                return null;
            }
        }


        [HttpGet("{id}")]
        public Perimeter GetById(int id)
        {
            try
            {
                Perimeter data = _db.GetPerimeter(id);
                return data;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        [HttpPost("addPerimeter")]
        public void Add(Perimeter perimeter)
        {
            try
            {
                _db.AddPerimeter(perimeter);
                
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
                _db.RemovePerimeter(id);

            }
            catch (Exception ex)
            {

            }
           
        }

        [HttpPost("{id}/addContact")]
        public void AddContact(Contact contact, int id)
        {
            try
            {
                _db.AddContact(contact, id);

            }
            catch (Exception ex)
            {

            }
        }

    }
}
