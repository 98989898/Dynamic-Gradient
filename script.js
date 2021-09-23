var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.querySelector("body");
var description = document.querySelector("h3");
var button = document.querySelector("button");

// Match color inputs and background. Display initial linear gradient.
color1.value = "#451d5f";
color2.value = "#5c964d";
body.style.background = "linear-gradient(to right,rgb(69,29,95),rgb(92,150,77))";
description.textContent =  body.style.background;

// Add event listeners.
color1.addEventListener("input", updateColor);
color2.addEventListener("input", updateColor);
button.addEventListener("click", randomColors);

function updateColor() {
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
	description.textContent = body.style.background;
}

function randomColors() {
	randColor1 = "#" +  Math.floor(Math.random()*0x1000000).toString(16);
	randColor2 = "#" + Math.floor(Math.random()*0x1000000).toString(16);
	body.style.background = "linear-gradient(to right, " + randColor1 + ", " + randColor2 + ")";
	color1.value = randColor1;
	color2.value = randColor2;
	description.textContent = body.style.background;
}
