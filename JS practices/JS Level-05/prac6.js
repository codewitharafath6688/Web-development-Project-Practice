// Keys, values, entries, delete, seal, freeze

let product = {
    name: 'iPhone',
    model: 'XR',
    price: 120000
}

console.log(Object.entries(product)); //  output in array of array

let productKeys = Object.keys(product);

let productValues = Object.values(product);

console.log(productKeys); // output in array

console.log(productValues); // output in array

delete product.model; // remove any key or property from object

console.log(product);

product.version = 'new';

console.log(product); // new key or property added

// Object.freeze(product);

// delete product.name;

// product.level = 'good';

// console.log(product); // freeze() => can not add, remove, or change

Object.seal(product);

delete product.name;

product.level = 'good';

product.price = product.price + 40000; 

console.log(product); // seal() => can not add, remove but can modify

// freeze() & seal() calling both is unnecessary