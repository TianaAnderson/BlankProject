using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBConnector.Adapter
{
    public class DBCommandDef : IDbCommandDef
    {
        public string DbCommandText { get; set; }

        public CommandType DbCommandType { get; set; }

        public IDbDataParameter[] DbParameters { get; set; }
    }
}
