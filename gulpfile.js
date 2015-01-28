/**
 * Created by teithun on 27.01.2015.
 */
var gulp = require("gulp");
var jshint = require("gulp-jshint");
var nodemon = require("gulp-nodemon");

gulp.task("default", function () {
    console.log("Hello gulp");
});

gulp.task("lint", function () {
    gulp.src(["*.js", "/server/*.js"])
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});

gulp.task("start", function() {
    nodemon("./draw.js")
        .on("change", ["lint", "default"])
        .on("restart", function() {
            console.log("   - restarted server..");
        });
});