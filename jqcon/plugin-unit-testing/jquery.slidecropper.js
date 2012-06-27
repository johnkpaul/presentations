(function( $ ) {
	var constrainBoundaries = function(el) {
		var pos = el.position();
		var parentHeight = el.parent().height();
		var parentWidth= el.parent().width();

		if(pos.top > 0) {
			el.css("top",0);
		} else if(pos.top < -1*(el.height()- parentHeight)) {
			el.css("top",-1*(el.height()-parentHeight));
		}
		if(pos.left> 0) {
			el.css("left",0);
		} else if(pos.left < -1 *(el.width()- parentWidth)) {
			el.css("left", -1 * (el.width()-parentWidth));
		}

	};
	var calculateCrop = function(el) {
		var pos = el.position();
		var parentHeight = el.parent().height();
		var parentWidth= el.parent().width();
		var cropBoundary = {
			"x1":-1 * pos.left,
			"y1":-1 * pos.top,
			"x2":(-1 * pos.left)+parentWidth,
			"y2":(-1 * pos.top)+parentHeight,
		}

		el.data("crop", cropBoundary);
	};
	var stopDragHandler = function(event, ui) {
		var el = $(this);
		constrainBoundaries(el);
		calculateCrop(el);
	};
	
	$.fn.slideCropper= function(options) {
		var settings = {
			"position":"relative",
			"border":"1px dotted black",
			"overflow":"hidden",
			"cursor":"pointer",
			"height":"200px",
			"width":"200px"
		};
		return this.each( function(index, element) {

			if ( options ) {
				$.extend( settings, options );
			}

			var $element = $(element);
			if(!$element.is("img")) {
				throw new Error("slide cropper can only be used on images");
			}
			$element.wrap("<div/>").draggable({
				"stop":stopDragHandler
			});
			$element.parent().css(settings);
		});
	}
})( jQuery );
