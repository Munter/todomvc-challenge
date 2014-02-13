/*global app, Router */

(function (app, Router) {

	'use strict';

	var router = new Router();

	Object.keys(app.filters).forEach(function (filter) {
		router.on(filter, function () {
			app.setFilter(filter);
		});
	});

	router.init();
	
})(app, Router);