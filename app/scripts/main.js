/*
*	First things first make the scroll go left.
*/
$(function() {
	'use strict';
	$('body, html').mousewheel(function(event, delta) {
		this.scrollLeft -= (delta * 60);
		event.preventDefault();
	});
});

$(document).ready(function(){
	'use strict';
	// Help properly set the body width value.
	var numberOfSlides	= 3;
	// Slides Width in px
	var minwidth		= 800;
	var minheight		= 600;

	/*
	* 	Set viewport width and height to each slide.
	*	Set the min width of each slide to 800px
	* 		Yep that's dirty jQuery
	*/
	if ($(window).width() >= minwidth || $(window).height() >= minheight ) {
		$('#slide1').css('width', $(window).width());
		$('#slide1').css('height', $(window).height());
		$('#slide2').css('width', $(window).width());
		$('#slide2').css('height', $(window).height());
		$('#slide3').css('width', $(window).width());
		$('#slide3').css('height', $(window).height());
		$('body').css('width', $(window).width() * numberOfSlides);
	} else {
		$('#slide1').css('width', minwidth);
		$('#slide1').css('height', minheight);
		$('#slide2').css('width', minwidth);
		$('#slide2').css('height', minheight);
		$('#slide3').css('width', minwidth);
		$('#slide3').css('height', minheight);
		$('body').css('width', minwidth * numberOfSlides);
	}
		// Do the same on window resize
	$(window).resize(function() {
		if ($(window).width() >= minwidth ) {
			$('#slide1').css('width', $(window).width());
			$('#slide1').css('height', $(window).height());
			$('#slide2').css('width', $(window).width());
			$('#slide2').css('height', $(window).height());
			$('#slide3').css('width', $(window).width());
			$('#slide3').css('height', $(window).height());
			$('body').css('width', $(window).width() * numberOfSlides);
		} else {
			$('#slide1').css('width', minwidth);
			$('#slide1').css('height', minheight);
			$('#slide2').css('width', minwidth);
			$('#slide2').css('height', minheight);
			$('#slide3').css('width', minwidth);
			$('#slide3').css('height', minheight);
			$('body').css('width', minwidth * numberOfSlides);
		}
	});

	/*
	*	Bandelette
	*/

	// Bandelette opacity
	$('#bandelette').hover(function(){
		$('#opacity').stop().fadeTo('slow', 0.8);
	}, function() {
		$('#opacity').stop().fadeTo('slow', 0.6);
	});

	//	Bandelette Link
	$('#bandelette li').hover(function(){
		$(this).children('.rond').addClass('rond-hover');
	}, function(){
		$(this).children('.rond').removeClass('rond-hover');
	});

	//	Bandelette onload
	$('#opacity').css('margin-top', -$('#opacity').height() + 'px' );
	$('#opacity').animate({
		marginTop: 0
	}, 2000, 'easeOutCirc', function() {
		$('#menu').fadeIn(1000);
	});

	// Bandelette pixel art
	$('.pixel').mouseenter(function(){
		$(this).fadeTo('fast', 0.4);
	});
	$('.pixel').mouseleave(function(){
		$(this).fadeTo('fast', 1);
	});

	// Animation on bandelette and item menu
	$('#menu a').click(function(){
		$('html, body').animate({
			scrollLeft: $($(this).attr('href')).offset().left
		});
		hash($(this).attr('href'));
	});
	$('#bandelette li').click(function(){
		$('html, body').animate({
			scrollLeft: $($(this).children('a').attr('href')).offset().left
		});
	});

	/*
	*	ScrollSpy :
	*	When a slide is active, it will magicaly turn to darblue. Hopefuly...
	*/

	var slides = [];
	var id = null;
	var scrolledId = null;

	$('#menu a').each(function(){
		slides.push($($(this).attr('href')));
	});

	$(window).scroll(function() {

		var scrollLeft = $(this).scrollLeft() + ($(window).width() / 2);
		for(var i in slides) {
			var slide = slides[i];
			if (scrollLeft > slide.offset().left) {
				scrolledId = slide.attr('id');
			}
		}
		if (scrolledId !== id) {
			id = scrolledId;
			$('#menu li a').removeClass('current');
			$('#menu li a[href="#' + scrolledId +'"]').addClass('current');
		}
	});

});
	// body background slideshow
$.backstretch([
	'images/bg.jpg',
	'images/cat.jpg'
], {
	fade: 2000,
	duration: 5000
});