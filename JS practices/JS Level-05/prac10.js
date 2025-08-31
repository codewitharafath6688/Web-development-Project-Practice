// foreach, filter, find, and differences between them

let numbers = [11, 33, 67, 54];

numbers.forEach(x => console.log(x)); // result not return but work on all values

let cod1 = numbers.filter(x => x > 50); // condition apply in all values and output in array

console.log(cod1);

let cod2 = numbers.find(x => x > 50); // condition apply only first value

console.log(cod2);  