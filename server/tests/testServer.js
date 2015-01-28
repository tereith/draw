/**
 * Created by teithun on 28.01.2015.
 */

var request = require("supertest");
var app = require("./../../draw.js");

var test = app.server.hello();
console.log("app.hello: " + test);

request(app)
    .get("/")
    .expect(200)
    .end(function (err, res) {
        if (err) throw err;
    });

/*
 app.get('/', function (req, res) {
 res.send(200, {});
 });

 request(app).get("/")
 .expect("Content-Type", "text/html")
 .expect(200)
 .end(function (err, res) {
 if (err) throw err;
 });

 */
