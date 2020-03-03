using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public double Height { get; set; }
        public string City { get; set; }
        public string[] Hobbies { get; set; }
        public string Image { get; set; }
        public bool Premium { get; set; }


        public List<User> getUnFavoritesUsers() {
            DBservices dbs = new DBservices();
            return dbs.getUnFavoritesUsers();

        }
        public List<User> getFavoritesUsers()
        {
            DBservices dbs = new DBservices();
            return dbs.getFavoritesUsers();

        }

        internal void insertlike(int id)
        {
            DBservices dbs = new DBservices();
            dbs.insertF(id);
        }
        internal void DeleteLike(int id)
        {
            DBservices dbs = new DBservices();
            dbs.DeleteF(id);
        }



    }
}