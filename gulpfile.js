//Importando

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

 //compilar e mimificar o arquivo sass

function compilaSass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle:'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}

// comprimindo imagens com gulp-min

function comprimeImagens(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

//usando uglify para comprimir o Js

function comprimeJavaScript(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))

}

//gulp.watch/exportando -  rodar automático tarefa em series

exports.default = function(){
    gulp.watch('./source/styles/*.scss',{ignoreInitial: false},gulp.series(compilaSass));
    gulp.watch('./source/styles/*.scss',{ignoreInitial: false},gulp.series(comprimeJavaScript));
    gulp.watch('./source/styles/*.scss',{ignoreInitial: false},gulp.series(comprimeImagens));
}

