using BasicApi.Models;

using Microsoft.AspNetCore.Mvc;

namespace BasicApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudentController : Controller
    {
        private const string ControllerName = "Student";


        private static List<Student?> _students = new()
        {
            new Student()
            {
                Name = "Szilágyi Péter Sándor",
                IsActive = true,
                BirthYear = 1999,
                Connections = 200,
                CompletedCredits = 200,
                ActiveSemesterCount = 6,
                Image = "none"
            },
            new Student()
            {
                Name = "Szilágyi Krisztián",
                IsActive = false,
                BirthYear = 2001,
                Connections = 150,
                CompletedCredits = 0,
                ActiveSemesterCount = 0,
                Image = "none"
            }
        };

        [HttpGet]
        public List<Student?> Student()
        {
            return _students;
        }

        [HttpPost]
        public void Student([FromBody] Student? newStudent)
        {
            if (newStudent != null)
            {
                _students.Add(newStudent);

            }
        }

        [HttpDelete("{idToDelete}")]
        public void Student(string idToDelete)
        {
            var shouldDeleteStudent = _students.FirstOrDefault(s => s.Id == idToDelete);

            _students.Remove(shouldDeleteStudent);
        }
    }
}