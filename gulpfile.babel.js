//https://github.com/gulpjs/gulp/blob/4.0/docs/API.md
const gulp = require('gulp');
const del = require("del");
const md = require("gulp-remarkable");
const name = require("gulp-rename");
const browserSync = require('browser-sync').create();

const paths = {
    scripts: {
        src: "./*.html",
        // src: "./mermaid.md",
        dest: "./dist",
    },
};

function scripts() {
    return (
        gulp
        .src(paths.scripts.src, {
            sourcemaps: false
        })
        //   .pipe(md({ html: true, breaks: true }))
        //   .pipe(name("mermaid.html"))
        // .pipe(babel())
        // .pipe(uglify())
        // .pipe(concat("index.min.js"))
        .pipe(gulp.dest(paths.scripts.dest))
    );
}

function reload(done) {
    browserSync.reload();
    done();
}

function serve(done) {
    browserSync.init({
        // server: {
        //   baseDir: "./",
        // },
        server: {
            baseDir: "./dist",
            directory: false,
            index: "mermaid2.html",
        },
        port: 3066,
    });
    done();
}

function www(done) {
    browserSync.init({
      server: {
        baseDir: "./html/",
        directory: false,
        index: "index.html",
      },
      port: 3567,
    //   snippetOptions: {
    //     rule: {
    //       match: /<head[^>]*>/i,
    //       fn: function (snippet, match) {
    //         console.log("snippetOptions==", snippet, match);
    //         return match + snippet;
    //       },
    //     },
    //   },
    });
    done();
}

function dbb(done) {
    browserSync.init({
        server: {
            baseDir: "/Users/46916597qq/Downloads/dbb_APP/",
            directory: true,
            index: "index2.html",
        },
        port: 3568,
    });
    done();
}

// const clean = () => del(["dist"]);

const watch = () => gulp.watch(paths.scripts.src, gulp.series(scripts, reload));
// const dev = gulp.series(clean, scripts, serve, watch);
// export default dev;

// gulp.task('default', gulp.parallel('mermaid', 'reload'));
// gulp.task("default", gulp.series(clean, scripts, serve, watch));
gulp.task("default", gulp.series(scripts, serve, watch));

gulp.task("www", gulp.series(www, watch));
gulp.task("dbb", gulp.series(dbb, watch));
