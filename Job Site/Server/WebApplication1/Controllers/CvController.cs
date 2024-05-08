using JobSiteServer.Controllers;
using JobSiteServer.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace CvController.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CvController : Controller
    {
        private List<Cv> savedCv;

        public CvController()
        {
            string jsonFilePath = @"Data\Cv.json";

            using (StreamReader r = new StreamReader(jsonFilePath))
            {
                string json = r.ReadToEnd();
                savedCv = JsonConvert.DeserializeObject<List<Cv>>(json);
            }
        }

        [HttpGet]
        public ActionResult GetUserCv(int id)
        {
            List<Cv> userCv = savedCv.FindAll(x => x.UserId == id);
            return Ok(userCv);
        }
        //[HttpGet]
        //public ActionResult GetCv()
        //{
         //   int numOfCv = savedCv.Max(x => x.Id );
        //    return Ok(numOfCv);
        //}
        [HttpPost]
        public ActionResult PostCv([FromBody] Cv cv)
        {
            cv.Id=savedCv.Max(x => x.Id);
            savedCv.Add(cv);
            return Ok(savedCv);
        }
    }
}

