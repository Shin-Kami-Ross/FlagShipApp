using System.Collections.Generic;
using System.Threading.Tasks;
using Auth0.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using TodoApi.Data;
using TodoApi.Models;

namespace TodoApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InsuranceUserController : ControllerBase
    {
        private readonly MongoDbContext _context;

        public InsuranceUserController(IOptions<MongoDbConfiguration> settings)
        {
            _context = new MongoDbContext(settings);
        }

        public async Task Login(string returnUrl = "/")
        {
            var authenticationProperties = new LoginAuthenticationPropertiesBuilder()
                // Indicate here where Auth0 should redirect the user after a login.
                // Note that the resulting absolute Uri must be added to the
                // **Allowed Callback URLs** settings for the app.
                .WithRedirectUri(returnUrl)
                .Build();

            await HttpContext.ChallengeAsync(
                Auth0Constants.AuthenticationScheme,
                authenticationProperties
            );
        }

        [Authorize]
        public IActionResult Profile()
        {
            return View(
                new
                {
                    Name = User.Identity.Name,
                    EmailAddress = User
                        .Claims.FirstOrDefault(c => c.Type == ClaimTypes.Email)
                        ?.Value,
                    ProfileImage = User.Claims.FirstOrDefault(c => c.Type == "picture")?.Value,
                }
            );
        }

        [Authorize]
        public async Task Logout()
        {
            var authenticationProperties = new LogoutAuthenticationPropertiesBuilder()
                // Indicate here where Auth0 should redirect the user after a logout.
                // Note that the resulting absolute Uri must be added to the
                // **Allowed Logout URLs** settings for the app.
                .WithRedirectUri(Url.Action("Index", "Home"))
                .Build();

            await HttpContext.SignOutAsync(
                Auth0Constants.AuthenticationScheme,
                authenticationProperties
            );
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
        }

        [HttpGet]
        [Authorize]
        public async Task<ActionResult<IEnumerable<InsuranceUser>>> Get()
        {
            var articles = await _context.InsuranceUser.Find(_ => true).ToListAsync();
            return Ok(articles);
        }

        [HttpGet("{id}")]
        [Authorize]
        public async Task<ActionResult<InsuranceUser>> Get(string id)
        {
            var article = await _context.InsuranceUser.Find(a => a._id == id).FirstOrDefaultAsync();

            if (article == null)
            {
                return NotFound();
            }

            return Ok(article);
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Post([FromBody] InsuranceUser article)
        {
            await _context.InsuranceUser.InsertOneAsync(article);
            return CreatedAtAction("Get", new { id = article._id }, article);
        }

        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> Put(string id, [FromBody] InsuranceUser article)
        {
            var existingArticle = await _context
                .InsuranceUser.Find(a => a._id == id)
                .FirstOrDefaultAsync();

            if (existingArticle == null)
            {
                return NotFound();
            }

            article._id = existingArticle._id;
            await _context.InsuranceUser.ReplaceOneAsync(a => a._id == id, article);
            return NoContent();
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> Delete(string id)
        {
            var article = await _context.InsuranceUser.Find(a => a._id == id).FirstOrDefaultAsync();

            if (article == null)
            {
                return NotFound();
            }

            await _context.InsuranceUser.DeleteOneAsync(a => a._id == id);
            return NoContent();
        }
    }
}
