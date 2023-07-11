using apica.Context;
using apica.Models;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata;

namespace apica.Helpers
{
    public class TagHelper
    {
        private DBContext _context;
        public TagHelper(DBContext context)
        {
            _context = context;
        }

        public List<Tag> GetTags()
        {
            List<Tag> response = new List<Tag>();
            var dataList = _context.Tags.ToList();
            return dataList;
        }

        public void AddTag(Tag tag)
        {
            _context.Tags.Add(tag);
            _context.SaveChanges();
        }

        public void RemoveTag(int id)
        {
            Tag response = GetTag(id);
            _context.Tags.Remove(response);
            _context.SaveChanges();

        }

        public Tag GetTag(int id)
        {
            Tag response = _context.Tags.FirstOrDefault(x=> x.Id == id);
            return response;
        }

        public void UpdateTag(int id, Tag tag)
        {
            Tag response = _context.Tags.FirstOrDefault(c => c.Id == id);
            response.Content = tag.Content;
            _context.SaveChanges(); 
        }

    }
}
