console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form submitted successfully");

}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function duckCompliment(evt) {
	evt.preventDefault();
	
	alert("The Duck says you have impeccable taste in music!");

}


let duck = document.querySelector('#duck');

duck.addEventListener('mouseover', duckCompliment);

