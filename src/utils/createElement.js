define([
	'config/svg',
	'config/namespaces'
], function (
	svg,
	namespaces
) {

	'use strict';

	// Test for SVG support
	if ( !svg ) {
		return function ( type, ns ) {
			if ( ns && ns !== namespaces.html ) {
				throw 'This browser does not support namespaces other than http://www.w3.org/1999/xhtml. The most likely cause of this error is that you\'re trying to render SVG in an older browser. See https://github.com/RactiveJS/Ractive/wiki/SVG-and-older-browsers for more information';
			}

			return document.createElement( type );
		};
	} else {
		return function ( type, ns ) {
			if ( !ns ) {
				return document.createElement( type );
			}

			return document.createElementNS( ns, type );
		};
	}

});