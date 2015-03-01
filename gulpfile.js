/**
 * Created by teithun on 27.01.2015.
 */
var gulp = require("gulp");
var jshint = require("gulp-jshint");
var nodemon = require("gulp-nodemon");
var shell =require("shelljs");
var BUILD_DIR_PATH = "build";
var react = require('gulp-react');

gulp.task("default", function () {
    console.log("Hello gulp");
});

gulp.task("lint", function () {
    gulp.src(["*.js", "/server/*.js"])
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});


gulp.task('compileJSX', function () {
    return gulp.src('public/*.jsx')
        .pipe(react({harmony: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task("start", function() {
    nodemon("./draw.js")
        .on("change", ["lint", "compileJSX", "default"])
        .on("restart", function() {
            console.log("   - restarted server..");
        });
});

gulp.task("shell", function() {
    shell.echo('hello world');
    if (shell.test("-d", BUILD_DIR_PATH)) {
        shell.mkdir("DELETE_ME");
        shell.rm("-rf", BUILD_DIR_PATH);
    } else {
        shell.mkdir(BUILD_DIR_PATH);
        shell.rm("-rf", "DELETE_ME");
    }
});