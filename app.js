const express = require('express');
const bodyParser = require('body-parser');
const app =  express();
const timestamp = require('./timestamp');

const port = 5000;
app.use(bodyParser.urlencoded({extended: false}));

app.get('/:str', (req, res) => {
  
  let date = timestamp(req.params.str);
  res.json(date);
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log('App listening on port '+port);
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});