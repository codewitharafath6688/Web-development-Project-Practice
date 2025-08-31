// Array map to do one-line loop magic

// map method is-  variable.map(callback function) => {code excuation step}

// map() => work on all values and return the result

let numbers = [1, 2, 3, 4];

let numberDouble = numbers.map( x => x * 2);

let squareNumbers = numbers.map( x => x ** 2);

console.log(numberDouble);

console.log(squareNumbers);

let frnds = ['Alam', 'Zahid', 'Kader', 'Rahim'];

let firstLetter = frnds.map(name => name[0]);

let firstLetterSmall = frnds.map(name => name[0].toLocaleLowerCase());

let nameLength = frnds.map(name => name.length);

console.log(firstLetter);

console.log(firstLetterSmall);

console.log(nameLength);

let pattern = [2, 4, 5, 8];

let newPattern = pattern.map((num, index) => num * index);

console.log(newPattern);