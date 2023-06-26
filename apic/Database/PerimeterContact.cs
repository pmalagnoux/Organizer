using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace apic.Database
{


    [Table("perimeter_contact")]
    public class PerimeterContact
    {
        [ForeignKey("idContact")]
        [Column("id_contact")]
        public int idContact { get; set; }

        [ForeignKey("idPerimeter")]
        [Column("id_perimeter")]
        public int idPerimeter { get; set; }


    }
}
