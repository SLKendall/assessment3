function favColor(evt) {
	evt.preventDefault();
	
	alert("My favorite color is orange!");

}


let color = document.querySelector('#color');

color.addEventListener('click', favColor);

function favPlace(evt) {
	evt.preventDefault();
	
	alert("My favorite place is with my friends!");

}


let place = document.querySelector('#place');

place.addEventListener('click', favPlace);

function favRitual(evt) {
	evt.preventDefault();
	
	alert("My favorite ritual is brewing pour-over coffee!");

}


let ritual = document.querySelector('#ritual');

ritual.addEventListener('click', favRitual);