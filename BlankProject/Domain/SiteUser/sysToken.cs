using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlankProject.Domain.SiteUser
{
    public class sysToken
    {
        public string GuidToken { get; set; }

        public int SiteUserId { get; set; }

        public DateTime ExpireDate { get; set; }


    }
}