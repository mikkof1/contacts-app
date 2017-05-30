using System;
using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class Contact
    {
        [Key]
        public int id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string phone { get; set; }
        public string address { get; set; }
        public string city { get; set; }

        public Contact()
        {
            
        }
    }
}
