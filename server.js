'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/test', (req, res) => {
  res.send('Hello Sanket Bhai warm welcome');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
