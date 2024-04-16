using JobSiteServer.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace JobSiteServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobController : Controller
    {
        private List<Job> savedJobs;

        public JobController()
        {
            string jsonFilePath = @"Data\Jobs.json";

            using (StreamReader r = new StreamReader(jsonFilePath))
            {
                string json = r.ReadToEnd();
                savedJobs = JsonConvert.DeserializeObject<List<Job>>(json);
            }
        }

        [HttpGet]
        public ActionResult GetJobs()
        {
            return Ok(savedJobs);
        }
    }
}

