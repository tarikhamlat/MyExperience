var express = require('express');
let fs = require('fs');
var bodyParser = require('body-parser')
var cors = require('cors'); 

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})  

app.get('/', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Vous êtes à l\'accueil');
});

app.get('/experience', function(req, res) {
  res.json(JSON.parse(fs.readFileSync('./FirstExper.json','utf8')));
});

app.listen(8080);