﻿using BlankProject.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlankProject.Interfaces
{
    public interface IStateProvinceService
    {
        IEnumerable<StateProvince> ReadAll();
        StateProvince ReadById(int id);
    }
}
