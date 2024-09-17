using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;

namespace TodoApi.Data
{
   public class MongoDbConfiguration
{
    public string ConnectionString { get; set; }
    public string DatabaseName { get; set; }
}
}