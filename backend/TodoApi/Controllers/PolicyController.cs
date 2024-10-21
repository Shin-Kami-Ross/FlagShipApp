using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using TodoApi.Data;
using TodoApi.Models;

[Route("api/[controller]")]
[ApiController]
[EnableCors("ReactApp")]
public class PolicyController : ControllerBase
{
    private readonly MongoDbContext _context;

    public PolicyController(IOptions<MongoDbConfiguration> settings)
    {
        _context = new MongoDbContext(settings);
    }

    [HttpGet]
 
    public async Task<ActionResult<IEnumerable<Policy>>> Get()
    {
        var articles = await _context.Policy.Find(_ => true).ToListAsync();
        return Ok(articles);
    }

    [HttpGet("{id}")]
    
    public async Task<ActionResult<Policy>> Get(string id)
    {
        var article = await _context.Policy.Find(a => a._id == id).FirstOrDefaultAsync();

        if (article == null)
        {
            return NotFound();
        }

        return Ok(article);
    }

    [HttpPost]
   
    public async Task<IActionResult> Post([FromBody] Policy article)
    {
        await _context.Policy.InsertOneAsync(article);
        return CreatedAtAction("Get", new { id = article._id }, article);
    }

    [HttpPut("{id}")]
   
    public async Task<IActionResult> Put(string id, [FromBody] Policy article)
    {
        var existingArticle = await _context.Policy.Find(a => a._id == id).FirstOrDefaultAsync();

        if (existingArticle == null)
        {
            return NotFound();
        }

        article._id = existingArticle._id;
        await _context.Policy.ReplaceOneAsync(a => a._id == id, article);
        return NoContent();
    }

    [HttpDelete("{id}")]
    
    public async Task<IActionResult> Delete(string id)
    {
        var article = await _context.Policy.Find(a => a._id == id).FirstOrDefaultAsync();

        if (article == null)
        {
            return NotFound();
        }

        await _context.Policy.DeleteOneAsync(a => a._id == id);
        return NoContent();
    }
}
