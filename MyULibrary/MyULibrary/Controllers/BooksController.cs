using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyULibrary.BAL.Data;
using MyULibrary.BAL.Declarations;
using MyULibrary.DAL.Models;
using MyULibrary.DAL.ViewModels;

namespace MyULibrary.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly IBooksRepository _booksRepository;

        public BooksController(ApplicationDbContext context, IBooksRepository booksRepository)
        {
            
            _booksRepository = booksRepository;
        }

        // GET: api/Books
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Books>>> GetBooks()
        {
            return Ok(await _booksRepository.Get());
        }

        // GET: api/Books/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Books>> GetBooks(int id)
        {
            var books = await _booksRepository.GetByID(id);

            if (books == null)
            {
                return NotFound();
            }

            return books;
        }

        // PUT: api/Books/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBooks(int id, Books books)
        {
            if (id != books.Id)
            {
                return BadRequest();
            }

            try
            {
                await _booksRepository.Update(books);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!await BooksExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Books
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Books>> PostBooks(Books books)
        {
           await _booksRepository.Insert(books);

            return CreatedAtAction("GetBooks", new { id = books.Id }, books);
        }

        // DELETE: api/Books/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Books>> DeleteBooks(int id)
        {
            var books = await _booksRepository.GetByID(id);
            if (books == null)
            {
                return NotFound();
            }

           await _booksRepository.Delete(books);

            return books;
        }

        private async Task<bool> BooksExists(int id)
        {
            var book = await _booksRepository.GetByID(id);
            return book != null;
        }

        [HttpPost("requestbook")]
        public async Task<ActionResult> RequestBook(BookRequestViewModel books)
        {
            var userinfo = User.FindFirstValue(ClaimTypes.NameIdentifier);
            books.Email = userinfo;
            var result = await _booksRepository.RequestBook(books);
            return Ok(result);
        }

        // GET: api/Books
        [HttpGet("mybooks")]
        public async Task<ActionResult<IEnumerable<Books>>> MyBooks()
        {
            var userinfo = User.FindFirstValue(ClaimTypes.NameIdentifier);
            return Ok(await _booksRepository.GetMyBooks(userinfo));
        }
    }
}
