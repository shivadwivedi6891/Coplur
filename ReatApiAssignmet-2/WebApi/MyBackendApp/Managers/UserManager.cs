
using MyBackendApp.Models;

namespace MyBackendApp.Managers
{
    public class UserManager : IUserManager
    {
        public User GetUserById(int id)
        {
            return new User
            {
                Name = "Shiva",
                Password = "dwivedi"
            };

        }

           public List<User> GetAllUsers(){
                return new List<User>
                {
                new User { Name = "Shiva", Password = "dwivedi" },
                new User { Name = "Arjun", Password = "bharat" },
                new User { Name = "Radha", Password = "krishna" }
            };
            }
        }
    }

