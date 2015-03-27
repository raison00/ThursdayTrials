(function () { // =D
	'use strict';

	/* Category model */
	app.models.templates.Category = Backbone.Model.extend({
		defaults: {
			name: null
		}
	});

	/* Fit model */
	app.models.templates.Fit = Backbone.Model.extend({
		defaults: {
			name: null,
			category: null,
			heading: null,
			description: null,
			fitPoints: [
				{
					animationDirection: null,
					contentText: null,
					width: null,
					position: {
						left: null,
						top: null
					}
				}
			]
		}
	});

	/* Style model */
	app.models.templates.Style = Backbone.Model.extend({
		defaults: {
			name: null,
			category: null,
			fit: null,
			styleNavName: null,
			heading: null,
			description: null,
			extraText: null
		}
	});


})(); // o.O