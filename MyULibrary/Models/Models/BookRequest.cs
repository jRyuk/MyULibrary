using Shared;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MyULibrary.DAL.Models
{
    public class BookRequest : BaseModel
    {
        public User User { get; set; }

        [ForeignKey("User")]
        public string UserId { get; set; }

        public Books Book { get; set; }
        [ForeignKey("Book")]
        public int BookId { get; set; }
    }
}
