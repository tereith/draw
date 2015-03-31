/**
 * Created by teithun on 27.01.2015.
 */
var express = require("express");
var app = express();

var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
// routing
/*
var react = require("./routes/react-route");
var d3 = require("./routes/d3-route");
var map = require("./routes/map-route");
*/


// view engine setup
/**
 **/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + "/public/favicon.ico"));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "./src/client")));
app.use(express.static(path.join(__dirname, "./src/server")));
app.use(express.static(path.join(__dirname, "./bower_components")));
app.use(express.static(path.join(__dirname, "./dist")));
app.use(express.static(path.join(__dirname, "./build")));

/*
app.use("/react", react);
app.use("/d3", d3);
app.use("/map", map);

*/
app.get("/", function (req, res) {
    res.render("layout", {title: "** Sunrecorder **"});
});

app.get("/map", function (req, res) {
    res.render("map", {
        title: "** OpenLayers test **",
        message: "OpenLayers/ OpenStreetMap",
        coordmessage: "Click on the map to get coordinates."
    });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Draw-app listening at http://%s:%s", host, port);
});