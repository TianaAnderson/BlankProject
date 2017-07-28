using DBConnector.Tools;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace BlankProject.Tools
{
    public class AuthorizationRequiredAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(HttpActionContext actionContext)
        {
            if (actionContext.Request.Headers.Contains("Token"))
            {
                string tokenVal = actionContext.Request.Headers.GetValues("Token").First();
                string tokenExp = actionContext.Request.Headers.GetValues("TokenExpire").First();
                DateTime tokenExpires = Convert.ToDateTime(tokenExp);
                string hardcodedTokenCheck = "1234567890";
                //call extension method DecryptString
                string decryptedToken = tokenVal.EncryptPlusDecrypt();
                if (string.IsNullOrEmpty(decryptedToken))
                {
                    actionContext.Response = new System.Net.Http.HttpResponseMessage(System.Net.HttpStatusCode.Unauthorized) { ReasonPhrase = "Token is null" };
                    actionContext.Response.Content = new StringContent("Token is null");
                }
                if (decryptedToken != hardcodedTokenCheck)
                {
                    actionContext.Response = new System.Net.Http.HttpResponseMessage(System.Net.HttpStatusCode.Unauthorized) { ReasonPhrase = "Tokens do not match" };
                    actionContext.Response.Content = new StringContent("Tokens do not match");
                }
                if(tokenExpires <= DateTime.Now)
                {
                    actionContext.Response = new System.Net.Http.HttpResponseMessage(System.Net.HttpStatusCode.Unauthorized) { ReasonPhrase = "Tokens Expired" };
                    actionContext.Response.Content = new StringContent("Tokens Expired");

                }
                //string[] tVals = tokenVal.Split('_');
                //string aspNetUserId = tVals[0];
                //DateTime dtStamp = Convert.ToDateTime(tVals[1]);
                //string ip = actionContext.Request.GetClientIpAddress();
                //if (dtStamp < DateTime.Now.AddMinutes(-15))
                //{
                //    actionContext.Response = new HttpResponseMessage(HttpStatusCode.Unauthorized) { ReasonPhrase = "Token Expired" };
                //}
                //if (ip != tVals[2])
                //{
                //    actionContext.Response = new HttpResponseMessage(HttpStatusCode.Unauthorized) { ReasonPhrase = "Not the same origin" };
                //}
                //if (tVals[0] != hardcodedTokenCheck)
                //{
                //    actionContext.Response = new HttpResponseMessage(HttpStatusCode.Unauthorized) { ReasonPhrase = "Tokens do not match" };
                //}
            }
            else
            {
                actionContext.Response = new HttpResponseMessage(HttpStatusCode.Unauthorized) { ReasonPhrase = "No token found" };
            }

            base.OnActionExecuting(actionContext);
        }

    }
}