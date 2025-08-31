// Remove duplicate items from an array

function removeDuplicate(arrayValue){
    let newArray = [];
    for(let value of arrayValue){
        if(newArray.includes(value) === false){
            newArray.push(value);
        }
    }
    return newArray;
}

let oldArray = [33, 73, 33, 56, 73];

console.log(removeDuplicate(oldArray));

