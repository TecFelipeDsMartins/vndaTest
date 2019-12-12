var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
const { watch, series } = require('gulp');

var styleSRC = './src/scss/style.scss';
var styleDIST = './dist/css/';
var styleWatch = './src/scss/**/*.scss';


function compiler (cb){
    
    gulp.src( styleWatch )
        .pipe( sass({
            errorLogToConsole: true,
        }))
        .on( 'error', console.error.bind( console ))
        .pipe( rename( { suffix: '.min'}))
        .pipe( gulp.dest( styleDIST ));

    cb();    
    
};

exports.default = function() {
    
    gulp.watch( styleWatch, compiler);
  
    //watch('src/*.js', series());
  };


