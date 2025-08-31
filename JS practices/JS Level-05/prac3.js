// More Arrow functions and arrow functions =>

// without parameter

let num = () => console.log(78);

console.log(num()); // when you do console log => 1st function call output is 78 from enternal console log and 2nd ouput give you undefined cuz no paramter set up in function

num(); // only provide enternal console log input

// single parameter

let numberDouble = num => num*2 ; // in single parameter need not () parenthesis

console.log(numberDouble(22));

// In DOM

// document.getElementById('call id name').addEventListener('click', () => {
//      code excuation step...
// })

// document.getElementById('call id name').addEventListener('click', event => {
//     code excuation step...
// })