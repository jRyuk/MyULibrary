using Shared;
using System;
using System.Collections.Generic;
using System.Text;

namespace MyULibrary.DAL.Models
{
    public class Books : BaseModel
    {
        public string Title { get; set; }
        public string Author { get; set; }
        public DateTime Published { get; set; }
        public string Genre { get; set; }
    }
}
