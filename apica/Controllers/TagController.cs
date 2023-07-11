using apica.Context;
using apica.Helpers;
using apica.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace apica.Controllers
{

    [Route("/tag")]
    [ApiController]
    public class TagController : ControllerBase
    {

        private readonly TagHelper _db;


        public TagController(DBContext dBContext)
        {
            _db = new TagHelper(dBContext);
        }

        [HttpGet("")]
        public IEnumerable<Tag> Get()
        {
            try
            {
                IEnumerable<Tag> data = _db.GetTags();
                return data;
            }
            catch (Exception ex)
            {
                return null;
            }
        }


        [HttpGet("{id}")]
        public Tag GetById(int id)
        {
            try
            {
                Tag data = _db.GetTag(id);
                return data;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        [HttpPost("{id}")]
        public void UpdateById(int id, Tag tag)
        {
            try
            {
                _db.UpdateTag(id, tag);
               
            }
            catch (Exception ex)
            {
            
            }
        }

        [HttpPost("addTag")]
        public void Add(Tag tag)
        {
            try
            {
                _db.AddTag(tag);

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
                _db.RemoveTag(id);

            }
            catch (Exception ex)
            {

            }
        }
    }
}
