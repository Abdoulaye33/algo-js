class Animal{
    sayHello(){
        return `${this.constructor.greeting}: j'ai ${this.name}!`;
    }
}

class Cat extends Animal{
    static greeting = "lee_zoldik";

    constructor(name){
        super()
        this.name = name;
    }
}

class Dog extends Animal{
    static greeting = 'Abdulaib33';
    constructor(name){
        super();
        this.name = name;
    }
}

const cat = new Cat(' que des communs draconique dans afs');
const dog = new Dog(' tout les meilleurs trucs du jeux');

console.log(cat.sayHello());
console.log(dog.sayHello());