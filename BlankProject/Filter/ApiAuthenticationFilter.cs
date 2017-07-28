using BlankProject.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Http.Controllers;

namespace BlankProject.Filters
{
    public class ApiAuthenticationFilter : GenericAuthenticationFilter
    {
        protected override bool OnAuthorizeUser(string userName, string password, HttpActionContext context)
        {
            if (userName == "jaephizzle30" && password == "Pqwerty12!")
            {
                BasicAuthenticationIdentity basicIdentity = Thread.CurrentPrincipal.Identity as BasicAuthenticationIdentity;
                if (basicIdentity != null)
                {
                    basicIdentity.UserId = 2;
                    basicIdentity.FullName = "Jae Phizzle30";
                }
                return true;
            }

            return false;
        }
    }
}