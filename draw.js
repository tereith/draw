/**
 * Created by teithun on 27.01.2015.
 */

var express = require('express')
var app = express()

app.set("views", "./views");
app.set("view engine", "jade");

app.use("/bower_components", express.static(__dirname + "/bower_components"))

app.get('/', function (req, res) {
    res.render("index", {title: "** Draw **", message: "Hello Draw"});
})

var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

})