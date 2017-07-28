using BlankProject.Domain;
using BlankProject.Interfaces;
using BlankProject.Services;
using DBConnector.Adapter;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace BlankProject.Services
{
    public class StateProvinceService: BaseService, IStateProvinceService
    {
        public IEnumerable<StateProvince> ReadAll()
        {
            return SqlAdapter.LoadObject<StateProvince>(new DBCommandDef
            {
                DbCommandText = "[dbo].[StateProvince_SelectAll]",
                DbCommandType = System.Data.CommandType.StoredProcedure
            });
        }
        public StateProvince ReadById(int id)
        {
            return SqlAdapter.LoadObject<StateProvince>(new DBCommandDef
            {
                DbCommandText = "[dbo].[StateProvince_SelectById]",
                DbCommandType = System.Data.CommandType.StoredProcedure,
                DbParameters = new SqlParameter[]
                {
                    new SqlParameter("@Id", id)
                }
            }).FirstOrDefault();
        }
     
    }
}