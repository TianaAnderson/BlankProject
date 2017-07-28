using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlankProject.Domain.User
{
    public class SiteUser
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string EmailAddress { get; set; }

        public string Password { get; set; }

        public DateTime DateCreated { get; set; }
    }
}