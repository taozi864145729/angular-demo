var  expressLess = require('express-less');
var path = require('path');
var express = require('express');

module.exports = function (app){
    app.use(express.static(path.join(__dirname, './client')));
    app.use('/vendorcss', express.static(path.join(__dirname, './node_modules')));
}