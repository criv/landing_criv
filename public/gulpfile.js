const gulp = require('gulp')
const util = require('gulp-util')

require('./gulp/server')

gulp.task('default', function(){
    gulp.start('server')
   
})