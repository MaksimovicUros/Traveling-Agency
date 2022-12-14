const gulp = require('gulp');
const sass = require('gulp-sass');
const consolidate = require('gulp-consolidate');
const iconfont = require('gulp-iconfont');
const postcss = require('gulp-postcss');
const gulpStylelint = require('gulp-stylelint');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();


//scss to css task
gulp.task('scss', ()=> {
	return gulp.src('src/scss/style.scss')
		.pipe(sass())
		.pipe(postcss([autoprefixer('last 2 versions')]))
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.stream());
});

//scss lint task
gulp.task('scss-lint', ()=> {
	return gulp.src('src/scss/*.scss')
		.pipe(gulpStylelint({
		reporters: [
			{
				formatter: 'string',
				console: true
			}
		]
	}));
});


//iconfont task
gulp.task('iconfont', ()=> {
	return gulp.src('src/svg/*.svg')
		.pipe(iconfont({
			fontName: 'iconfont',
			formats: ['woff', 'woff2'],
			appendCodepoints: true,
			appendUnicode: false,
			normalize: true,
			fontHeight: 1000,
			centerHorizontally: true
		}))
		.on('glyphs', function (glyphs, options) {
			gulp.src('src/iconfont-template/iconfont.scss')
				.pipe(consolidate('underscore', {
					glyphs: glyphs,
					fontName: options.fontName,
					fontDate: new Date().getTime()
				}))
				.pipe(gulp.dest('src/scss/icon-font'));
		})
		.pipe(gulp.dest('dist/fonts'));
});

// copy js files to dist
gulp.task('copy-js', ()=> {
	return gulp.src('src/js/*.js')
		.pipe(gulp.dest('dist/js'));
});

// copy html files to dist
gulp.task('copy-html', ()=> {
	return gulp.src('*.{html,ico}')
		.pipe(gulp.dest('dist'));
});

// copy font files to dist
gulp.task('copy-fonts', ()=> {
	return gulp.src('src/fonts/*.{ttf,woff,woff2,eof}')
		.pipe(gulp.dest('dist/fonts'));
});


// browser sync task
gulp.task('watch', ()=> {
	browserSync.init({
		server: {
			baseDir: "./dist"
		}
	});
	gulp.watch('src/**/*.scss', gulp.series('scss-lint', 'scss'));
	gulp.watch("*.html").on('change', browserSync.reload);
	gulp.watch("src/**/*.js").on('change', browserSync.reload);
});

//build project
// gulp.task('project-build', gulp.series('iconfont', 'copy-fonts', 'scss-lint', 'scss', 'copy-js', 'copy-html'));

//to run watch task type: gulp
gulp.task('default', gulp.series('watch'));

