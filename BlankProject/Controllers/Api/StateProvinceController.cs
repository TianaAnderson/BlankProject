using BlankProject.Domain;
using BlankProject.Interfaces;
using BlankProject.Tools;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BlankProject.Controllers.Api
{
    [AuthorizationRequired]
    [RoutePrefix("api/states")]
    public class StateProvinceController : ApiController
    {
        IStateProvinceService _stateProvinceService;

        public StateProvinceController(IStateProvinceService stateProvinceService)
        {
            _stateProvinceService = stateProvinceService;
        }

        [Route, HttpGet]
        public HttpResponseMessage GetAll()
        {

            return Request.CreateResponse(HttpStatusCode.OK, _stateProvinceService.ReadAll());
        }

        [Route("{id:int}"), HttpGet]
        public HttpResponseMessage GetById(int id)
        {
            return Request.CreateResponse(HttpStatusCode.OK, _stateProvinceService.ReadById(id));
        }

        //[Route("update/{id:int}"), HttpPut]
        //public HttpResponseMessage Update(int id)
        //{
        //    return Request.CreateResponse(HttpStatusCode.OK, _stateProvinceService.ReadById(id));
        //}

    }
}

