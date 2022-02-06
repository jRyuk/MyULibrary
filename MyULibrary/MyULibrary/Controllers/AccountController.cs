using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using MyULibrary.BAL.Implementations;
using MyULibrary.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyULibrary.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        UserManager<User> _userManager;
        RoleManager<IdentityRole> _roleManager;
        IUserService _userService;
        public AccountController(UserManager<User> userManager, RoleManager<IdentityRole> roleManager, IUserService userService)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _userService = userService;
        }

        // POST: api/Account
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<User>> PostAccount(User user)
        {
            user.UserName = user.Email;
            IdentityResult result = await _userManager.CreateAsync(user, user.Password);

            if (result.Succeeded)
            {
               await  _userManager.AddToRoleAsync(user, user.Role);
            }

            return CreatedAtAction("GetBooks", new { id = user.Id }, user);
        }


        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate(AuthenticateRequest model)
        {
            

            var response = await _userService.Authenticate(model);

            if (response == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(response);
        }


    }
}
