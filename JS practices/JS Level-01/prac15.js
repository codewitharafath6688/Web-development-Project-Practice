// reverse the sentence with letter

let sentence = "My name is Jahid" ;

let reverse = "" ;

// for of loop

// for(let letter of sentence){
//     reverse = letter + reverse ;
//     console.log(reverse); // step by step output
// }

// console.log(reverse); // final output

// for loop

for(i = 0 ; i < sentence.length ; i++){
    reverse = sentence[i] + reverse;
    console.log(reverse);
}

console.log(reverse);

//while loop

// let i = 0 ;

// while(i < sentence.length){
//     reverse = sentence[i] + reverse ;
//     // console.log(reverse);
//     i++;
// }

// console.log(reverse);

// split , reverse and join function

// let rev = sentence.split('').reverse().join(''); // split all letter + reverse them + join the letter with word 

// console.log(rev);