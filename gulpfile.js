/**
 * Created by Administrator on 2017/4/24.
 */
/*用于注册任务*/

/*载入gulp模块*/
var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');

//注册一个任务
gulp.task('copy',function(){
//    获取文件
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist/'))
});

/*监视*/
gulp.task('dist',function(){
    gulp.watch('src/index.html', ['copy']);
    gulp.watch('src/style/*.less', ['style']);
});

/*less转化为css*/
gulp.task('style',function(){
   gulp.src('src/style/*.less')
       .pipe(less())     //转化为css文件;
       .pipe(cssnano())  //压缩
       .pipe(gulp.dest('dist/css/'))
});


var browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

