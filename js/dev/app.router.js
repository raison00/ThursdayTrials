(function() {
	'use strict';

	var Router = Backbone.Router.extend({
		routes: {
		'fitpage': 'fit-panel',
      	'stylepage': 'style-panel'
		},
	});

	fitpage: function () {
      var view = new app.Views.Home();
      app.instance.goto(view);
    },

    stylepage: function () {
      var view = new app.Views.Style();
      app.instance.goto(view);
    }

	$(function () {
		app.router = new Router();
		Backbone.history.start();
	});
})();