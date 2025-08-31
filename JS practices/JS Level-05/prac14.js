// Encapsulation & this keyword

// this use normally => give window function

console.log(this); // output => {}

// this use in normal fucntion => window (non-strict), undefined (strict)

function thisShow(){
    console.log(this);
}
thisShow(); // output in window (non-strict), undefined (strict)

// this use in object under fucntion => refer the value of object key where use 'this

let thisObj = {
    name: 'Karim',

    greet: function (){
        console.log(this.name);
    }
}

thisObj.greet();

// this use in arrow fucntion => window object

num = () => {
    console.log(this)
}

num();

// this use in object under arrow fucntion => undefined

let myObj = {
    name: 'rahim',
    greet1: () => {
        console.log(this.name);
    }
}

myObj.greet1();

// this use in class => refer the object

class Pobg {
    constructor(name){
        this.name = name;
    }

    getThis(){
        console.log(this.name);
    }
}

let pobj = new Pobg('Karim');

console.log(pobj);

// Encapsulation: (private)

class Person {
    #tin
    constructor(name) {
        this.name = name;
        this.#tin = '12TDU8821'
    }

    getTin(){
        return this.#tin;
    }

}

let person = new Person('Arafath');

person.getTin(); // private => only use inside

console.log(person);