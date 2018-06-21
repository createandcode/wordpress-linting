/** @format */

const gulp = require( 'gulp' );

gulp.task( 'fix-css', function fixCssTask() {
	const gulpStylelint = require( 'gulp-stylelint' );

	var paths = [
		'assets/css/**/*.css',
		'style_prelinting.css',
		'style.css'
	];

	return gulp

		//.src( 'assets/css/**/*.css' )
		.src( paths, {base: './'} )

		.pipe(
			gulpStylelint( {
				failAfterError: false,
				fix: true
			} )
		)
		.pipe( gulp.dest( './' ) );

} );
