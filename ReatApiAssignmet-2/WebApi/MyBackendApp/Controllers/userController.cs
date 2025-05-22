
using Microsoft.AspNetCore.Mvc;
using MyBackendApp.Models;
using MyBackendApp.Managers;


[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase


{
     IUserManager _userManager;

     public UserController(IUserManager userManager)
     {

        _userManager = userManager;

     }

  
    [HttpGet ("id")]


    public IActionResult GetUserById(int id){

        var response = _userManager.GetUserById(id);
        return Ok(response);
    } 

    
     [HttpGet  ("GetAll") ]


    public IActionResult GetAllUsers() {

        var AllUser  = _userManager.GetAllUsers();

        return Ok(AllUser);

    }


     [HttpPost]

    public IActionResult createUser([FromBody] User user){
        return Ok(user);
    } 
}

