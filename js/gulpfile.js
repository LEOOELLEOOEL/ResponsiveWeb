/**
 * Created by ÀîºÀ on 2016/7/4 0004.
 */
var gulp=require("gulp");
var rev=require("gulp-rev");
var revReplace=require("gulp-rev-replace");
var useref=require("gulp-useref ");
var filter=require("gulp-filter");
var uglify=require("gulp-uglify");
var csso=require("gulp-csso");
gulp.task("default", function () {
    var jsFilter=filter("**/*.js",{restore:true});
    var cssFilter=filter("**/*.css",{restore:true});
    var indexHtmlFilter=filter(["**/*","!index.html"],{restore:true});

    return gulp.src("index.html")
        .pipe(useref())
        .pipe(jsFilter)
        .pipe(uglify())
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe(csso())
        .pipe(cssFilter.restore)
        .pipe(indexHtmlFilter)
        .pipe(rev())
        .pipe(indexHtmlFilter)
        .pipe(revReplace())
        .pipe(gulp.dest("dist"));



});