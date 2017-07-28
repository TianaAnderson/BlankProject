using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DBConnector.Adapter;
using DBConnector.Tools;
using System.Configuration;
using System.Data.SqlClient;
using BlankProject.Interfaces;

namespace BlankProject.Services
{
    public class BaseService : IBaseService
    {
        string _connectionString;
        public BaseService()
        {
            _connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
        }
    
        public IDbAdapter SqlAdapter
        {
            get
            {
                return new DbAdapter(new SqlCommand(), new SqlConnection(_connectionString));
            }
        }
    }
}