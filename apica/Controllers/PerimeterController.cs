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
        public IActionResult GetById(int id)
        {
            Perimeter? data = _db.GetPerimeter(id);
            if (data != null)
            {
                return Ok(data);
            } 
            else
            {
                return NotFound();
            }
        }

        [HttpPost("{id}")]
        public IActionResult UpdateById(int id, Perimeter perimeter)
        {
            Perimeter? data = _db.UpdatePerimeter(id, perimeter);
            if (data != null)
            {
                return Ok();
            }
            else
            {
                return NotFound();
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

        [HttpDelete("{id}/deleteContact/{idContact}")]
        public void DeleteContact(int id, int idContact)
        {
            try
            {
                _db.RemoveContact(idContact, id);

            }
            catch (Exception ex)
            {

            }

        }

        [HttpPost("{id}/addContact/{idContact}")]
        public void AddContact(int id, int idContact)
        {
            try
            {
                _db.AddContact(idContact, id);

            }
            catch (Exception ex)
            {

            }
        }

    }
}
