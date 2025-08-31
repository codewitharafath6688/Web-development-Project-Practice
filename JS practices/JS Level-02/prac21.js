// Find the cheapest phone from an array of phone objects

function cheapPhone(phones){
    let min = phones[0];
    for(let phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}

let phones = [
    {name: "iPhone", price: 112000, camera: '45 mp'},
    {name: "Sumsung", price: 30000, camera: '15 mp'},
    {name: "Walton", price: 16000, camera: '15 mp'},
    {name: "Symphony", price: 12000, camera: '5 mp'},
    {name: "Xiomi", price: 19000, camera: '15 mp'}
]

console.log(cheapPhone(phones));