<?php
/**
 * Lint me demo.
 *
 * @package createandcode-linting
 */

$foo = 'something';
echo esc_html( $foo );

/**
 * Lint me demo.
 *
 * @param String $something does something.
 */
function bar( $something ) {
	$do_something = $something;
	if ( '7' === $do_something ) {
		echo 'looks like it is a 7!';
	} else {
		echo 'definitely not a 7';
	}
}
