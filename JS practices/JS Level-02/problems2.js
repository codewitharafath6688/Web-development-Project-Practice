// Simple function Related Practice Tasks

//Task-01: Take four parameters. Multiply the four numbers and then return the result

function mult(num1, num2, num3, num4) {
  let multification = num1 * num2 * num3 * num4;
  return multification;
}

let numbersOfMult = mult(4, 10, 5, 40);

console.log("Multification of your enter numbers is", numbersOfMult);

// Task-02: Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function oddOrEven(num) {
  if (num % 2 !== 0) {
    let result = num * 2;
    return result;
  } else {
    let result = num / 2;
    return result;
  }
}

console.log(oddOrEven(34));

// Task-03: Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers) {
  let sum = 0;
  let result;
  for (let num of numbers) {
    sum = sum + num;
  }
  result = sum / numbers.length;
  return result;
}

let arrayNum = [3, 4, 6, 5];

let avg = make_avg(arrayNum);

console.log(avg);

// Task-04: Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") {
      count += 1;
    }
  }
  return count;
}

let strBinary = "100100010";

console.log(count_zero(strBinary));

// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd.

function odd_even(number){
    if(number % 2 === 0){
        let ans = "Even";
        return ans;
    } else{
        let ans = "Odd";
        return ans;
    }
}

let nUm = 62;

console.log(odd_even(nUm));