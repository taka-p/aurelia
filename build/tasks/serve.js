var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:1234
//gulp.task('serve', ['build'], function(done) {
//  browserSync({
//    online: false,
//    open: false,
//    port: 1234,
//    server: {
//      baseDir: ['.'],
//      middleware: function(req, res, next) {
//        res.setHeader('Access-Control-Allow-Origin', '*');
//        next();
//      }
//    }
//  }, done);
//});

gulp.task('browsersync', ['build'], function(done) {
  browserSync({
    online: false,
    open: false,
    port: 1234,
    proxy: 'http://localhost:5678'
  }, done);
});

gulp.task('serve', ['browsersync'], function(done) {
  nodemon({
    script: 'server.babel.js',
    ext: 'js html css',
    ignore: [
      'node_modules',
      'build',
      'dist',
      'src',
      'public',
      'test'
    ],
    stdout: false // 標準出力を自動バイパスしない
  }).on('readable', function() {

    // 標準出力を監視して再起動が完了したら reload()
    this.stdout.on('data', function(chunk) {
      if (/^listening http on port/.test(chunk)) {
        browserSync.reload({ stream: false })
      }
      process.stdout.write(chunk); // 出力
    });

    this.stderr.on('data', function(chunk) {
      process.stderr.write(chunk);
    });

    done();

  });
});

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:1234
gulp.task('serve-bundle', ['bundle'], function(done) {
  browserSync({
    online: false,
    open: false,
    port: 1234,
    server: {
      baseDir: ['.'],
      middleware: function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
});

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:1234
gulp.task('serve-export', ['export'], function(done) {
  browserSync({
    online: false,
    open: false,
    port: 1234,
    server: {
      baseDir: ['./export'],
      middleware: function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
});
