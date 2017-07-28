using BlankProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlankProject.Interfaces
{
    public interface ISiteUserService
    {
        int Insert(UserAddRequest model);

        IEnumerable<UserAddRequest> ReadAll();

        UserAddRequest ReadById(int id);
    }
}
