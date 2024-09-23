using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
namespace TodoApi.Models
{
    public class InsuranceUser
    {
         [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? _id { get; set; }
        [BsonRepresentation(BsonType.String)]
        public string? Username { get; set; }
        [BsonRepresentation(BsonType.String)]
        public string? Email { get; set; }
        [BsonRepresentation(BsonType.String)]
        public string? Password { get; set; }
        [BsonRepresentation(BsonType.String)]
        public string? FirstName { get; set; }
        [BsonRepresentation(BsonType.String)]
        public string? LastName { get; set; }
      
    }
}