using MyULibrary.BAL.Data;
using MyULibrary.BAL.Declarations;
using MyULibrary.DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace MyULibrary.BAL.Implementations
{
    public class BooksRepository : BaseRepository<Books>, IBooksRepository
    {
        public BooksRepository(ApplicationDbContext applicationDbContext):base(applicationDbContext)
        {

        }
    }
}
