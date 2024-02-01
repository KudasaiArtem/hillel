const {src, dest, watch, series} = require("gulp");

const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss')

function sassCompiler() {
    return src("sass/**/*.scss")
        .pipe(sass({outputStyle: "expanded"}))
        .pipe(purgecss({ content: ["*.html"]}))
        .pipe(dest("css/"));
}

function watcher() {
    watch(["sass/**/*.scss", "*.html"], sassCompiler);
}

exports.default = series(sassCompiler, watcher)
