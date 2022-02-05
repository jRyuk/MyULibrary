using System;
using System.ComponentModel.DataAnnotations;

namespace Shared
{
    public class BaseModel
    { 
        [Key]
        public int Id { get; set; }
    }
}
