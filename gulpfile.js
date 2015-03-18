/**
 * Created by teithun on 27.01.2015.
 */
var gulp = require("gulp");
var browserify = require('browserify');
var transform = require('vinyl-transform');
var source = require("vinyl-source-stream");
var uglify = require('gulp-uglify');
var jshint = require("gulp-jshint");
var nodemon = require("gulp-nodemon");
var shell = require("shelljs");
var BUILD_DIR_PATH = "dist";
var react = require("gulp-react");
var reactify = require("reactify");

gulp.task("default", function () {
    nodemon({
        //verbose: true,
        script: "./draw.js",
        ext: "jade js jsx html",
        ignore: ["dist/*.js"]
        })
        .on("start", ["browserify"])
        .on("change", ["browserify"])
        .on("restart", function () {
            console.log("restarted!");
        });
});

gulp.task("shell", function () {
    if (!shell.test("-d", BUILD_DIR_PATH)) {
        shell.mkdir(BUILD_DIR_PATH);
    }
});

gulp.task("lint", function () {
    gulp.src(["*.js", "/server/*.js", "src/client/*js"])
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});


gulp.task('browserify', function(){
    var b = browserify();
    b.transform(reactify); // use the reactify transform
    b.add('./src/client/app.jsx');
    return b.bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist'));
});