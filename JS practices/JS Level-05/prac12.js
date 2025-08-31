// Introduction to Class and objects

// Person => object

// class is a template for making objects

// constructor() don't need to call . it can alyeady called by default when you create the object

// without constructor() if you add new other method like sepcial function => need to call 

class Person {
    constructor(name, age, mobileNumber) {
        this.name = name;
        this.age = age;
        this.mobileNumber = mobileNumber;
    }

    goal(aim){
        this.aim = aim;
    }
}

let person1 = new Person('Arafath', 24, 18668389910); // constructor() already called by default

person1.goal('Doctor'); // method like special funtion called

let person2 = new Person('Nazafi', 25, 18778379912); // constructor() already called by default

person2.goal('Engineer'); // method like special funtion called

console.log(person1);

console.log(person1 instanceof Person); // object source is ok or not and output in boolen

console.log(person2);

console.log(person2 instanceof Person); // object source is ok or not and output in boolen