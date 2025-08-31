// Array in Ascending & Descending Order (Manual & sort() method)

// for string type in array

let frnds = ['Abid', 'Cyan', 'Bayazid', 'Dorid'];

frnds.sort(); // alphabetically order

console.log(frnds);

// for number type in array

let numebrs = [3, 6, 9, 5];

numebrs.sort(); // normal order follow in single digit of number

console.log(numebrs);

let numebrs1 = [2, 5, 10, 100, 1, 9];

numebrs1.sort(); // in this , only first number of digit and then see another number to compare and sort it

console.log(numebrs1);

numebrs1.sort(function (a,b) {return a - b}); //normal order follow and Ascending order

console.log(numebrs1);

numebrs1.sort(function (a,b) {return b - a}); //normal order follow and Descending

console.log(numebrs1);

// Ascending => smaller to bigger
// Descending => bigger to smaller