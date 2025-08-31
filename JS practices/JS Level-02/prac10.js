// Return all the even numbers of an array and their sum

function isEvene(arrayNumbers) {
  let newArray = [];
  for (let numbers of arrayNumbers) {
    if (numbers % 2 === 0) {
      newArray.push(numbers);
    }

  }
  return newArray;
}

let num = [34, 2, 66, 77, 97, 75, 12];


let evenNumbers = isEvene(num);

function addOfEvene(evenNumbers){
    let sum = 0;
    for(let evens of evenNumbers){
        sum = sum + evens;
    }
    return sum;
}

let sumOfeven = addOfEvene(evenNumbers);

console.log("All even numbers array is", evenNumbers);

console.log("Sum of even numbers is", sumOfeven);