// string vs array
// array

let frnds = ['Amir', 'Kabir', 'Fahim', 'Zahir'];

console.log(frnds.length);

console.log(frnds[3]);

frnds[3] = 'Zahid' ;

console.log(frnds) // changed => Array is mutable

// string

let myName = new String('Ahsaan') ;

console.log(myName);

let myName2 = 'Jahid' ; 

console.log(myName2.length); // In string , length count blank space also

console.log(myName2[0]);  // also count blank space

myName2[0] = 'M' ;

console.log(myName2); // No changes => String is immutable