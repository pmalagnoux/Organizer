namespace apica.Models
{
    public class FileTag
    {
        public int FileId { get; set; }
        public int TagId { get; set; }
        public File File { get; set; }
        public Tag Tag { get; set; }

    }


}
