// unction return and set return value to a variable

function half(num){
    let result = num / 2;
    return result;
}

let cutHalf = half(44);

console.log(cutHalf);  // call the function and print the output when use return in function block otherwise you can not see the output

function rt(num){
    let result = num**0.5;
    return result;
}

let rootOfNum = rt(64);

console.log("Root of you enter number is" + " ", rootOfNum);

function getMenu() {
 console.log("Burger, Pizza, Pasta");
}

getMenu(); // show the ouput which is console log and retrun is undefined


function getMenu() {
 console.log("Burger, Pizza, Pasta");
}

let a = getMenu();

console.log(a);  // return not defined => output is undefined