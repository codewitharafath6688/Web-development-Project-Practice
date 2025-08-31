// includes => check element existence in array

let frnds =['Rakib', 'Karim', 'Rahim'];

let elementCheck = frnds.includes('Karim');

let elementCheck2 = frnds.includes('Kabir');

console.log(" "+elementCheck+" & "+elementCheck2);

// index0f => check the index number or, position of element in array

let elementPosition = frnds.indexOf('Karim');

let elementPosition2 = frnds.indexOf('Kabir');  // give negative ans mean no exits so, no position. (-1)

console.log(" "+elementPosition+" & "+elementPosition2);

// isArray => check the array existence 

let arrayCheck = Array.isArray(frnds);

console.log(arrayCheck);

let num = 43 ;

let arrayCheck2 = Array.isArray(num);

console.log(arrayCheck2);

// join => work as a separator (less important)

let nums = [66 , 45 , 44, 87, 99];

let joined = nums.join(" + "); // under this quotation give anything 

console.log(joined);  // remove 3rd bracket and show the element separately with your expected

// concat => adding separate arrays / strings

let arrayAddition = frnds.concat(nums);

console.log(arrayAddition);

// slice => cut and create new array

let arrayCut = nums.slice(2,4); // fist input index(2) about starting and 2nd input index(4) about end the programe before reached 2nd input index value

console.log(arrayCut);

// splice => add , cut or, replace element and create new array 

let numbers = [55, 88, 98, 67];

let arraySpliced = numbers.splice(1,1); // (start of index value,0 /1,new element) => 1 means remove or , replace depend on context and 0 means no remove

console.log(arraySpliced); // cut element

console.log(numbers); // new array (remove)

let arraySpliced2 = numbers.splice(3,0,99);

console.log(arraySpliced2); // add but output like []

console.log(numbers); // new array (add)

let arraySpliced3 = numbers.splice(2,1,60);

console.log(arraySpliced3); // replced element show like [67]

console.log(numbers); // new array (replace)