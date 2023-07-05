const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.download('./hello.txt');
});

app.listen(3000, console.log('Connected'));
