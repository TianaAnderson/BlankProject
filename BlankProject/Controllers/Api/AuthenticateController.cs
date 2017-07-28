using BlankProject.Domain;
using BlankProject.Filters;
using BlankProject.Tools;
using DBConnector.Tools;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;

namespace BlankProject.Controllers.Api
{
    [ApiAuthenticationFilter]
    [RoutePrefix("api/authenticate")]
    public class AuthenticateController : ApiController
    {

        [Route("login"), HttpPost]
        public HttpResponseMessage Authenticate()
        {
            if (Thread.CurrentPrincipal != null && Thread.CurrentPrincipal.Identity.IsAuthenticated)
            {
                BasicAuthenticationIdentity identity = Thread.CurrentPrincipal.Identity as BasicAuthenticationIdentity;
                if (identity != null)
                {
                    return GetAuthToken();
                }
            }
            return Request.CreateErrorResponse(HttpStatusCode.Unauthorized, "No Token Created");
        }


        private HttpResponseMessage GetAuthToken()
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, "Authorized");
            string token = "1234567890";
            string encryptedToken = token.EncryptPlusDecrypt();
            response.Headers.Add("Token", encryptedToken);
            //response.Headers.Add("Token", $"_{DateTime.Now.ToString()}_{Request.GetClientIpAddress()}");
            response.Headers.Add("TokenExpire", DateTime.Now.AddMinutes(1).ToString());
            response.Headers.Add("Access-Control-Expose-Headers", "Token, TokenExpire");
            return response;
        }
    }
}
