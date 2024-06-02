const express = require('express'); // Import the Express module
const app = express(); // Create an Express application
const port = 3000; // Define the port the server will listen on

app.use(express.static('public')); // Serve static files from the 'public' directory

// Default route to handle requests to the root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html'); // Serve the index.html file
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`); // Start the server and listen on the specified port
});