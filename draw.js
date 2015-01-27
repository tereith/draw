/**
 * Created by teithun on 27.01.2015.
 */
"use strict";

var http = require("http");

http.createServer(function(req, res) {
    res.write("Hello Draw!");
    res.end();
}).listen(3000);