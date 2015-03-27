(function () { // ^_^
	'use strict';

	/* Panel View Template */
	var PanelView = Backbone.View.extend({
		render: function () {
			this.$el.addClass('active');
			TweenLite.to(this.$el, 0.6, { css: { autoAlpha: 1 } });

			return this;
		},

		unrender: function () {
			this.$el.removeClass('active');
			TweenLite.to(this.$el, 0.6, { css: { autoAlpha: 0 } });

			return this;
		}
	});


	/* Category Template */
	// instantiate by passing in model
	app.panels.templates.Category = PanelView.extend({
		tagName: 'ul',

		className: 'ff-panel ff-panel-category',

		template: _.template($('#ff-category-template').html()),

		events: {
			'mouseenter li': 'onMouseEnter',
			'mouseleave li': 'onMouseLeave',
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

			this.listenTo(app.events, 'categoryNav:mouseOver', this.highlightFit);
			this.listenTo(app.events, 'categoryNav:mouseOut', this.clearHighlight);
		},

		render: function () {
			// spotlight tracking
			var spotlightCode = 'ff_' + this.model.get('name');
			app.notifySpotlight(spotlightCode);

			return PanelView.prototype.render.call(this);
		},

		// nav and item hover effects
		onMouseEnter: function (e) {
			var $target = $(e.currentTarget);
			var targetFit = $target.attr('data-fit');

			app.events.trigger('category:mouseOver', targetFit);

			this.highlightFit(targetFit);
		},

		onMouseLeave: function (e) {
			app.events.trigger('category:mouseOut');

			this.clearHighlight();
		},

		highlightFit: function (targetFit) {
			// add overlay opacity to all the other fit images
			var $overlay = this.$el.find('li:not([data-fit=' + targetFit + ']) .ff-fit-overlay');
			TweenLite.to($overlay, 0.4, { css: { autoAlpha: 0.8 } });
		},

		clearHighlight: function () {
			// clear overlays
			TweenLite.to(this.$el.find('.ff-fit-overlay'), 0.4, { css: { autoAlpha: 0 } });
		},

		fitClick: function (e) {
			var fitClicked = $(e.currentTarget).attr('data-fit');
			app.registerActivePanel(app.panels.views['fit_' + fitClicked]);
			// trigger an event that notifies we're going past the fit select screen
			app.events.trigger('fit:selected', fitClicked);
		}
	});
	
	
	/* Fit Panel Template */
	app.panels.templates.Fit = PanelView.extend({
		tagName: 'div',

		className: 'ff-panel ff-panel-fit',

		template: _.template($('#ff-fit-template').html()),

		events: {
			'click .ff-fit-shop-button': 'shopBtnClick',
			'click .ff-fit-scroll-style': 'styleScrollClick'
		},

		controls: [],

		$fitPoints: null,

		initialize: function () {
			
			this.$el.html(this.template(this.model.toJSON()));

			app.$el.append(this.$el);

			// cache fit points
			this.$fitPoints = this.$el.find('.ff-fit-point');

		},

		render: function () {
			TweenLite.set(this.$fitPoints, { css: { alpha: 0 } });
			TweenLite.set(this.$el.find('.ff-fit-info-wrapper'), { css: { autoAlpha: 0 } });

			/* after a small delay animate in the fitpoints
			setTimeout(_.bind(function () {
				if (this.$el.hasClass('pauseForStyleNav')) {
					this.listenToOnce(app.events, 'navStyle:closing', _.partial(this.renderAnimation, 0.5));
				}
				else {
					this.renderAnimation();
				}
			}, this), 500);
			*/
			// notify spotlight
			var spotlightCode = 'ff_' + this.model.get('category') + '_' + this.model.get('name');
			app.notifySpotlight(spotlightCode);

			return PanelView.prototype.render.call(this);
		},

		// nav item click
		styleScrollClick: function () {
			var childFitStyles = app.collections.styles.where({ category: this.model.get('category'), fit: this.model.get('name') });
			foo = _.size(childFitStyles);
			firstStyle = childFitStyles[0];
			var targetCategory = firstStyle.get("category");
			var targetFit = firstStyle.get("fit");
			var targetStyle = firstStyle.get("name");
			var viewId = targetCategory + '_' + targetFit + '_' + targetStyle;
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

		shopBtnClick: function () {
			if (typeof this.model.get('shopUrl') !== typeof void 0) {
				window.parent.location.href = this.model.get('shopUrl');
			}
		},

		renderAnimation: function (delayStart) {
			if (typeof delayStart === typeof void 0) {
				delayStart = 0;
			}

			// animate in info details
			TweenLite.to(this.$el.find('.ff-fit-info-wrapper'), 0.6, {
				css: { autoAlpha: 1 },
				delay: delayStart,
				onComplete: _.bind(function () {
					// animate in fit points
					this.$fitPoints.each(function () {
						var $fitPoint = $(this);
						var fitPointWidth = $fitPoint.width();
						var fitPointHeight = $fitPoint.find('> div').outerHeight();
						var fitPointLeft = $fitPoint.position().left;

						$fitPoint.css({ width: 0, height: 0, opacity: 1 });

						if ($fitPoint.hasClass('animate-from-left')) {
							TweenLite.to($fitPoint, 0.4, {
								css: { width: fitPointWidth },
								onComplete: function () {
									TweenLite.to($fitPoint, .25, {
										css: { height: fitPointHeight }
									});
								}
							});
						}
						else {
							$fitPoint.css({ left: fitPointLeft + fitPointWidth });

							TweenLite.to($fitPoint, 0.4, {
								css: {
									width: fitPointWidth,
									left: fitPointLeft
								},
								onComplete: function () {
									TweenLite.to($fitPoint, .25, {
										css: { height: fitPointHeight }
									});
								}
							});
						}
					});
				}, this)
			})
		},

		unrender: function () {
			this.$el.removeClass('pauseForStyleNav');

			return PanelView.prototype.unrender.call(this);
		}
	});


	/* Style Panel Template */
	app.panels.templates.Style = PanelView.extend({
		tagName: 'div',

		className: 'ff-panel ff-panel-style',

		template: _.template($('#ff-style-template').html()),

		events: {
			'click .ff-style-view-thumbs li': 'onThumbClick',
			'click .ff-style-detail-button': 'onDetailClick',
			'click .ff-style-shop-button': 'onShopClick',
			'click .ff-fit-scroll-style': 'styleScrollClick'
		},

		controls: [],

		initialize: function () {
			this.$el.html(this.template(this.model.toJSON()));

			app.$el.append(this.$el);
		},

		render: function () {
			// spotlight tracking
			var spotlightCode = 'ff_' + this.model.get('category') + '_' + this.model.get('fit') + '_' + this.model.get('name');
			app.notifySpotlight(spotlightCode);

			var $thumbs = this.$el.find('.ff-style-view-thumbs li');
			var $firstThumb = $thumbs.eq(0);

			if ($firstThumb.hasClass('active') === false) {
				// hide the active background and reset the thumbs to the first option
				var $backgrounds = this.$el.find('.ff-style-background');
				TweenLite.set($backgrounds.slice(1), { css: { autoAlpha: 0 } });
				$firstThumb.addClass('active');
				$thumbs.slice(1).removeClass('active');
			}

			// make first background visible
			TweenLite.set(this.$el.find('.ff-style-background').eq(0), { css: { autoAlpha: 1 } });

			return PanelView.prototype.render.call(this);
		},
		styleScrollClick: function () {
			var siblingStyles = app.collections.styles.where({ category: this.model.get('category'), fit: this.model.get('name') });
			nextStyle = siblingStyles[styleindex];
			var targetCategory = nextStyle.get("category");
			var targetFit = nextStyle.get("fit");
			var targetStyle = nextStyle.get("name");
			var viewId = targetCategory + '_' + targetFit + '_' + targetStyle;
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
				styleindex++;
			}
			else {
				// panel is already loaded - just show it
				app.registerActivePanel(app.panels.views['style_' + viewId]);
			}
		},
		onThumbClick: function (e) {
			var $target = $(e.currentTarget)
			var newBackgroundIndex = $target.index();
			var $backgrounds = this.$el.find('.ff-style-background');

			// highlight this thumbnail
			$target.addClass('active').siblings('.active').removeClass('active');

			// hide old background
			TweenLite.to($backgrounds, 0.6, { css: { autoAlpha: 0 } });
			// show new background
			TweenLite.to($backgrounds.eq(newBackgroundIndex), 0.6, { css: { autoAlpha: 1 } });

			// spotlight tracking
			var spotlightCode = 'ff_' + this.model.get('category') + '_' + this.model.get('fit') + '_' + this.model.get('name') + '_alt';
			app.notifySpotlight(spotlightCode);
		},

		onDetailClick: function (e) {
			var targetStyle = this.model.get('category') + '_' + this.model.get('fit') + '_' + this.model.get('name');

			app.registerActivePanel(app.panels.views['detail_' + targetStyle]);

			return PanelView.prototype.unrender.call(this);
		},

		onShopClick: function () {
			if (typeof this.model.get('shopUrl') !== typeof void 0) {
				window.parent.location.href = this.model.get('shopUrl');
			}
		}
	});

	/* Detail Panel Template */
	app.panels.templates.Detail = PanelView.extend({
		tagName: 'div',

		className: 'ff-panel-detail ff-panel',

		template: _.template($('#ff-style-detail-template').html()),

		events: {
			'click .ff-details-arrows': 'onArrowClick',
			'click .ff-details-close-x': 'onCloseXClick',
			'click .ff-detail-shop-btn': 'onShopClick'
		},

		controls: [],

		initialize: function () {
			this.$el.html(this.template(this.model.toJSON()));

			app.$el.append(this.$el);
		},

		render: function () {
			// make first image visible
			TweenLite.set(this.$el.find('.ff-detail-content-background.active'), { css: { autoAlpha: 1 } });

			// spotlight tracking
			var spotlightCode = 'ff_' + this.model.get('category') + '_' + this.model.get('fit') + '_' + this.model.get('name') + '_det';
			app.notifySpotlight(spotlightCode);

			return PanelView.prototype.render.call(this);
		},

		unrender: function () {
			var $backgrounds = this.$el.find('.ff-detail-content-background');
			var $firstBackground = $backgrounds.eq(0);

			if ($firstBackground.hasClass('active') === false) {
				// need to reset back to the first background
				var $activeBackground = $backgrounds.filter('.active');
				$activeBackground.removeClass('active');
				TweenLite.set($activeBackground, { css: { autoAlpha: 0 } });

				$firstBackground.addClass('active');

				// hide left arrow, show right arrow
				this.$el.find('.ff-details-left-arrow').hide();
				this.$el.find('.ff-details-right-arrow').show()
			}

			return PanelView.prototype.unrender.call(this);
		},

		onCloseXClick: function () {
			app.registerActivePanel(app.lastActivePanel);
		},

		onArrowClick: function (e) {
			var $this = $(e.currentTarget);
			var $oldView = this.$el.find('.ff-detail-content-background.active');
			var $newView = null;
			var direction = $this.attr('data-direction');

			if (direction === 'left') {
				$newView = $oldView.prev('.ff-detail-content-background');
			}
			else {
				$newView = $oldView.next('.ff-detail-content-background');
			}

			// make sure there's a next or previous to swap
			if ($newView.length > 0 && $oldView.is($newView) === false) {
				// hide/show arrows if there's more children to transition to
				var $leftArrow = this.$el.find('.ff-details-left-arrow');
				var $rightArrow = this.$el.find('.ff-details-right-arrow');

				if ($newView.prev('.ff-detail-content-background').length === 0) {
					$leftArrow.hide();
				} else {
					$leftArrow.show();
				}

				if ($newView.next('.ff-detail-content-background').length === 0) {
					$rightArrow.hide();
				}
				else {
					$rightArrow.show();
				}

				$oldView.removeClass('active');
				TweenLite.to($oldView, 0.4, { css: { autoAlpha: 0 } });
				$newView.addClass('active');
				TweenLite.to($newView, 0.4, { css: { autoAlpha: 1 } });

				// spotlight tracking
				var spotlightCode = 'ff_' + this.model.get('category') + '_' + this.model.get('fit') + '_' + this.model.get('name') + '_det';
				app.notifySpotlight(spotlightCode);
			}
		},

		onShopClick: function () {
			if (typeof this.model.get('shopUrl') !== typeof void 0) {
				window.parent.location.href = this.model.get('shopUrl');
			}
		}
	});


	/* Loading Panel Template */
	app.panels.templates.Loading = PanelView.extend({
		el: '#ff-panel-loading',

		$progressBar: null,

		events: {
		},

		initialize: function () {
			this.$progressBar = this.$el.find('.ff-loading-progress-bar');
		},

		reset: function () {
			this.$progressBar.css({
				width: '0%',
				height: '4px',
				top: '50%',
				marginTop: '-2px'
			});
		},

		updateProgress: function (percent) {
			TweenLite.to(this.$progressBar, 0.35, {
				css: { width: percent + '%' }
			});
		},

		finishAnimation: function (callback) {
			TweenLite.to(this.$progressBar, 0.4, {
				css: {
					height: '100%',
					top: '0%',
					marginTop: 0
				},
				delay: 0.5,
				onComplete: callback
			});
		}
	});

})(); // :D