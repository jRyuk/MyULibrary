using MyULibrary.BAL.Data;
using MyULibrary.BAL.Declarations;
using MyULibrary.DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace MyULibrary.BAL.Implementations
{
    public class UserRepository : BaseRepository<User>, IUsersRepository
    {
        public UserRepository(ApplicationDbContext applicationDbContext):base(applicationDbContext)
        {

        }
    }
}
