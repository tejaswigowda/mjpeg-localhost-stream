// npm install -g mjpeg-local-stream

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

app.get('/video', new MjpegProxy(url).proxyRequest);
app.listen(port);
console.log('Server started on port ' + port);
