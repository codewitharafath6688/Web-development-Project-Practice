// comparison of number

function maxN(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        console.log("Num1 is Max number , value is", num1);
    } else if(num2 > num1 && num2 > num3){
        console.log("Num2 is Max number , value is", num2);
    } else{
        console.log("Num3 is Max number , value is", num3);
    }
}

let num1 = 34;

let num2 = 44;

let num3 = 21;

maxN(num1, num2, num3);

// by Math.max() 

console.log("Max number is", Math.max(num1, num2, num3));