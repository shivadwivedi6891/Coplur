using MyBackendApp.Models;

namespace MyBackendApp.Managers
{
    public interface IUserManager
    {
        User GetUserById(int id);
         List<User> GetAllUsers();
    }
}