// js-problems-part1-practice-tasks

// Task-01: Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusTofahrenheit(tempValue) {
  let c = tempValue;
  let startingCal = (9 * c) / 5;
  let finalCal = startingCal + 32;
  return finalCal;
}

let cel = 28;

console.log(celsiusTofahrenheit(cel));

// Task-02: You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

function repeatCount(value) {
  let find = value;
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === find) {
      count++;
    } else {
      count;
    }
  }
  return count;
}

let numbers = [5, 6, 11, 12, 98, 5];

console.log(repeatCount(numbers[0]));

// Task-03: Write a function to count the number of vowels in a string.

function vowelsCount(checkValue){
    let count = 0;
    for(let i = 0 ; i < inputStr.length ; i++){
        if(inputStr.toLowerCase()[i] === checkValue){
            count++;
        }
    }
    return count;
}

let inputStr = "Arafath";

let check = 'a';

console.log(vowelsCount(check)); 

// Task-04: Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function longestWord(sent){
  let arrayConvert = sent.split(" ");
  let result = arrayConvert.sort(function (a,b) {return b.length - a.length})[0];
  return result;
}

let sent = "I am learning Programming to become a programmer";

console.log(longestWord(sent));

// Task-05: Generate a random number between 10 to 20.

function randNumbergen(min, max){
    return Math.floor(Math.random()*(max - min)) + min;
}

let min = 10;

let max = 20;

console.log(randNumbergen(min, max));