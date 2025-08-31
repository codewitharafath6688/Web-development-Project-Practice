// Simple calculator to call function inside a function

function add(num1, num2){
    return num1 + num2;
}

function subst(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function div(num1, num2){
    return num1 / num2;
}

function calc(a, b, operation){
    if(operation === "sum"){
        return add(a, b);
    } else if(operation === "substract"){
        return subst(a, b);
    } else if(operation === "multiply"){
        return multiply(a, b);
    } else{
        return div(a, b);
    }
}

console.log(calc(1, 2, 'division'));