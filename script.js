var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

var li_array = document.querySelectorAll('li');
var li_span = document.querySelectorAll('span');

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement('li');
	li.appendChild(document.createTextNode(''));
	ul.appendChild(li);

	var span = document.createElement('span');
	span.appendChild(document.createTextNode(input.value));
	span.addEventListener('click', toggleDone);


	li.appendChild(span);

	var boton = document.createElement('button');
	boton.appendChild(document.createTextNode('Eliminar'));
	boton.addEventListener('click', removeParent);

	boton.classList.add('li-btn');
	li.appendChild(boton);

	input.value = '';
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone() {
	this.classList.toggle('done');
}

function removeParent() {
	this.parentElement.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


for(var i=0; i< li_array.length; i++) {
	var boton = document.createElement('button');
	boton.appendChild(document.createTextNode('Eliminar'));
	boton.classList.add('li-btn');
	li_array[i].appendChild(boton);
	li_span[i].addEventListener('click', toggleDone);

	if (i===0) {
		var li_boton = document.getElementsByClassName('li-btn');
	}
	
	li_boton[i].addEventListener('click', removeParent);	
}