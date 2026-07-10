//express web server
const express = require('express');
const app = express();

const port = 3000; // Use environment variable or default to port 3000

app.get('/', (req, res) => {
 // Access the parameter value
  res.send(`Laurel Cerrato Ramirez`);
});

app.listen(process.env.port || port); 
  console.log(`Server listening on port ${port}`);
