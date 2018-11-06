var gulp = require('gulp');
// required ruby & sass

var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('default', function () {
    // place code for your default task here
    browserSync({
        server: {
            baseDir: 'src'
        },
        ui: {
            port: 8081
        }
    });

    gulp.watch(['*.html'], {
        cwd: 'src'
    }, reload);
 
});
