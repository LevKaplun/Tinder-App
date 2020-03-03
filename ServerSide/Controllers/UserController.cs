using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;

namespace tinderServerS.Controllers
{
    public class UserController : ApiController
    {
        // GET: api/User
        public string Get()
        {
            return "";
        }

        [Route("api/user/{isF}")]
        public List<User> Get(bool isF)
        {

            User user = new User();
            if (isF)
            {
                return user.getFavoritesUsers();
            }
            else
            {
                return user.getUnFavoritesUsers();

            }
        }

        // POST: api/User
        public void Post([FromBody]int id)
        {
            User user = new User();
            user.insertlike(id);
        }

        // PUT: api/User/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/User/5
        public void Delete([FromBody]int id)
        {
            User user = new User();
            user.DeleteLike(id);
        }
    }
}
