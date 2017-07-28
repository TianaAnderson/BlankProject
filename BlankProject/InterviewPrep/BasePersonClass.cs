using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlankProject.InterviewPrep
{
    public class BasePerson
    {
        string Name { get; set; }

        int Age { get; set; }

    }

    public class Employee : BasePerson
    {
        int EmployeeId { get; set; }
    }

    public class Manager : Employee
    {
        int ManagerStatus { get; set; }
    }
}