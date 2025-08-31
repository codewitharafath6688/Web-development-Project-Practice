// Object Task
//Problem-01: Access the golden rod color value in output.

const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": "#daa520",
};

console.log(colors["golden rod"]);

//Problem-02: For this object below add a property named passenger capacity with value 5

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};

car["passenger"] = 5;

console.log(car);

//Problem-03: Display the physics marks as output.

const student = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
    subject: "HSC Physics",
    author: "Shahjahan Tapan",
    marks: 30,
  },
};

console.log(student.physics.marks);

//Problem-04: Count the number of properties.

let std = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};

let elementCount = Object.keys(std).length; // property count in object

console.log(elementCount);

//Problem-05: Loop through an object and print the key-value pairs with their types:

// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean

let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

for (let elements in myObject) {
  console.log(
    "key:" + " " + elements + " | " + "type:" + " " + typeof myObject[elements]
  );
}

// String Task
//Problem-01: Count how many times a string has the letter "a"

let nam = "Mannah";

let count = 0;

for (let i = 0; i < nam.toLowerCase().length; i++) {
  if (nam.toLowerCase()[i] === "a") {
    count = count + 1;
  }
}

console.log(count);

//Problem-02: Count how many times a string has the letter a or A

let personName = "Arshaada";

let letterCount1 = 0;

let letterCount2 = 0;

for (let i = 0; i < personName.length; i++) {
  if (personName[i] === "A") {
    letterCount1 = letterCount1 + 1;
  } else if (personName[i] === "a") {
    letterCount2 = letterCount2 + 1;
  }
}

console.log("A used", letterCount1 + " " + "times");
console.log("a used", letterCount2 + " " + "times");

//Problem-03: Check whether a string contains all the vowels a, e, i, o, u

let fullName = "Arafath Siddique";

if (
  fullName.toLowerCase().includes("a") &&
  fullName.toLowerCase().includes("e") &&
  fullName.toLowerCase().includes("i") &&
  fullName.toLowerCase().includes("o") &&
  fullName.toLowerCase().includes("u")
) {
  console.log("All vowels are contain");
} else {
  console.log("All vowels are not contain");
}

//Problem-04: If a given string has either x, replace x by y. if the given string has X, replace it by Y.

let words = "x-man";

if(words.includes('x')){
  let changes = words.replace('x','y');   //replace() function => changes in string
  console.log(changes);
} else if(words.includes('X')){
  let changes = words.replace('X','Y');
  console.log(changes);
}

// or,

if(words.includes('x')){
  let arrayConvert = words.split('');  // string convert into array
  arrayConvert.splice(0,1,'y')         // replace 0 index letter
  console.log(arrayConvert.join(""));  // array convert into string
} else if(words.includes('X')){
  let arrayConvert = words.split('');  // string to array
  arrayConvert.splice(0,1,'Y')         // replace 0 index letter
  console.log(arrayConvert.join(""));  // array convert into string
}

//Problem-05: Capitalize Every first Letter of each word in a String

let sentence = 'You are my darling';

let result = '';

let arraySentence = sentence.split(' '); // string conver into array in words

// arraySentence[i][0] => target 0 index under the word of any number of element in array

// arraySentence[i].slice(1) => cut 1 index to last under the word of any number of element in array

for(let i = 0 ; i < arraySentence.length ; i ++){
  result = result +" "+ arraySentence[i][0].toUpperCase() + arraySentence[i].slice(1) ;
}

console.log(result.trimStart()); // trimStart() => remove starting gap from final output / output