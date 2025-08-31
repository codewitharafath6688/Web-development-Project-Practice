// Copy array elements to another array

// changes => ok (price)

let price = 500;

let com_price = price;

price = 600;

console.log('Price', price); 

console.log('Com_price', com_price);

// changes => ok (com_price)

com_price = 899;

console.log('Com_price', com_price);

// chnages => no (examMarks) => both changes together

let examMarks = [54, 77, 98];

let com_examMarks = examMarks;

examMarks[2] = 45;

console.log(examMarks);

console.log(com_examMarks);

// fixed by for loop + push method (another exmaple)

let numbers = [56, 78, 99];

let com_numbers = [];

for(let num of numbers){
    com_numbers.push(num);
}

com_numbers[0] = 39;

console.log(numbers);

console.log(com_numbers);

// fixed by "..." spread operator (another exmaple)

let finalMarks = [66, 98, 34];

let com_finalMarks = [...finalMarks];

finalMarks[1] = 67;

com_finalMarks[2] = 95;

console.log(finalMarks);

console.log(com_finalMarks);

//without fixing , same reference but together changes
//by fixing, same reference but seprate changes or, one can be changed and one is constant