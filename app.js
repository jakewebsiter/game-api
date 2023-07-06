const express = require('express');

const app = express();

app.get('/temp/styles', (req, res) => {
  res.download('./TemplateData/style.css');
});

app.get('/temp/icon', (req, res) => {
  res.download('./TemplateData/favicon.ico');
});

app.get('/loader', (req, res) => {
  res.download('./Build/unity-gamee.loader.js');
});

app.get('/data', (req, res) => {
  res.download('./Build/unity-gameeee.loader.js');
});

app.get('/framework', (req, res) => {
  res.download('./Build/unity-gameeee.framework.js.br');
});

app.get('/wasm', (req, res) => {
  res.download('./Build/unity-gameeee.wasm.br');
});

app.listen(3000, console.log('Connected'));
