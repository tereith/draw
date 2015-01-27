/**
 * Created by teithun on 27.01.2015.
 */
var gulp = require("gulp");
var jshint = require("gulp-jshint");

gulp.task("default", function () {
    console.log("Hello gulp");
});

gulp.task("lint", function () {
    gulp.src("*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});