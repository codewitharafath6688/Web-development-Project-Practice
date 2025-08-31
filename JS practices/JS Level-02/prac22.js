// Calculate the total cost of the products in a shopping cart

function productTotalCost(products){
    let sum = 0;
    for(let phone of phones){
        sum = sum + (phone.price * phone.quantity);
    }
    return sum;
}

let phones = [
    {name: "Symphony", price: 9500, quantity: 2},
    {name: "Sumsung", price: 25000, quantity:4},
    {name: "Walton", price: 16000, quantity:3},
    {name: "Iphone", price: 112000, quantity:11},
    {name: "Oppo", price: 30000, quantity:1}
]

console.log(productTotalCost(phones));