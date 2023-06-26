using System.Diagnostics.CodeAnalysis;

namespace apica.Models
{
    public class File
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Extension { get; set; }
        public string Location { get; set; }
    
        public int ContactId { get; set; }
     
        public int TypeId { get; set; }
   
        public Contact Contact { get; set; }

        public Type Type { get; set; } 
 
        public List<Tag> Tags { get; set; } = new List<Tag>();

    }



}
