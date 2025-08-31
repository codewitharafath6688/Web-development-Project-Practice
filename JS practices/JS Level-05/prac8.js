// Access Value, nested object, Optional chaining, Dot notation vs bracket notation

let product = {
    name: 'iPhone',
    model: {            
        m1: 'XR',
        m2: 'RR',
        m3: 'IRX'
    },
    price: 160000,
    1: 10,
    'type': 'mobile'
}

// Dot notation

console.log(product.price);  

// console.log(product.1)  => not working

// console.log(product.'type')  => not working

// Bracket Notation

console.log(product['price']);

console.log(product['1']);

console.log(product['type']);

// Access Value & nested object

console.log(product.model.m2);

// Optional chaining

 console.log(product.version?.v2); // output in undefined (if no existence of object)