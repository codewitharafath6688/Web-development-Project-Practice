// Array Techniques Explained (for loop, unshift, reverse method)

// for loop + push method

let numbers = [45, 89, 99, 121];

let resversed = [];

for (let i = numbers.length - 1; i >= 0 ; i--) {
  resversed.push(numbers[i]);
}
console.log(resversed);

// for loop + unshift method

let resversed1 = [];

for(let i = 0 ; i < numbers.length ; i++){
    resversed1.unshift(numbers[i]);
}

console.log(resversed1);

// for of loop + unshift method

let resversed2 = [];

for(let num of numbers){
    resversed2.unshift(num);
}
console.log(resversed)

// reverse method by resverse function

console.log(numbers.reverse());


