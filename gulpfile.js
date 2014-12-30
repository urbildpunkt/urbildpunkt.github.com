var gulp        = require('gulp');
var harp        = require('harp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var deploy      = require('gulp-gh-pages');
var cp          = require('child_process');


/**
 * Serve the Harp Site from the src directory
 */
gulp.task('serve', function () {
  harp.server(__dirname, {
    port: 9000
  }, function () {
    browserSync({
      proxy: "localhost:9000",
      open: false,
      /* Hide the notification. It gets annoying */
      notify: {
        styles: ['opacity: 0', 'position: absolute']
      }
    });
    /**
     * Watch for scss changes, tell BrowserSync to refresh main.css
     */
    gulp.watch("*.sass", function () {
      reload("main.css", {stream: true});
    });
    /**
     * Watch for all other changes, reload the whole page
     */
    gulp.watch(["*.ejs"], function () {
      reload();
    });
  });
});

/**
* Build the Harp Site
*/
gulp.task('build', function (done) {
  cp.exec('harp compile . dist', {stdio: 'inherit'})
  .on('close', done);
});

/**
* Push build to master branch
*/
var options = {
  remoteUrl: "https://github.com/urbildpunkt/urbildpunkt.github.com.git",
  branch: "master"};
gulp.task('deploy', ['build'], function () {
  return gulp.src("./dist/**/*")
  .pipe(deploy(options));
});

/**
 * Default task, running `gulp` will fire up the Harp site,
 * launch BrowserSync & watch files.
 */
gulp.task('default', ['serve']);
