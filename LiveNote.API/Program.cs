var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

var apiItems = app.MapGroup("/api");
apiItems.MapGet("/notes", () => new[]
{
    new Note(1, "Welcome to LiveNote", "This is your first note. Notes show up as cards on the home page.", DateTime.UtcNow.AddHours(-2)),
    new Note(2, "Groceries", "Milk\nEggs\nBread\nCoffee", DateTime.UtcNow.AddDays(-1)),
    new Note(3, "Ideas", "Real-time sync between clients, markdown support, and tags.", DateTime.UtcNow.AddDays(-3))
});

app.Run();

record Note(int Id, string Title, string Content, DateTime UpdatedAt);
