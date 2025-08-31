//  Find the max number in an array

function maxInArray(arrayValue){
    let max = arrayValue[0];
    for(let val of arrayValue){
        if(val > max){
            max = val;
        }
    }
    return max;
}

let arrayNumbers = [23, 24, 21, 69, 45, 6];

console.log("Max number", maxInArray(arrayNumbers));