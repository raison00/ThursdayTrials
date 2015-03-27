(function () { // :)
	'use strict';

	var AppView = Backbone.View.extend({
		el: '#dockers-ff-wrapper',

		panels: { templates: {}, views: {} },

		homePanel: null,

		lastActivePanel: null,

		activePanel: null,

		activeFitNav: null,

		activeStyleNav: null,

		events: _.extend({}, Backbone.Events),

		controls: { templates: {}, views: {} },

		models: { templates: {} },

		collections: {},

		model: null,
		initialize: function () {
			// wait for DOM and then create panel views
			$(function () {
				// misc / unique
				app.panels.views.loading = new app.panels.templates.Loading();
				app.registerActivePanel(app.panels.views.loading);
				app.controls.views.pauseOverlay = new app.controls.templates.PauseOverlay();
				app.controls.views.header = new app.controls.templates.Header();

				// category loop
				app.collections.categories.each(function (category) {
					var id = category.get('name')

					// create category navs
					app.controls.views['categoryNav_' + id] = new app.controls.templates.CategoryNav({ model: category });

					// create category panels
					app.panels.views['category_' + id] = new app.panels.templates.Category({ model: category });
				});

				// fit loop
				app.collections.fits.each(function (fit) {
					var id = fit.get('category') + '_' + fit.get('name');

					// create the style navs
					app.controls.views['styleNav_' + id] = new app.controls.templates.StyleNav({ model: fit });

					// create fit panels
					app.panels.views['fit_' + id] = new app.panels.templates.Fit({ model: fit });

					
				});

				// set up 'bounce' for first style nav reveal
				app.listenToOnce(app.events, 'fit:selected', function () {
					if (app.activeStyleNav !== null) {
						app.activeStyleNav.bounce();
					}
				});

				// run preloader logic
				/* Amazon has its own preloader
				app.$el.waitForImages({
					finished: function () {
						app.panels.views.loading.finishAnimation(function () {
							// start the app! men's category page is the home page
							app.controls.views.header.changeCategory('men');
							app.panels.views.loading.$el.removeClass('first-load');
						});
					},
					each: function (loaded, count) {
						var percentLoaded = Math.ceil(loaded / count * 100);

						app.panels.views.loading.updateProgress(percentLoaded);
					},
					waitForAll: true
				});*/
			});
		},

		createStyleContent: function (styleModel) {
			var id = styleModel.get('category') + '_' + styleModel.get('fit') + '_' + styleModel.get('name');

			// create the styleModel panels
			app.panels.views['style_' + id] = new app.panels.templates.Style({ model: styleModel });

			// create the detail panels
			app.panels.views['detail_' + id] = new app.panels.templates.Detail({ model: styleModel });
		},

		notifySpotlight: function (spotlightCode) {
			var cachebuster = +new Date(); // force cache miss
			var data = { '_': cachebuster };
			data[spotlightCode] = 1;
			var protocol = location.protocol == "https:" ? "https:" : "http:";
			var url = protocol + "//fls-na.amazon.com/1/softlines/1/OP/spotlighttestapp?" + jQuery.param(data);

			(new Image()).src = url;
		},

		registerActivePanel: function (newActivePanel) {
			if (typeof newActivePanel !== typeof void 0) {
				if (this.activePanel !== null) {
					this.activePanel.unrender();
				}

				this.lastActivePanel = this.activePanel;
				this.activePanel = newActivePanel;
				newActivePanel.render();
			}
		},

		registerActiveFitNav: function (newActiveFitNav) {
			if (typeof newActiveFitNav !== typeof void 0) {
				if (this.activeFitNav !== null) {
					this.activeFitNav.unrender();
				}

				this.activeFitNav = newActiveFitNav;
				newActiveFitNav.render();
			}
		},

		registerActiveStyleNav: function (newActiveStyleNav) {
			if (typeof newActiveStyleNav !== typeof void 0) {
				if (this.activeStyleNav !== null) {
					this.activeStyleNav.unrender({ closeWhenDone: true });
				}

				this.activeStyleNav = newActiveStyleNav;
				newActiveStyleNav.render();
			}
		}
	});

	window.app = new AppView();
})(); // :)