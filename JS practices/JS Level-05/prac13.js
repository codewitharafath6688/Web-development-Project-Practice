// Inheritance, prototypical inheritance

// Inheritance => parent object -> child object

// prototypical inheritance => chain system

class Animal {   // parent
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} is eating meat`);
    }
}

class Dog extends Animal {  // child caught parent
    constructor(breed, name, age){
        super(name, age);  // parent parameter contact
        this.breed = breed;
    }

    bark(){
        console.log(`${this.name} sound like barking`);
    }
}

class Cat extends Animal {  // child caught parent
    constructor(type, name, age) {
        super(name, age);  // parent parameter contact
        this.type = type;
    }

    meow(){
        console.log(`${this.name} sound like meowing`);
    }
}

let dog = new Dog('normal', 'dog', 1.5);

dog.eat();

dog.bark();

console.log(dog);

let cat = new Cat('mix-breed', 'cat', 1.2);

cat.eat();

cat.meow();

console.log(cat);