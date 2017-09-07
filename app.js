var config = require('./config')
var path = require('path')
var express = require('express')

var port = 3434;

var app = express()

var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(express.static('./dist'))

var uri = 'http://localhost:' + port;

console.log('Started at' + port);

var server = app.listen(port);

