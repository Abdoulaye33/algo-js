class Person {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}
	
	get name() {
		return this.firstname + " " + this.lastname;
	}
	
	set name(newName) {
		const [firstName, lastName] = newName.split(' ');
		this.firstname = firstName;
		this.lastname = lastName;
	}
}

let person = new Person('John', 'Smith');
console.log(person.name);

person.name = 'Jane Smith';
console.log(person.name);