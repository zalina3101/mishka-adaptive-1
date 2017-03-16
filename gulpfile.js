"use strict";

var gulp         = require("gulp");
var less         = require("gulp-less");
var plumber      = require("gulp-plumber");
var postcss      = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server 			 = require("browser-sync");
var mqpacker     = require("css-mqpacker");
var minify       = require("gulp-csso");
var rename			 = require("gulp-rename");
var imagemin		 = require("gulp-imagemin");
var svgmin       = require("gulp-svgmin");
var svgstore     = require("gulp-svgstore");
var run          = require("run-sequence");
var del          = require("del");
var cheerio      = require("gulp-cheerio");
var swig         = require("gulp-swig");
var ghPages      = require('gulp-gh-pages');
// var uglify       = require("gulp-uglify");
// var browserify   = require("browserify");
// var pump         = require("pump");

gulp.task("style", function() {
	gulp.src("less/style.less")
		.pipe(plumber())
		.pipe(less())
		.pipe(postcss([
			autoprefixer({browsers: [
				"last 1 version",
				"last 2 Chrome versions",
				"last 2 Firefox versions",
				"last 2 Opera versions",
				"last 2 Edge versions"
			]}),
			mqpacker({
				sort: true
			})
		]))
		.pipe(gulp.dest("build/css"))
		.pipe(minify())
		.pipe(rename("style.min.css"))
		.pipe(gulp.dest("build/css"))
		.pipe(server.reload({stream: true}));
});

gulp.task("serve", function() {
	server.init({
		server: "build"
	});

	gulp.watch("less/**/*.less", ["style"]);
	gulp.watch("*.html", ['templates']);
  gulp.watch("js/*.js", ['js-watch']);
});


//HTML change

gulp.task('templates', function() {
  return gulp.src('*.html')
    .pipe(swig({
      defaults: {
        cache: false
      }
    }))
    .pipe(gulp.dest('./build'))
    .pipe(server.reload({stream: true}));
});


//JS change

gulp.task('js-watch', ['js'], function (done) {
    server.reload();
    done();
});

gulp.task('js', function () {
    return gulp.src('js/*.js')
        // .pipe(browserify())
        // .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

gulp.task("images", function() {
	return gulp.src("build/img/**/*.{png,jpg,gif}")
		.pipe(imagemin([
			imagemin.optipng({optimizationLevel: 3}),
			imagemin.jpegtran({progressive: true})
		]))
		.pipe(gulp.dest("build/img"));
});

gulp.task("symbols", function() {
	return gulp.src("build/img/icons/*.svg")
		.pipe(svgmin())
		.pipe(svgstore({
			inlineSvg: true
		}))
    .pipe(cheerio({
            run: function ($) {
                $('svg').attr('style',  'display:none');
            },
            parserOptions: { xmlMode: true }
        }))
		.pipe(rename("symbols.svg"))
		.pipe(gulp.dest("build/img/sprites"));
});

gulp.task("build", function(fn) {
  run(
    "clean",
    "copy",
    "style",
    "images",
    "symbols",
    fn
  );
});

gulp.task("copy", function() {
  return gulp.src([
    "fonts/**/*.{woff,woff2}",
    "img/**",
    "js/**",
    "*.html"
  ], {
    base: "."
  })
  .pipe(gulp.dest("build"));
});

gulp.task("clean", function() {
  return del("build");
});

gulp.task('deploy', function() {
  return gulp.src('build/**/*')
    .pipe(ghPages());
});

