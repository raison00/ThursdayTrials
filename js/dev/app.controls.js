(function () { // :)
	'use strict';

	app.controls.templates.Header = Backbone.View.extend({
		el: '#ff-header',

		lastCategoryChosen: null,

		events: {
			'click #ff-header-categories li': 'categoryNavClick',
			'click #ff-header-logo-text': 'returnToHome',
			'click #ff-header-logo-image': 'returnToHome'
		},

		initialize: function () {
			/* Amazon gets no category list
			var $categoryNav = this.$el.find('#ff-header-categories');

			// build the category list
			app.collections.categories.each(function (category) {
				$categoryNav.append('<li data-category="' + category.get('name') + '">' + category.get('name') + '</li>');
			});*/
		},

		categoryNavClick: function (e) {
			var $this = $(e.currentTarget);
			var category = $this.attr('data-category');

			this.changeCategory(category);
		},

		changeCategory: function (category) {
			// show the new category
			app.registerActivePanel(app.panels.views['category_' + category]);
			// show the new category nav
			app.registerActiveFitNav(app.controls.views['categoryNav_' + category]);

			// store this category as the 'home' value
			this.lastCategoryChosen = category;

			// hide the style nav
			if (app.activeStyleNav !== null) {
				app.activeStyleNav.slideClosed();
				app.activeStyleNav.unrender({ closeWhenDone: true });
			}

			this.$el.find('li[data-category=' + category + ']').addClass('highlighted').siblings().removeClass('highlighted');
		},

		returnToHome: function () {
			if (this.lastCategoryChosen !== null) {
				app.controls.views.header.changeCategory(this.lastCategoryChosen);
			}
			else {
				app.controls.views.header.changeCategory('men');
			}
		}
	});

	/* Category Nav Template */
	app.controls.templates.CategoryNav = Backbone.View.extend({
		tagName: 'ul',

		className: 'ff-category-nav',

		template: _.template($('#ff-category-nav-template').html()),

		events: {
			'mouseover li': 'onMouseOver',
			'mouseout li': 'onMouseOut',
			'click li': 'fitClick'
		},

		initialize: function () {
			var childFits = app.collections.fits.where({ category: this.model.get('name') });

			// width logic:
			// available width = (app width - 1px margins between li's)
			var availableWidth = 768 - childFits.length + 1;
			// li width = round down: availableWidth / childFits
			var liWidth = Math.floor(availableWidth / childFits.length);
			// left over pixels will be added back one at a time until they're gone
			var leftOverWidth = availableWidth - (liWidth * childFits.length);

			this.$el.html(this.template({
				fits: childFits,
				liWidth: liWidth,
				leftOverWidth: leftOverWidth
			}));
			app.$el.append(this.$el);

			this.listenTo(app.events, 'category:mouseOver', this.highlightFit);
			this.listenTo(app.events, 'category:mouseOut', this.clearHighlight);
			this.listenTo(app.events, 'returnToFit', this.newActiveFit);

		},

		onMouseOver: function (e) {
			// note that CSS hover rule handles changing the color of this nav element
			// grab the target fit and create a trigger event
			var $target = $(e.currentTarget);
			var targetFit = $target.attr('data-fit');

			app.events.trigger('categoryNav:mouseOver', targetFit);
		},

		onMouseOut: function (e) {
			app.events.trigger('categoryNav:mouseOut');
		},

		highlightFit: function (targetFit) {
			this.$el.find('li[data-fit=' + targetFit + ']').addClass('highlight');
		},

		clearHighlight: function () {
			this.$el.find('li.highlight').removeClass('highlight');
		},

		fitClick: function (e) {
			var fitClicked = $(e.currentTarget).attr('data-fit');
			app.registerActivePanel(app.panels.views['fit_' + fitClicked]);
			// trigger an event that notifies we're going past the fit select screen
			app.events.trigger('fit:selected', fitClicked);
		},

		newActiveFit: function (targetFit) {
			// mark this fit active
			this.$el.find('li[data-fit=' + targetFit + ']').addClass('active').siblings('.active').removeClass('active');
			// show the new style nav
			app.registerActiveStyleNav(app.controls.views['styleNav_' + targetFit]);
		},

		clearActiveFit: function () {
			this.$el.find('li.active').removeClass('active');
		},

		render: function () {
			this.$el.addClass('active');
			TweenLite.to(this.$el, 0.6, { css: { autoAlpha: 1 } });
		},

		unrender: function () {
			this.$el.removeClass('active');
			TweenLite.to(this.$el, 0.6, { css: { autoAlpha: 0 } });

			this.clearActiveFit();
		}
	});

	/* Style Nav Template */
	app.controls.templates.StyleNav = Backbone.View.extend({
		tagName: 'div',

		className: 'ff-style-nav-wrapper',

		template: _.template($('#ff-style-nav-template').html()),

		events: {
			'mouseleave': 'mouseLeave',
			'mouseenter li': 'styleMouseEnter',
			'mouseleave li': 'styleMouseLeave',
			'click li': 'styleClick',
			'click .ff-style-nav-tab': 'toggleOpenOrClosed',
			'click .ff-style-left': 'styleScrollLeft',
			'click .ff-style-right': 'styleScrollRight'
		},

		closed: true,

		isBouncing: false,

		initialize: function () {
			var childStyles = app.collections.styles.where({ category: this.model.get('category'), fit: this.model.get('name') });

			var navMinWidth = 0;
			if (typeof this.model.get('styleNavMinWidth') !== typeof void 0) {
				navMinWidth = this.model.get('styleNavMinWidth');
			}

			this.$el.html(this.template({
				navMinWidth: navMinWidth,
				tabLeftPos: this.model.get('styleTabLeftPos'),
				styleNavTopGraphic: this.model.get('styleNavTopGraphic'),
				styles: childStyles
			}));

			// set custom left position for this nav
			this.$el.css({
				left: this.model.get('styleNavLeftPos')
			});

			app.$el.append(this.$el);
		},

		mouseLeave: function () {
			if (this.isBouncing !== true) {
				this.slideClosed();
			}
		},

		bounce: function () {
			app.activePanel.$el.addClass('pauseForStyleNav');

			this.isBouncing = true;

			this.render();

			this.slideOpen();

			setTimeout(_.bind(function () {
				this.slideClosed();

				this.isBouncing = false;

				app.activePanel.$el.removeClass('pauseForStyleNav');
			}, this), 2000);
		},

		toggleOpenOrClosed: function () {
			this.closed ? this.slideOpen() : this.slideClosed();
		},

		slideOpen: function () {
			var styleNavHeight = this.$el.outerHeight();
			var newBottomPos = 569 - styleNavHeight;

			this.closed = false;
			this.$el.find('.ff-style-nav').addClass('box-shadow');
			if(this.isBouncing === true) {TweenLite.to(this.$el,0.8,{css:
			{bottom:a},
				onComplete:_.bind(function() {
				/* scroll through first time */
				$(".ff-style-nav-style-list li:first").animate(
					{left: -500},
					{duration: 1000, 
						step: function( now, fx )
						{$(".ff-style-nav-style-list li:gt(0)" ).css( "left", now );},
						complete: function() {
							$(".ff-style-nav-style-list li").css("left", 0);
						}
						});
					})
				});
			} else {
			TweenLite.to(this.$el,0.8,{css:
					{bottom:a}
				});
			});
			// highlight the tab
			this.$el.addClass('open');

			// 'pause' overlay the rest of the app
			app.controls.views.pauseOverlay.render();

			app.events.trigger('navStyle:opening');
		},

		slideClosed: function () {
			if (this.closed === false) {
				this.closed = true;
				TweenLite.to(this.$el, 0.4, {
					css: { bottom: 547 },
					onComplete: _.bind(function () {
						this.$el.find('.ff-style-nav').removeClass('box-shadow');
					}, this)
				});

				// unhighlight the tab
				this.$el.removeClass('open');

				// 'unpause', clear overlay the rest of the app
				app.controls.views.pauseOverlay.unrender();

				app.events.trigger('navStyle:closing');
			}
		},

		// nav item click
		styleClick: function (e) {
			var $target = $(e.currentTarget);
			var targetCategory = $target.attr('data-category');
			var targetFit = $target.attr('data-fit');
			var targetStyle = $target.attr('data-style');
			var viewId = targetCategory + '_' + targetFit + '_' + targetStyle;

			// hide the style nav
			this.slideClosed();

			if (typeof app.panels.views['style_' + viewId] === typeof void 0) {
				// show the loading panel
				app.registerActivePanel(app.panels.views.loading);
				// load the new style, it hasn't been loaded yet
				// grab the model for the new style
				var styleModel = app.collections.styles.findWhere({
					category: targetCategory,
					fit: targetFit,
					name: targetStyle
				});
				// build out the new views and dom content
				app.createStyleContent(styleModel);
				// reset the loader
				app.panels.views.loading.reset();

				app.panels.views['style_' + viewId].$el.waitForImages({
					finished: function () {
						app.panels.views.loading.finishAnimation(function () {
							app.registerActivePanel(app.panels.views['style_' + viewId]);
						});
					},
					each: function (loaded, count) {
						var percentLoaded = Math.ceil(loaded / count * 100);

						app.panels.views.loading.updateProgress(percentLoaded);
					},
					waitForAll: true
				});
			}
			else {
				// panel is already loaded - just show it
				app.registerActivePanel(app.panels.views['style_' + viewId]);
			}
		},

		styleScrollLeft: function() {
			TweenLite.to(this.$el.find(".ff-style-nav-style-list li"), 0.5, {css: {left:0} });
			this.$el.find('.ff-style-right').removeClass('inactive');
			this.$el.find('.ff-style-left').addClass('inactive');
		},
		styleScrollRight: function() {
			TweenLite.to(this.$el.find(".ff-style-nav-style-list li"), 0.5, {css: {left:-720} });
			this.$el.find('.ff-style-left').removeClass('inactive');
			this.$el.find('.ff-style-right').addClass('inactive');
		},
		// nav and item hover effects
		styleMouseEnter: function (e) {
			var $target = $(e.currentTarget);
			$target.addClass('active');
		},

		styleMouseLeave: function (e) {
			var $target = $(e.currentTarget);

			$target.removeClass('active');
		},

		render: function () {
			this.$el.addClass('active');
			TweenLite.to(this.$el, 0.6, { css: { autoAlpha: 1 } });
		},

		unrender: function (options) {
			this.$el.removeClass('active');
			TweenLite.to(this.$el, 0.6, { css: { autoAlpha: 0 } });

			if (typeof options !== typeof void 0 && options.closeWhenDone === true) {
				this.slideClosed();
			}
		}
	});



	/* Pause Overlay Template */
	app.controls.templates.PauseOverlay = Backbone.View.extend({
		el: '#ff-pause-overlay',

		events: {
			'click': 'closeStyleNav'
		},

		initialize: function () {

		},

		closeStyleNav: function () {
			app.activeStyleNav.slideClosed();
		},

		render: function () {
			this.$el.addClass('active');
			TweenLite.to(this.$el, 0.45, { css: { alpha: 0.7 } });
		},

		unrender: function () {
			TweenLite.to(this.$el, 0.45, {
				css: { alpha: 0 },
				onComplete: _.bind(function () {
					this.$el.removeClass('active');
				}, this)
			});
		}
	});

})(); // :)