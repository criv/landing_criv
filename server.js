var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('./public')); 

app.get('/', function(request, response) {
  response.render('./public/index.html');
});

app.listen(8080);
