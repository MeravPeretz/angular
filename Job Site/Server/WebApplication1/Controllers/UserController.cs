using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using JobSiteServer.Models;
using JobField = JobSiteServer.Models.JobField;
using System.Linq;
using System.IO;
using System.Text.Json;
using Newtonsoft.Json;

namespace JobSiteServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private List<User> savedUsers;

        public UserController() {
            string jsonFilePath = @"Data\Users.json"; 

            using (StreamReader r = new StreamReader(jsonFilePath))
            {
                string json = r.ReadToEnd();
                savedUsers = JsonConvert.DeserializeObject<List<User>>(json);
            }
        }
    
        [HttpGet("GetUser")]
        public ActionResult GetUser(string name,string password)
        {
            User user = savedUsers.FirstOrDefault(u=>u.Password==password&&u.Name==name);
            return Ok(user);
        }
    }
}
