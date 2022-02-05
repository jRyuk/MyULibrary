using Microsoft.AspNetCore.Identity;
using MyULibrary.DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace MyULibrary.BAL.Data
{
    public class DBInitializer
    {
        public static void SeedData(UserManager<User> userManager,RoleManager<IdentityRole> roleManager)
        {
            SeedRoles(roleManager);
            SeedUsers(userManager);
        }

        public static void SeedUsers(UserManager<User> userManager)
        {
            if (userManager.FindByNameAsync("student1@localhost").Result == null)
            {
                var user = new User();
                user.UserName = "student1@localhost";
                user.Email = "student1@localhost";
                user.FirstName = "Nancy";
                user.LastName = "Davolio";

                IdentityResult result = userManager.CreateAsync(user, "student123!").Result;

                if (result.Succeeded)
                {
                    userManager.AddToRoleAsync(user, "Student").Wait();
                }
            }


            if (userManager.FindByNameAsync("librarian1@localhost").Result == null)
            {
                var user = new User();
                user.UserName = "librarian1@localhost";
                user.Email = "librarian1@localhost";
                user.FirstName = "Mark";
                user.LastName = "Smith";

                IdentityResult result = userManager.CreateAsync(user, "Librarian123!").Result;

                if (result.Succeeded)
                {
                    userManager.AddToRoleAsync(user, "Librarian").Wait();
                }
            }
        }

        public static void SeedRoles(RoleManager<IdentityRole> roleManager)
        {
            if (!roleManager.RoleExistsAsync("Librarian").Result)
            {
                var role = new IdentityRole();
                role.Name = "Librarian";
                
                IdentityResult roleResult = roleManager.
                CreateAsync(role).Result;
            }


            if (!roleManager.RoleExistsAsync("Student").Result)
            {
                var role = new IdentityRole();
                role.Name = "Student";
                IdentityResult roleResult = roleManager.
                CreateAsync(role).Result;
            }
        }
    }
}
