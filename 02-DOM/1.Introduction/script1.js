const title = document.querySelector("title").innerHTML = "Modifying the DOM";

const body = document.querySelector("body");

for (const element of body.children) {
	
}
console.log(body)
body.style.backgroundColor = "rgb(" + randomNum(0, 255) + ", " + randomNum(0, 255) + ", " + randomNum(0, 255) + ")"

console.log(body.style.backgroundColor)

function randomNum(min, max) {
	return parseInt(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min))
}