using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace apic.Database
{


    [Table("perimeter")]
    public class Perimeter
    {
        [Key, Required]
        [Column("id")]
        public int id { get; set; }

        [Required]
        [Column("name")]
        public string name { get; set; }
        
        
        public ICollection<Contact> contacts { get; set; } = new List<Contact>();


    }
}
