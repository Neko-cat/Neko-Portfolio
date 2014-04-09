$(document).ready(function(){

	$('#slide1').css('width', $(window).width());
	$('#slide1').css('height', $(window).height());
	$('#slide2').css('width', $(window).width());
	$('#slide2').css('height', $(window).height());
	$('#slide3').css('width', $(window).width());
	$('#slide3').css('height', $(window).height());

	$(window).resize(function() {
    	$("#test").text("Largeur du viewport = " + $(window).width() + "Hauteur du viewport = " + $(window).height() );
		$('#slide1').css('width', $(window).width());
		$('#slide1').css('height', $(window).height());
		$('#slide2').css('width', $(window).width());
		$('#slide2').css('height', $(window).height());
		$('#slide3').css('width', $(window).width());
		$('#slide3').css('height', $(window).height());
	});

		// bandelette opacity
	$('#bandelette').hover(function(){
		$('#opacity').fadeTo('slow', 0.8);
	}, function() {
		$('#opacity').fadeTo('slow', 0.6);
	});

		// link animation
	$('#design').hover(function(){
		$('#design>.rond').addClass('red');
	}, function(){
		$('#design>.rond').removeClass('red');
	});
	$('#code').hover(function(){
		$('#code>.rond').addClass('red');
	}, function(){
		$('#code>.rond').removeClass('red');
	});
	$('#photos').hover(function(){
		$('#photos>.rond').addClass('red');
	}, function(){
		$('#photos>.rond').removeClass('red');
	});

		// pixelart animation
	$('.pixel').mouseenter(function(){
		$(this).fadeTo('fast', 0.4);
	});
	$('.pixel').mouseleave(function(){
		$(this).fadeTo('fast', 1);
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
