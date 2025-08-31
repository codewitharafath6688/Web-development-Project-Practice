// Calculate the average of the odd numbers in an array

function oddAvg(valueArray){
    let result;
    let sum = 0;
    let newOddArray = [];
    for(let i = 0 ; i < valueArray.length ; i++){
        if(valueArray[i] % 2 !== 0){
            newOddArray.push(valueArray[i]);
            sum = sum + valueArray[i];
            result = sum / newOddArray.length;
        }
    }
    console.log("All odd numbers array is", newOddArray);
    return result;
}

let arrayNumbers = [24, 77, 31, 44, 88, 39];

console.log("All odd numbers avg is", oddAvg(arrayNumbers));