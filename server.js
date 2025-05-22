const path    = require('path');
const express = require('express');
const app     = express();

// Serve the React build output
app.use(express.static(path.join(__dirname, 'build')));

// Always return index.html for any route (client-side routing)
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Bind to the Azure‐provided port or 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
