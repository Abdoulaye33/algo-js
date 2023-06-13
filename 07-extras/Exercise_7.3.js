const readlineSync = require("readline-sync")

console.log("Hello! Welcome to the Pizza Flavors Manager.")
console.log("\n")
console.log("Please choose your actions:")
let exit = false, value
let menu = []

function printMenu() {
	console.log("\n")
	console.log("1 - List all the pizza flavors")
	console.log("2 - Add a new pizza flavor")
	console.log("3 - Remove a pizza flavor")
	console.log("4 - Exit this program")
	console.log("\n")
}

function printFlavor(menu) {
	if (menu.length != 0) {
		for (let i = 0; i < menu.length; i++) {
			console.log((i + 1) + " - " + menu[i])
		}
	} else console.log("\nNo pizza!\n")
}

while (!exit) {
	printMenu()
	let value = parseInt(readlineSync.question("Enter your action's number: "))
	while (value < 0 && value > 4) {
		value = parseInt(readlineSync.question("Enter your action's number: "))
	}
	
	if (value === 1) {
		printFlavor(menu)
	} else if (value === 2) {
		value = readlineSync.question("New flavor: ")
		menu.push(value)
		printFlavor(menu)
	} else if (value === 3) {
		value = parseInt(readlineSync.question("Number of the flavor to delete: "))
		menu.splice((value - 1), 1)
		printFlavor(menu)
	} else {
		exit = !exit;
	}
}
console.log("You leave the program!")