import 'dotenv/config';
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})


// app.get('/', (req, res) => res.sendFile('./index.html'))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
console.log(process.env.SOME_ENV_VARIABLE);
