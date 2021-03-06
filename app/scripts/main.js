$(function() {
	'use strict';
	$('body, html').mousewheel(function(event, delta)
	{
	/*
	*	First things first make the scroll go left.
	*/
		var deltaPage = (delta * 80);
		this.scrollLeft -= deltaPage;

	/*
	*	Paralaxed element.
	*/

	// Make Slide1 background position move according to the scroll 
	var deltaBgSlideOne = (delta * 2);
	var $bgPosSlideOne = $('#slide1').css('background-position');
	var splitedBgPosSlideOne = ($bgPosSlideOne).split('%');
	if (splitedBgPosSlideOne[0] < 0) {
		$('#slide1').css('background-position', '0% 50%');
	} else {
		$('#slide1').css('background-position', (splitedBgPosSlideOne[0] - deltaBgSlideOne) + '% 50%');

	};

		event.preventDefault();
	});

});

$(document).ready(function(){
	'use strict';
	// Help properly set the body width value.
	var numberOfSlides	= 4;
	// Slides Width in px
	var minwidth		= 800;
	var minheight		= 600;

	/*
	* 	Set viewport width and height to each slide.
	*	Set the min width of each slide to 800px
	* 		Yep that's dirty jQuery
	*/
	if ($(window).width() >= minwidth) {
		$('#slide1').css({'width': $(window).width(), 'height': $(window).height()});
		$('#slide2').css({'width': $(window).width(), 'height': $(window).height()});
		$('#slide3').css({'width': $(window).width(), 'height': $(window).height()});
		$('#slide4').css({'width': $(window).width(), 'height': $(window).height()});
		$('body').css('width', $(window).width() * numberOfSlides);
	} else {
		$('#slide1').css({'width': minwidth, 'height': $(window).height()});
		$('#slide2').css({'width': minwidth, 'height': $(window).height()});
		$('#slide3').css({'width': minwidth, 'height': $(window).height()});
		$('#slide4').css({'width': minwidth, 'height': $(window).height()});
		$('body').css('width', minwidth * numberOfSlides);
	}
		// Do the same on window resize
	$(window).resize(function() {
		if ($(window).width() >= minwidth ) {
		$('#slide1').css({'width': $(window).width(), 'height': $(window).height()});
		$('#slide2').css({'width': $(window).width(), 'height': $(window).height()});
		$('#slide3').css({'width': $(window).width(), 'height': $(window).height()});
		$('#slide4').css({'width': $(window).width(), 'height': $(window).height()});
			$('body').css('width', $(window).width() * numberOfSlides);
		} else {
		$('#slide1').css({'width': minwidth, 'height': $(window).height()});
		$('#slide2').css({'width': minwidth, 'height': $(window).height()});
		$('#slide3').css({'width': minwidth, 'height': $(window).height()});
		$('#slide4').css({'width': minwidth, 'height': $(window).height()});
			$('body').css('width', minwidth * numberOfSlides);
		}
	});

	/*
	*	Bandelette
	*/

	//	Bandelette onload
	$('#opacity').css('margin-top', -$('#opacity').height() + 'px' );
	$('#opacity').animate({
		marginTop: 0
	}, 2000, 'easeOutCirc', function() {
		// Loading Menu
		$('#menu').fadeIn(1000);
		
			// Charging bandelette animation at the end of the "onload" animation to prenvent it from stopping in the middle of the page.
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
		// hash($(this).attr('href'));
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

	$(window).mousewheel(function() {

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
			hash('#' +scrolledId);
		}
	});

	/*
	*	Text when hovering an image
	*/
	$('.box').hover(function(){
		$(this).children().stop().fadeTo(1000, 1);
	}, function(){
		$(this).children().stop().fadeTo(1000, 0);
	});

	/*
	*	Fancybox
	*	https://github.com/fancyapps/fancyBox
	*/

	// Fancybox photography slide
	$('.photography').fancybox({
		beforeShow : function() {
			// Disable right click
			$.fancybox.wrap.bind('contextemenu',function(e){ return false; });
		},
		afterLoad : function() {
			this.title = '<a href="' + this.href +'">Télécharger </a>' + this.title;
		},
		// Animation effect ('elastic', 'fade' or 'none')
		openEffect	: 'fade',
		closeEffect : 'fade',
		prevEffect	: 'fade',
		nextEffect	: 'fade',
		// Time it takes to complete the transition
		openSpeed	: '5000',
		closeSpeed	: '5000',
		nextSpeed	: '5000',
		prevSpeed	: '5000', 
		// Easing method for each transition type : Default value: 'swing'
		openEasing	: 'swing',
		closeEasing	: 'swing',
		nextEasing	: 'swing',
		prevEasing	: 'swing',
		// Make borderless
		padding 	: 0,
		// Make navigation outside the content area
		// margin : [20, 60, 20, 60],
		helpers 	: {
			// 'float', 'inside', 'outside' or 'over'
			title	: {
				type : 'float'
			},
			overlay : {
				css : {
					'background' : 'rgba(0, 0, 0, 0.8)'
				}
			}
		}
	});

	// Fancybox PAO slide
	$('.pao').fancybox({
		beforeShow : function() {
			// Disable right click
			$.fancybox.wrap.bind('contextemenu',function(e){ return false; });
		},
		afterLoad : function() {
			this.title = '<a href="' + this.href +'">Télécharger </a>' + this.title;
		},
		// Animation effect ('elastic', 'fade' or 'none')
		openEffect	: 'fade',
		closeEffect : 'fade',
		prevEffect	: 'fade',
		nextEffect	: 'fade',
		// Time it takes to complete the transition
		openSpeed	: '5000',
		closeSpeed	: '5000',
		nextSpeed	: '5000',
		prevSpeed	: '5000', 
		// Easing method for each transition type : Default value: 'swing'
		openEasing	: 'swing',
		closeEasing	: 'swing',
		nextEasing	: 'swing',
		prevEasing	: 'swing',
		// Make borderless
		padding 	: 0,
		// Make navigation outside the content area
		// margin : [20, 60, 20, 60],
		helpers 	: {
			// 'float', 'inside', 'outside' or 'over'
			title	: {
				type : 'float'
			},
			overlay : {
				css : {
					'background' : 'rgba(0, 0, 0, 0.8)'
				}
			}
		}
	});


	/*
	*	"Backstreched" elements
	*/
	// $('#slide1').backstretch([
	// 	'images/BG/bg1.png',
	// 	'images/BG/bg2.jpg'
	// ], {fade: 2000, duration: 5000});
	
});