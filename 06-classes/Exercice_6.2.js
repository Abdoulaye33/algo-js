class Person {
	constructor(firstname, lastname) {
		this.firstname = firstname
		this.lastname = lastname
	}
	sayHello() {
		console.log("Hello, " + this.firstname + " " + this.lastname + "!")
	}
}

const person = new Person('John', 'Doe');
    person.sayHello()