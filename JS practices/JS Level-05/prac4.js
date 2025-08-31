// Spread operator, array max, copy arrays

// spread operator & array max

let numbers = [56, 44, 21, 100, 21, 222, 1, 55];

console.log(...numbers); // spread all numbers using spread operator (...)

let maxNumber = Math.max(...numbers);

console.log(maxNumber);

// copy arrays

let a = [45, 77, 98];

let b = [...a]; // copy and paste 1st array numbers and use spraed operator & if 'b' changed but 'a' is not changed => spraed operator

b.push(99);

console.log(a);

console.log(b);

// use spraed operator in object

let person = {
     name: 'Rahim',
     phoneNumber: 18668389910
}

let employee = {idNumber: 5661, ...person} // add details using spraed operator

console.log(employee);