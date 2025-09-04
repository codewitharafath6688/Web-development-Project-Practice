// function arguments pass by reference pass by value and use argument in function

// All primitives values (number, boolean, string) are always pass by value

function add(num1, num2){
    num1 = num1 + 6;
    num2 = num2 + 5;
    return num1 + num2;
}

let a = 4 ;
let b = 5 ;

console.log('before fucntion calling',a,b);

console.log(add(a,b));

console.log('After fucntion calling',a,b);

// All non-primitive values(object, array) are passed by reference

function details(person1, person2){
    person1.balance = 0;
    person2.balance = person2.balance / 2;
    let total = person1.balance + person2.balance;
    return total;
}

let person1 = {name: 'Manik', balance: 4000};
let person2 = {name: 'Roton', balance: 10000};

console.log('Before calling', person1, person2);

console.log(details(person1, person2));

console.log('After calling', person1, person2);

// use argument in function

function numbers(num1,num2){
    console.log(arguments);  // catch all extra arguments
    console.log([...arguments]) // convert into array
}

numbers(56, 44, 59, 77);