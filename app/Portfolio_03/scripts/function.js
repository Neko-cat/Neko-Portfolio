function getPointerPosition(e) {
	var valX = document.getElementById("valX");
	var valY = document.getElementById("valY");
	
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