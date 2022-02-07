using MyULibrary.BAL.Implementations;
using MyULibrary.DAL.Models;
using MyULibrary.DAL.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyULibrary.BAL.Declarations
{
    public interface IBooksRepository : IRepository<Books>
    {
        Task<Books> RequestBook(BookRequestViewModel books);

        Task<IQueryable<Books>> GetMyBooks(string userId);

        Task<IQueryable<BookRequest>> GetAllBookRequested();

        Task EndBooking(int id);
    }
}
