
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(express.static('./public')); 
app.use(bodyParser.json());

// app.get('/', function(request, response) {
//   response.render('./public/index.html');
// });

var port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;

app.listen(port);