namespace apica.Models
{
    public class PerimeterContact
    {
        public int ContactId { get; set; }
        public int PerimeterId { get; set; }
        public Contact Contact { get; set; }
        public Perimeter Perimeter { get; set; }
    }
}
