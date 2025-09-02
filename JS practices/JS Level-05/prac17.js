// Block scope global scope, simple understanding of Hoisting

// Global Scope → accessible everywhere. In this case var , let and const are global varriable but only var has a property of window.

let x = 10; // has not a property of window object
const y = 20; // has not a property of window object
var z = 30; // has a property of window object

function num(value1, value2, value3){
    return value1 , value2, value3;
}

console.log(num(x, y, z)); // output only gives you value of z

// Local Scope / function scope → accessible only inside a function.

function value(){
    let a1 = 20;
    console.log(a1);
}

value();

// console.log(a1); // ReferenceError => can not accessable from outside of the function

// Block Scope → let & const are block-scoped, var is not and if ,simple curly braces {}, for loop , while loop are also example of block scope. let or const inside that block are only accessible inside that block.

if(true){
    var a = 45;
    let b = 23;
    const x = 55;
}

console.log(a); // global scope
// console.log(b); // ReferenceError (block scope)
// console.log(c); // ReferenceError (block scope)

// Hoisting → declarations are moved to the top; var = undefined, let/const = TDZ, functions (declaration) = fully hoisted.

console.log(a2);

var a2 = 55; // hoisted but output value give undefined 
 
let b2 = 45; // ReferenceError => hoisted but before initilize can not be accessable => Temporal Dead Zone

let c3 =  57; // ReferenceError => hoisted but before initilize can not be accessable => Temporal Dead Zone

nm(20);

function nm(num){
    console.log('Hello')
}

// sayHi(); // ReferenceError: Cannot access 'sayHi' before initialization and not fully hoisted

let sayHi = function (num){  // function expression
    console.log('Hi')
}

// sayHello() // TypeError: sayHello is not a function and function expression is not fully hoisted

var sayHello =  function (num){
    console.log('Hello')
}