using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
namespace TodoApi.Models
{
    public class Policy
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? _id { get; set; }
        [BsonRepresentation(BsonType.String)]
        public string? PolicyName { get; set; }
        [BsonRepresentation(BsonType.String)]
        public string? PolicyHolder { get; set; }
        [BsonRepresentation(BsonType.Int32)]
        public int PolicyDuration { get; set; }
        [BsonRepresentation(BsonType.Int32)]
        public int PolicyCost { get; set; }
    }
}