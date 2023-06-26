using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace apic.Database

{


    [Table("contact")]
    public class Contact
    {
        [Key, Required]
        [Column("id")]
        public int id { get; set; }

        [Required]
        [Column("first_name")]
        public string? firstName { get; set; }

        [Column("last_name")]
        public string? lastName { get; set; }

        [Column("mail")]
        public string? mail { get; set; }

        public virtual ICollection<Perimeter> perimeters { get; set; } = new List<Perimeter>();
        //public virtual ICollection<PerimeterContact> perimetersContacs { get; set; }  = new List<PerimeterContact>();

    }
}
