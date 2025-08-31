// String Slice, split, Concat and includes

let myName = 'Kabir' ;

let stringSlice = myName.slice(1,4); // fist input index about starting and 2nd input index about end the programe before reached 2nd input index value

console.log(stringSlice); 

let frndsStr = 'Rahim, Kabir, Zahid' ;

let sentence = 'My name is Zahid' ;

console.log(frndsStr.split());  // works as a separator and convert string into array

console.log(sentence.split(" ")); // " " => seprate all words 

let firstName = 'Arafath' ;

let lastName = 'Siddique' ;

console.log(firstName + " " + lastName); // manually add two separate strings

let fullName = firstName.concat(" ").concat(lastName); // adding separate arrays / strings

console.log(fullName);

let firstNameCheck = firstName.includes('s'); // check subs-string existence in string

let lastNameCheck = lastName.includes('i'); // see firstNameCheck

console.log(firstNameCheck);

console.log(lastNameCheck);