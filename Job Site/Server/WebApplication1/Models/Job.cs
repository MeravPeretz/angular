
namespace JobSiteServer.Models
{
    public class Job
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public JobField JobField { get; set; }
        public int Hours { get; set; }
        public string Area { get; set; }
        public string Requests { get; set; }
        public bool WorkingFromHome { get; set; }
    }
}