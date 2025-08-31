// boolean & array types of parameters for a function

// boolean type

function doubbleOrtrtipple(num, doubble){
    if(doubble === true){
        let rslt = num * 2;
        return rslt;
    } else{
        let rslt = num * 3;
        return rslt;
    }
}

let nm = doubbleOrtrtipple(5, false);

let nm1 = doubbleOrtrtipple(5, true);

console.log(nm);

console.log(nm1);

// array type

function numOfelmnt(numbers){
    let ln = numbers.length;
    return ln;
}

let elementCount = numOfelmnt([6, 7, 88, 72, 89]);

console.log("Numbers of element of array is", elementCount) ;

