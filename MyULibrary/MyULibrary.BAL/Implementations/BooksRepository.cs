using Microsoft.EntityFrameworkCore;
using MyULibrary.BAL.Data;
using MyULibrary.BAL.Declarations;
using MyULibrary.DAL.Models;
using MyULibrary.DAL.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyULibrary.BAL.Implementations
{
    public class BooksRepository : BaseRepository<Books>, IBooksRepository
    {
        public BooksRepository(ApplicationDbContext applicationDbContext):base(applicationDbContext)
        {

        }

        public async Task EndBooking(int id)
        {
            var booking = await context.BookRequest.Include(c=> c.Book).FirstOrDefaultAsync(c => c.Id == id);
            if (booking != null)
            {
                var book = await context.Books.FirstOrDefaultAsync(c => c.Id == booking.Book.Id);
                context.BookRequest.Remove(booking);
                await context.SaveChangesAsync();
                book.Quantity += 1;
                await context.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<Books>> Get(string filter)
        {
            if (string.IsNullOrEmpty(filter))
                return await Get();

            return context.Books.Where(c => c.Title.ToLower().Contains(filter.ToLower())
            || c.Genre.ToLower().Contains(filter.ToLower())
            || c.Author.ToLower().Contains(filter.ToLower()));
        }

        public async Task<IQueryable<BookRequest>> GetAllBookRequested()
        {
            return context.BookRequest.Include(c => c.User)
             .Include(c => c.Book).Select(c => c);
        }

        public async Task<IQueryable<Books>> GetMyBooks(string userId)
        {

            

            var mybooks = context.BookRequest.Include(c => c.User)
            .Include(c => c.Book).Where(c => c.User.Email == userId);

            return mybooks.Select(c => c.Book);
        }

        public async Task<Books> RequestBook(BookRequestViewModel books)
        {
            var book = this.dbSet.FirstOrDefault(c=> c.Id == books.Id);

            if(book != null && book.Quantity > 0)
            {
                var user = context.Users.FirstOrDefault(c => c.Email == books.Email);

                if(user != null)
                {
                    
                    context.BookRequest.Add(new BookRequest() { 
                        BookId = book.Id,
                        UserId = user.Id
                    });
                    context.SaveChanges();
                    book.Quantity -= 1;
                    await Update(book);
                   
                    return book;
                }
               
                
            }
            return null;
        }
    }
}
