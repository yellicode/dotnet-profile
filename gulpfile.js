var gulp = require('gulp');
 
gulp.task('publish-model', function () {
    gulp.src('./src/*.ymn')
        .pipe(gulp.dest('./dist/model'));
});