// Unit convertion (inch to feet & mile to km)

// inch to feet:

function inchTofeet(inchValue){
    let result = inchValue / 12;  // 12 inch = 1 feet
    return result;
}

console.log(inchTofeet(1));

// inch to feet case issue:

function heightCalc(inputValue){
    let result = inputValue / 12;
    return result;
}

function heightCalcAd(inputValue){
    let heightCountFr = inputValue / 12;
    let heightCountInt = parseInt(heightCountFr);
    let remaining = inputValue % 12;
    let result = "Your height is " + heightCountInt + " ft " + remaining + " inch ";
    return result;
}

console.log(parseFloat(heightCalc(80).toFixed(2))); // toFixed() => number conver into string but parseFloat => string convert into number (fraction)

console.log(heightCalcAd(80));

// mile to kilometre

function mileTokm(mileValue){
    let result = mileValue * 1.60934;
    return result;
}

console.log(1 , "mile =", mileTokm(1) , "km");