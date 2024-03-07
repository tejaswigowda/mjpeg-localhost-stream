// npm install -g @tejaswigowda/mjpeg-local-stream

var MjpegProxy = require('mjpeg-proxy').MjpegProxy;
var express = require('express');
var app = express();
//Access-Control-Allow-Origin: 

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

if (process.argv.length < 3) {
    console.log('Usage: node index.js <url> <port>(optional)');
    process.exit(1);
}
var url = process.argv[2]
var port = process.argv[3] || 9999

var proxy = new MjpegProxy(url);

app.get('/video', function(req, res) {
    proxy.proxyRequest(req, res);
});

// process error handler

process.on('uncaughtException', function (err) {
    // restart server
    console.log('Caught exception: ' + err);
    console.log('Restarting server');
    proxy = new MjpegProxy(url);
});

app.listen(port);
console.log('Server started on port ' + port);
console.log('Proxying ' + url);
console.log('Open http://localhost:' + port + '/video in your browser');
