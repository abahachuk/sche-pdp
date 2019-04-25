const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api/product', function(req, res) {
  const mock = require('./data.json');
  res.json(mock);
});

// app.use('/scripts', express.static(path.join(__dirname, '/node_modules/')));
app.use(express.static(path.join(__dirname, '/dist')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, function () {
  console.log('Example app listening on port 5000!');
});
