(function () { // =D
	'use strict';

	var Categories = Backbone.Collection.extend({
		model: app.models.templates.Category
	});
	app.collections.categories = new Categories();

	var Fits = Backbone.Collection.extend({
		model: app.models.templates.Fit
	});
	app.collections.fits = new Fits();

	var Styles = Backbone.Collection.extend({
		model: app.models.templates.Style
	});
	app.collections.styles = new Styles();

})(); // o.O