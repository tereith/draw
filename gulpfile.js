/**
 * Created by teithun on 27.01.2015.
 */
var gulp = require("gulp");
var browserify = require('browserify');
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');
var jshint = require("gulp-jshint");
var nodemon = require("gulp-nodemon");
var shell = require("shelljs");
var BUILD_DIR_PATH = "dist";
var react = require("gulp-react");


gulp.task("default", function () {
    nodemon({
        //verbose: true,
        script: "./draw.js",
        ext: "jade js jsx", 
        ignore: ["dist/*.js"]
        })
        .on("start", ["shell", "lint", "compileJSX", "browserify"])
        .on("change", ["lint", "compileJSX", "browserify"])
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

gulp.task("compileJSX", function () {
    gulp.src("src/client/**/*.jsx")
        .pipe(react({harmony: true}))
        .pipe(gulp.dest("./src/client/_build"));
});

gulp.task('browserify', function () {
    var browserified = transform(function(filename) {
        var b = browserify(filename);
        return b.bundle();
    });

    return gulp.src(['./src/client/_build/*.js'])
        .pipe(browserified)
        //.pipe(uglify())
        .pipe(gulp.dest('./dist'));
});
