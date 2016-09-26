
var http = require('http');
var path = require('path');
var express = require('express');
var app = express();
require('./webpack')(app);
require('./express')(app);


app.listen(1000, function () {
    console.log(' successful ');
})

app.use('/',function(req,res,next){
    console.log('xxxxxxxxx');
    next();
})

app.get('/', function ( req,res) {
    res.sendFile(path.join(__dirname, './client/index.html'));
    //res.sendFile(path.join(__dirname, './client/index.html'));
});

