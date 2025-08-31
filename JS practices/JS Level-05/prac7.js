//  Loop through an object using for in & for of (basically 'for in' loop use for object and 'for of' loop use for array)

let myObject = {
    name: 'iPhone',
    type: 'mobile',
    model: 'XR',
    price: 120000
}

for(let keys in myObject){
    let objectValues = myObject[keys];
    console.log(keys + ' : ' + objectValues);
}

let objectKeys = Object.keys(myObject); // output in array

for(let key of objectKeys){
    let values = myObject[key];
    console.log(key + ' : ' + values);
}