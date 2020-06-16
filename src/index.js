import 'dotenv/config';
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
var Request = require("request");
// ng serve --proxy-config proxy.conf.json
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static(__dirname + '/public'));
app.get('/api/todos', function (req, res) {
  Request.get("https://jsonplaceholder.typicode.com/todos", (error, response, body) => {
      if(error) {
          return console.dir(error);
      }
      // console.dir(JSON.parse(body));
      res.send(JSON.parse(body));
    });
  
});
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`),
);
