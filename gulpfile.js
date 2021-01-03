const gulp = require("gulp")
const babel = require("gulp-babel")
const autoprefixer = require("autoprefixer")
const postcss = require("gulp-postcss")
const uglify = require("gulp-uglify")
const cssnano = require("gulp-cssnano")
const imageMin = require("gulp-imagemin")

gulp.task("babel",function(){
    gulp.src("./unprocessed/main.js")
        .pipe(babel({
            presets : ["@babel/env"]
        }))
        .pipe(uglify())
        .pipe(gulp.dest("./assets/scripts/"))
})


// files will be converted to css using prepos and put in the unprocessed folder for this fxn to carry out
gulp.task("prefix", async function(){
    plugins = [
        autoprefixer()
    ]
   return gulp.src("./unprocessed/default.css")
        .pipe(postcss(plugins))
            .pipe(cssnano())
            .pipe(gulp.dest("./assets/css/"))
})

gulp.task("imagemin", function(){
    gulp.src("./unprocessed/*.png")
    .pipe(imageMin())
    .pipe(gulp.dest("./assets"))
})

gulp.task('watch', async function(){
    gulp.watch("./unprocessed/main.js", gulp.series("babel"))
    gulp.watch("./unprocessed/default.css", gulp.series("prefix"))
})

//  git commit -m " i added gulp to my build up: succeded in converting es6 codes using gulp-babel,adding autoprefix for css, minifying css, jvs and images using gulp plugins"

// Npte that i converted scss with prepose software, because gulp-sass dont concat imported filess like _customAos.scss 0r i dont know how, this is my first time using gulp
// run gulp name to run function on the command line 
//  make sure gulp is installed globally and locally