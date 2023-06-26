using System.Diagnostics.CodeAnalysis;

namespace apica.Models
{
    public class Perimeter
    {
        public int Id { get; set; }
        public string Content { get; set; }

        public List<Contact> Contacts { get; set; } = new List<Contact>();

    }

    
}
