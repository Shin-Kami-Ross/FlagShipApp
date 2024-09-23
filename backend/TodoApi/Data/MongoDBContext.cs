using Microsoft.Extensions.Options;
using MongoDB.Driver;
using TodoApi.Data;
using TodoApi.Models;

public class MongoDbContext
{
    private readonly IMongoDatabase _database;

    public MongoDbContext(IOptions<MongoDbConfiguration> settings)
    {
        var client = new MongoClient(
            "mongodb+srv://mutantkings:KgdvL79s6@cluster01.lfayadf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01"
        );
        _database = client.GetDatabase("Cluster01");
    }

    public IMongoCollection<Policy> Policy => _database.GetCollection<Policy>("policies");
    public IMongoCollection<InsuranceUser> InsuranceUser => _database.GetCollection<InsuranceUser>("insuranceuser");
}
