const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.download('./duck.jpg');
});

app.listen(3000, console.log('Connected'));
