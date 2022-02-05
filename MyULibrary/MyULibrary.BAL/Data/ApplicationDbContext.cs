using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MyULibrary.DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace MyULibrary.BAL.Data
{
    public class ApplicationDbContext : IdentityDbContext<User>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {

        }

        public DbSet<Books> Books { get; set; }
    }
}
