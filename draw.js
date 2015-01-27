/**
 * Created by teithun on 27.01.2015.
 */
/*jshint node: true*/

"use strict";

var http = require("http");
console.log("ERROR")

http.createServer(function(req, res) {
    var body = "<h1>Hello Draw!</h1>";
    res.writeHead(200, {
        "Content-Length" : body.length,
        "Content-Type": "text/html"
    });
    res.write(body);
    res.end();
}).listen(3000);