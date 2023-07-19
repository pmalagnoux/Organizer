using apica.Context;
using apica.Helpers;
using apica.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using File = apica.Models.File;

namespace apica.Controllers
{
    [Route("/file")]
    [ApiController]
    public class FileController : ControllerBase
    {
        private readonly FileHelper _db;
        public FileController(DBContext dBContext)
        {
            _db = new FileHelper(dBContext);
        }

        [HttpGet("")]
        public IEnumerable<File> Get()
        {
            try
            {
                IEnumerable<File> data = _db.GetFiles();
                return data;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        [HttpGet("{id}")]
        public File GetById(int id)
        {
            try
            {
                File data = _db.GetFile(id);
                return data;
            }
            catch (Exception ex)
            {
                return null;
            }
        }


        [HttpPost("{id}")]
        public void UpdateById(int id, File file)
        {
            try
            {
                _db.UpdateFile(id, file);
            }
            catch (Exception ex)
            {

            }
        }

        [HttpPost("scan")]
        public void ScanFiles()
        {
            _db.ScanFiles();
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            try
            {
                _db.RemoveFile(id);
            }
            catch (Exception ex)
            {

            }

        }

        [HttpPost("{id}/addTag/{idTag}")]
        public void addTag(int id, int idTag)
        {
            _db.addTag(id, idTag);
        }

        [HttpDelete("{id}/deleteTag/{idTag}")]
        public void deleteTag(int id, int idTag)
        {
            _db.RemoveTag(id, idTag);
        }

        [HttpPost("{id}/addContact/{idContact}")]
        public void addContact(int id, int idContact)
        {
            _db.addContact(id, idContact);
        }

        [HttpDelete("{id}/deleteContact")]
        public void deleteContact(int id)
        {
            _db.RemoveContact(id);
        }


    }
}
