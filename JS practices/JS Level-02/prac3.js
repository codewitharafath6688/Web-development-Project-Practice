// Array of Objects and Array of Array

// Array of Objects and Access Object inside an Array

let products = [
    {name : 'Xaiomi A1' , deviceType : 'Smart Phone', price : 26000},
    {name : 'Xaiomi A2' , deviceType : 'Smart Phone', price : 29000},
    {name : 'Xaiomi A2 lite' , deviceType : 'Smart Phone', price : 22000}
]

console.log(products);

for(let prod of products){
    console.log(prod.price);
}

console.log(products[1].deviceType);

// Array of Array and Access Array inside an Array
// Array of Array => 2D Array or, like a matrix

let examMarks = [
    [67, 78, 89 ,97],
    [66, 45, 52, 89],
    [66, 64, 23, 99]
]

console.log(examMarks);

console.log(examMarks[2]);

console.log(examMarks[2][3]);  // In matrix , 2nd row & 3rd column

for(let marks of examMarks){
    console.log(marks);
}

let changes = examMarks[1][2] = 66;

console.log(examMarks);