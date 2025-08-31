// Keys, Values, nested objects and delete

let product = {
    name : "BMW",
    price : 2600000,
    catogories : ['alpha', 'beta', 'gamma'],
    alpha : {
        price : 2000000,
        versions : {
            verValue : 1.1
        }
    }
}

console.log(Object.keys(product)); // key or property names

console.log(Object.values(product)); // key or property values

console.log(product.alpha.versions.verValue);  // nested object

product.alpha.versions.verValue = 2.1 ; // nested object property value changes

console.log(product['alpha'].versions.verValue); // nested object dot and 3rd bracket notation output => both are same

delete product.catogories; // delete or remove any property

console.log(product); // total output