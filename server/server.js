/**
 * Created by teithun on 27.01.2015.
 */
var http = require("http");

function start () {
    function onRequest(request, response) {
        console.log(" - request received..");
        var body = "Hello Draw!";
        response.writeHead(200, {
            "Content-Type" : "text/length"
        });
        response.write(body);
        response.end();
    };
    
    http.createServer(onRequest).listen(3000);
    console.log("* Server Started *");
}

exports.start = start;