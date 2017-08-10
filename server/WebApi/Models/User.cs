using System;
using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class User
    {
        [Key]
        public int id { get; set; }
        [Required]
        [StringLength(20)]
        public string userName { get; set; }
        [Required]
        public string password { get; set; }
        public string email { get; set; }

        public User()
        {
            
        }
    }
}
