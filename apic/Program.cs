using apic.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;

var builder = WebApplication.CreateBuilder(args);

//CORS 
var MyAllowSpecificOrigins = "anyCors";

builder.Services.AddCors(options =>
{
    options.AddPolicy(MyAllowSpecificOrigins,
                          policy =>
                          {
                              policy.AllowAnyOrigin()
                                    .AllowAnyHeader()
                                    .AllowAnyMethod();
                          });
});


// Add services to the container.

builder.Services.AddControllers();

//Add connection to db.

builder.Services.AddDbContext<PerimeterContext>(o => o.UseNpgsql(builder.Configuration.GetConnectionString("Organizer")));
builder.Services.AddDbContext<ContactContext>(o => o.UseNpgsql(builder.Configuration.GetConnectionString("Organizer")));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var app = builder.Build();


app.UseCors(MyAllowSpecificOrigins);

//Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
