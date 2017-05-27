const gulp = require('gulp')
const util = require('gulp-util')

require('./gulpTasks')

gulp.task('default', function(){
    gulp.start('server')
   
})