using apic.Database;
using apic.Repository;
using Microsoft.AspNetCore.Mvc;

namespace apic.Controllers
{
    [Route("/perimeter")]
    [ApiController]
    public class PerimeterController : ControllerBase
    {

        private readonly DbHelperPerimeter _db;


        public PerimeterController(PerimeterContext perimeterContext)
        {
            _db = new DbHelperPerimeter(perimeterContext);
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

        [HttpDelete("deletePerimeter/{id}")]
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
