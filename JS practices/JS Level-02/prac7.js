// conditional return of odd and even

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let number1 = isEven(56);

let number2 = isEven(119);

console.log("Number1 is even is", number1);

console.log("Number2 is even is", number2);
