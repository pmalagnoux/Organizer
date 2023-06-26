using System.Diagnostics.CodeAnalysis;
using System.Text.Json.Serialization;

namespace apica.Models
{
    public class Tag
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public List<File> Files { get; set; }

    }
}
