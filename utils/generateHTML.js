function createHTML(team) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="Description" content="Enter your description here"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <link rel="stylesheet" href="/dist/style.css">
  <title>Team Profile Generator</title>
  </head>
  <body>
    
  ${team
    .map((member) => {
      return ` 
  <div class="card" style="width: 18rem;">
    <div class="container">
      <h2>${member.name}, ${member.getRole(
        "Manager",
        "Engineer",
        "Intern"
      )}</h2>
      <h3 class="card-subtitle mb-2 text-muted">ID: ${member.id}</h3>
    <p class="card-link">Email: <a href="mailto:${
      member.email
    }" target="_blank">${member.email}</a></p>
    <p class="card-link">${member.getSpecial(
      "Manager",
      "Engineer",
      "Intern"
    )}</p>
  </div>
</div>`;
    })
    .join("")}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
    </body>
    </html>`;
}

module.exports = createHTML;

{
}
