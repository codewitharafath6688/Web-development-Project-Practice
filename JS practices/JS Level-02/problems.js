// array-looping-tasks

// Task-01: Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

const reversed = [];

for(const col of colors){
    reversed.unshift(col);
}

console.log(reversed);

// Task-02: Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// Output:

// [12, 98, 76, 46]

const numbers = [12, 98, 5, 41, 23, 78, 46];

const evenNumbers = [];

numbers[5] = 76;

for(const num of numbers){
    if(num % 2 === 0){
        evenNumbers.push(num);
    }
}

console.log(evenNumbers);

// Task-03: Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers1 = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'

var numbers1 = ['Tom', 'Tim', 'Tin', 'Tik'];

var changes;

for(var nums of numbers1){
    changes = numbers1.join('');
}

console.log(changes);

// Task-04: Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

const statement = 'I am a hard working person'; 

const changed = statement.split(' ');

const reversed1 = [];

for(const st of changed){
    reversed1.unshift(st);
}

console.log(reversed1.join(' '));

// Task-05: Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

// Input: [1, 2, 3]

// Expected Output:

// Original: [1, 2, 3] Copy: [99, 2, 3]

let original = [1, 2, 3];

let copy = [...original];

copy[0] = 99;

console.log(original);

console.log(copy);

// Task-06: Given an array of student objects, print each student’s name and marks.

// [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ]
// Expected ooutput:
// John scored 85
// Alice scored 90

let student = [
    {name: "John", marks: 85},
    {name: "Alice", marks: 90}
]

for(let std of student){
    console.log(std.name + " " + "scored" + " " + std.marks);
}

// Task-07: Given a 2D array, update the value at second row first item to 99 and print the updated array.

// input:

// [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]
// Expected Array:

// [
//   [1, 2],
//   [99, 4],
//   [5, 6]
// ]

let matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
]

matrix[1][0] = 99;

console.log(matrix);