var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});


builder.Services.AddControllers();

var app = builder.Build();

app.UseCors();

app.UseRouting();

app.MapControllers();


app.Run();