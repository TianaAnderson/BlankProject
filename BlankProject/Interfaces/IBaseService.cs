using DBConnector.Adapter;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlankProject.Interfaces
{
    public interface IBaseService
    {
        IDbAdapter SqlAdapter { get; }
    }
}
