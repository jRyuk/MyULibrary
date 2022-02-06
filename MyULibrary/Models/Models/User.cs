using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Microsoft.AspNetCore.Identity;

namespace MyULibrary.DAL.Models
{
    public class User : IdentityUser
    {
        public User()
        {
            BookRequests = new HashSet<BookRequest>();
        }

        public string FirstName { get; set; }
        public string LastName { get; set; }

        [NotMapped]
        public string Password { get; set; }
        [NotMapped]
        public string Role { get; set; }

        public HashSet<BookRequest> BookRequests { get; set; }
    }
}
