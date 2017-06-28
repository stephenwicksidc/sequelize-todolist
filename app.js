const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const mustache = require('mustache');
const sequelize = require('sequelize');

app.use(express.static('public'));


app.get('/', function(req, res){
    res.send('Hello World')
});

app.listen(3000, function(){
    console.log("Hey this works");
});