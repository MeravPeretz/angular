using System;

namespace JobSiteServer.Models
{
    public class User
    {        
        public int Id { get; set; }
        public string Name { get; set; }
        public String Password { get; set; }
        public JobField jobSearchField { get; set; }

        public User() { }
    }
}
