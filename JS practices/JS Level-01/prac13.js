// Comparison lowercase , uppercase & trim

let myName = ' Kabir '

console.log(myName);
 
console.log(myName.toLowerCase()); // convert all in small letter

console.log(myName.toUpperCase()); // convert all in capital letter

console.log(myName.trim());  // remove first and last blank spaces

// combined problem

let mySub = 'Physics' ;

let yourSub ='physics' ;

let myDrm = 'Doctor ';

let yourDrm = ' Doctor '

if(mySub.toLowerCase() === yourSub.toLowerCase()){
    console.log("We are same");
} else{
    console.log("We are not same mind");
}

if(myDrm.trimEnd() === yourDrm.trim()){
    console.log("No space , our dreams are same");
} else{
    console.log("space , our dreams are not same");
}

// lowercase and uppercase => can create case insensitive