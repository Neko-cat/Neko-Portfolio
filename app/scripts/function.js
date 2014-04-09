hash = function(h) {
	'use strict';
	if (history.pushState) {
		history.pushState(null, null, h);
	} else {
		location.hash = h;
	}
};

function getPointerPosition(e) {
	'use strict';
	var valX = document.getElementById('valX');
	var valY = document.getElementById('valY');
	
	var tempX = 0;
	var tempY = 0;

	tempX = e.pageX;
	tempY = e.pageY;

	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}

	valX.innerHTML = tempX;
	valY.innerHTML = tempY;

	// Envoie vers server

	/*
	* Set timout -> valX, valY
	*/

	return true;
}