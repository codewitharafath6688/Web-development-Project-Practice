// Swap variable, swap without temp, destructing

// swap with temp or, anyVar

let a = 5;

let b = 7;

let temp = a;

a = b;

b = temp;

console.log("After swaping , a is", a, "&", "b is", b);

// swap without temp or, any Ver => swap with destructing

let num1 = 3;

let num2 = 8;

[num1, num2] = [num2, num1];

console.log("After swaping , num1 is", num1, "&", "num2 is", num2);

// different data type case

let name = "Arafath";

let number = 25;

[name, number] = [number, name];

console.log("After swaping , name is", name, "&", "number is", number) // data changes but not data types chnages happen in this case