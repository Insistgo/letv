//1. 通过require()导入所需插件
		var  gulp = require('gulp');
		var uglify = require('gulp-uglify');
		var concat = require('gulp-concat');
		var sass = require('gulp-sass');
		var cssnano = require('gulp-cssnano');
		var rename = require('gulp-rename');
		var babel = require("gulp-babel");
//2. 发布任务
		gulp.task('js',function(){
			gulp.src('./src/js/index.js')
			.pipe(babel({
				'presets': ['@babel/env']	
			}))
			//.pipe(concat())
			.pipe(uglify())
			.pipe(rename('index.min.js'))
			.pipe(gulp.dest('./dist/js'))
		})
		gulp.task('sass',function(){
			gulp.src('./src/sass/index.scss')
			.pipe(sass())
			.pipe(cssnano())
			.pipe(rename({"suffix" : ".min"}))
			.pipe(gulp.dest('./dist/css'))
		})
		gulp.task('default',function(){
			gulp.watch('./src/js/*.js',['js'])
		})
		gulp.task('default',function(){
			gulp.watch('./src/sass/*.scss',['sass'])
		})