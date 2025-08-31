// Object and Array Destructuring

// Object Destructuring:

let product = {prodcutName: 'Xiomi', model: 'A2 Lite', price: 17500};

let {prodcutName, model, price} = product;

console.log(prodcutName);
console.log(model);
console.log(price);
console.log(`${prodcutName}, ${model}, ${price}`);

let myObject = {objectName: 'Alpha', type: 'radiation'}

let {objectName} = myObject;

let {type} = myObject;

console.log(objectName);
console.log(type);
console.log(`${objectName} & ${type}`);

// Array Destructuring:

let numbers = [44, 56, 98];

let [num1 , num2] = numbers;

console.log(num1);
console.log(num2);
console.log(`${num1} & ${num2}`);