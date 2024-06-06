// src/app.js
const express = require('express');
const path = require('path');


const app = express();

// Your application logic here
// - Connect to chat service using configurations from chatConfig.js
// - Define routes to serve your application and potentially chat functionality

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// Handle chat routes or other application routes

const port = process.env.PORT || 3000;  // Use environment variable for port or default to 3000

app.listen(port, () => console.log(`Server listening on port ${port}`));

