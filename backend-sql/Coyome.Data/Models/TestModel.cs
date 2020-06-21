using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace Coyome.Data.Models
{
    public class TestModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public List<string> anh { get; set; }
        public string ten { get; set; }
        public int gia { get; set; }
        public int __v { get; set; }
    }
}
