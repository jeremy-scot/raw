const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/raw/*', (req, res) => {
  const filePath = path.join(__dirname, req.path);
  if (fs.existsSync(filePath)) {
    res.setHeader('Content-Type', 'text/plain');
    res.sendFile(filePath);
  } else {
    res.status(404).send('File not found');
  }
});

app.get('/', (req, res) => {
  res.send('Raw server is running! Use /raw/examples/example.lua');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));