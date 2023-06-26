using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Reflection.Metadata;
using System.Diagnostics.CodeAnalysis;

namespace apica.Models
{
    public class Contact
    {
        public int Id { get; set; }
        public string FirstName { get; set; }

        public string? LastName { get; set; }

        public string? Mail { get; set; }

        
        public List<File> Files { get; set; } = new List<File>();
        public List<Perimeter> Perimeters { get; set; } = new List<Perimeter>();

    }

}
   