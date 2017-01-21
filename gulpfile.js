var gulp = require("gulp");
var less = require("gulp-less");

gulp.task("style", function() {
	gulp.src("less/style.less")
		.pipe(less())
		.pipe(gulp.dest("css"));
});