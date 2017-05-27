const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

gulp.task('server', ['watch'], function(){
    gulp.src('public').pipe(webserver({
        livereload: true,
        port: 3000,
        open: true
    }))

})


gulp.task('watch', function(){
    watch('public/*.html', () => gulp.start('index.html'))
})