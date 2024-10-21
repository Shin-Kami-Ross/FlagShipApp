using System.Security.Claims;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OpenApi;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using TodoApi;
using TodoApi.Data;
using TodoApi.Helper;

var builder = WebApplication.CreateBuilder(args);

builder
    .Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.Authority = $"https://{builder.Configuration["Auth0:Domain"]}/";
        options.Audience = builder.Configuration["Auth0:Audience"];
        options.TokenValidationParameters = new TokenValidationParameters
        {
            NameClaimType = ClaimTypes.NameIdentifier,
        };
    });

builder.Services.AddAuthorization(options =>
{
    options.AddPolicy(
        "read:messages",
        policy =>
            policy.Requirements.Add(
                new HasScopeRequirement("read:messages", "dev-f3s3phzzcsgjvmu3")
            )
    );
});

builder.Services.AddSingleton<IAuthorizationHandler, HasScopeHandler>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("ReactApp",
        policy =>
        {
            policy.WithOrigins("http://localhost:3000") // Specify allowed origin(s)
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });

});
// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddAuthorization();

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

app.MapSwagger().RequireAuthorization();

app.UseHttpsRedirection();

app.UseRouting(); 
app.UseCors("ReactApp"); // Apply globally
app.UseStaticFiles(); 
// app.UseCors("AllowAll"); // Apply globally
app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
