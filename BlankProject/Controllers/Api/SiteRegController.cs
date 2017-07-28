using BlankProject.Interfaces;
using BlankProject.Models;
using BlankProject.Tools;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace BlankProject.Controllers.Api
{
    
    [RoutePrefix("api/user")]
    public class SiteRegController : ApiController
    {
         ISiteUserService _siteUserService;

        public SiteRegController(ISiteUserService siteUserService)
        {
            _siteUserService = siteUserService;
        }

        [Route, HttpPost]
        public HttpResponseMessage Insert(UserAddRequest model)
        {
            return Request.CreateResponse(HttpStatusCode.OK, _siteUserService.Insert(model));

        }
        [Route,HttpGet]
        public HttpResponseMessage GetAll()
        {
            return Request.CreateResponse(HttpStatusCode.OK, _siteUserService.ReadAll());
        }

        [Route("{id}"), HttpGet]
        public HttpResponseMessage GetById(int id)
        {
            return Request.CreateResponse(HttpStatusCode.OK, _siteUserService.ReadById(id));

        }
    }
}