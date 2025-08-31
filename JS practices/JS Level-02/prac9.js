// Sum of all numbers in an array using function

function sumOfAll(arrayNumbers){
    let sum = 0;
    for(let numbers of arrayNumbers){
        console.log(numbers);
        sum = sum + numbers;
    }
    return sum;
}

let numbersOfArray = [5, 7, 9, 11];

let sum = sumOfAll(numbersOfArray);

console.log("Sum of all given numbers is", sum);