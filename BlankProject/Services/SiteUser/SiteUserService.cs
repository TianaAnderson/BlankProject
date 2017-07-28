using BlankProject.Interfaces;
using BlankProject.Models;
using BlankProject.Tools;
using DBConnector.Adapter;
using DBConnector.Tools;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace BlankProject.Services.SiteUser
{
    public class SiteUserService :BaseService, ISiteUserService
    {
        IBaseService _baseService;
        public SiteUserService(IBaseService baseService)
        {
            _baseService = baseService;
        }
        public int Insert(UserAddRequest model)
        {
            SqlParameter id = SqlDbParameter.Instance.BuildParam("@Id", 0, System.Data.SqlDbType.Int, 0, System.Data.ParameterDirection.Output);

            _baseService.SqlAdapter.ExecuteQuery(new DBCommandDef
            {
                DbCommandText = "[dbo].[SiteUser_Insert]",
                DbCommandType = System.Data.CommandType.StoredProcedure,
                DbParameters = new SqlParameter[]
                {
                        new SqlParameter("@FirstName", model.FirstName),
                        new SqlParameter("@LastName", model.LastName),
                        new SqlParameter("@EmailAddress", model.EmailAddress),
                        new SqlParameter("@Password", model.Password),
                        id
                }
            });
            return id.Value.ToInt32();
            
                  
        }

        public IEnumerable<UserAddRequest> ReadAll()
        {
            return SqlAdapter.LoadObject<UserAddRequest>(new DBCommandDef
            {
                DbCommandText = "[dbo].[SiteUser_SelectAll]",
                DbCommandType = System.Data.CommandType.StoredProcedure
            });
        }

        public UserAddRequest ReadById(int id)
        {
            return SqlAdapter.LoadObject<UserAddRequest>(new DBCommandDef
            {
                DbCommandText = "[dbo].[SiteUser_SelectById]",
                DbCommandType = System.Data.CommandType.StoredProcedure,
                DbParameters = new SqlParameter[]
                {
                    new SqlParameter("@Id", id)
                }
            }).FirstOrDefault();

        }

    }
}