// Declare an array
// Problem-01: Declare an array with 5 elements containing fruits

let fruits = ['Banana', 'Orange', 'Malta', 'Mango', 'watermelon'];

// Problem-02: console log the 3rd index element

console.log(fruits[3]);

// Problem-03: change the value of the 2nd index element to jambura

fruits.splice(2,1,'Jambura');

// Problem-04: console log the final array

console.log(fruits);

// Add or remove elements
// Problem-01: Declare an array of 3 tourist destinations

let touristDes = ['Sonargaon', 'Sant-Martin', 'Cox-bazar'];

// Problem-02: Add a new tourist destination to your tourist array

touristDes.push('Raj-baria');

// Problem-03: Add two more to your array

touristDes.push('Hali-shohor', 'Mog-bazar');

console.log(touristDes);

// Problem-04: Remove the last tourist destination you have added

touristDes.pop();

// Problem-05: 

console.log(touristDes);

// Checking Array Membership with ‘includes’
// Problem-01: Create an array of books containing different book.

let books = ['English', 'Bangla', 'Chemistry', 'Physics'];

// Problem-02: Use the includes method to check if the array contains a javascript book.

let booksCheck = books.includes('Bangla');

// Problem-03: Print a message to the console indicating whether the element is present in the array or not.

console.log(booksCheck);

// Checking if it's an Array
// Problem-01: Create different variables, each containing either an array or a non-array value.

let numbers = [67, 45, 44, 21, 88];

let number = "[]" ;

// Problem-02: Now use isArray to check if each variable is an array.

let arrayCheck = Array.isArray(numbers);

let arrayCheck2 = Array.isArray(number);

// Problem-03: Print a message to the console indicating whether each variable is an array or not.

console.log(" "+"Array Check-01",arrayCheck+" & "+"Array Check-02",arrayCheck2+" ");

// Combining Arrays
// Problem-01: Create two arrays of your choice.

let numbers1 = [33, 43, 22, 88];

let numbers2 = [33, 80, 41, 99];

// Problem-02: Use the concat method to combine the two arrays into a new array.

let arrayAddition = numbers1.concat(numbers2);

// Problem-03: Print both the original arrays and the combined array using console.log().

console.log(numbers1);

console.log(numbers2);

console.log(arrayAddition);