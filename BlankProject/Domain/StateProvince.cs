using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlankProject.Domain
{
    public class StateProvince
    {
        public int Id { get; set; }

        public int CountryId { get; set; }

        public string StateProvinceCode { get; set; }

        public string Name { get; set; }


    }
}