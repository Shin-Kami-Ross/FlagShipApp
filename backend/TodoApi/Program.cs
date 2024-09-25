using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OpenApi;
using Microsoft.EntityFrameworkCore;
using TodoApi;
using TodoApi.Data;
using TodoApi.Helper;

var builder = WebApplication.CreateBuilder(args);
// builder.Services.AddDbContext<ApplicationDbContext>(options =>
//     options.UseInMemoryDatabase("AppDb")
// );
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
.AddJwtBearer(options =>
{
    options.Authority = $"https://{builder.Configuration["Auth0:Domain"]}/";
    options.Audience = builder.Configuration["Auth0:Audience"];
    options.TokenValidationParameters = new TokenValidationParameters
    {
        NameClaimType = ClaimTypes.NameIdentifier
    };
});

    builder.Services
      .AddAuthorization(options =>
      {
          options.AddPolicy(
            "read:messages",     
            policy => policy.Requirements.Add(
              new HasScopeRequirement("read:messages", "dev-f3s3phzzcsgjvmu3")
              
            )
          );
      });

    builder.Services.AddSingleton<IAuthorizationHandler, HasScopeHandler>();

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddAuthorization();

// builder
//     .Services.AddIdentityApiEndpoints<IdentityUser>()
//     .AddEntityFrameworkStores<ApplicationDbContext>();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// app.MapIdentityApi<IdentityUser>();

// app.MapPost(
//         "/logout",
//         async (SignInManager<IdentityUser> signInManager, [FromBody] object empty) =>
//         {
//             if (empty != null)
//             {
//                 await signInManager.SignOutAsync();
//                 return Results.Ok();
//             }
//             return Results.Unauthorized();
//         }
//     )
//     .WithOpenApi()
//     .RequireAuthorization();

// app.MapGet(
//         "/weatherforecast",
//         (HttpContext httpContext) =>
//         {
//             string[] Summaries = new[]
//             {
//                 "Freezing",
//                 "Bracing",
//                 "Chilly",
//                 "Cool",
//                 "Mild",
//                 "Warm",
//                 "Balmy",
//                 "Hot",
//                 "Sweltering",
//                 "Scorching",
//             };
//             var forecast = Enumerable
//                 .Range(1, 5)
//                 .Select(index => new WeatherForecast
//                 {
//                     Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
//                     TemperatureC = Random.Shared.Next(-20, 55),
//                     Summary = Summaries[Random.Shared.Next(Summaries.Length)],
//                 })
//                 .ToArray();
//             return forecast;
//         }
//     )
//     .WithName("GetWeatherForecast")
//     .WithOpenApi()
//     .RequireAuthorization();

app.MapSwagger().RequireAuthorization();

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
