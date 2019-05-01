var gulp = require('gulp');
var awspublish = require('gulp-awspublish');
var merge = require('merge-stream');
var rename = require('gulp-rename');
var argv = require('yargs').argv;

gulp.task('publish:storybook', function() {
  if (!argv.bucket) {
    throw Error('Please pass a --bucket arugment of the target S3 Bucket');
  }

  var publisher = awspublish.create({
    region: process.env.S3_REGION,
    params: {
      Bucket: argv.bucket
    }
  });

  var prefixDir = function(path) {
    path.dirname = argv.dirprefix + path.dirname;
  };

  var gzipFilter = [
    '.out/**/*.js',
    '.out/**/*.html',
    '.out/**/*.css',
    '.out/**/*.ico',
    '.out/**/*.json'
  ];
  var negativeFilter = gzipFilter.map(function(x) {
    return '!' + x;
  });

  var plain = gulp
    .src(['.out/**/*'].concat(negativeFilter))
    .pipe(rename(prefixDir));
  var gzip = gulp
    .src(gzipFilter)
    .pipe(rename(prefixDir))
    .pipe(awspublish.gzip());

  return merge(gzip, plain)
    .pipe(publisher.publish())
    .pipe(publisher.sync())
    .pipe(awspublish.reporter());
});
