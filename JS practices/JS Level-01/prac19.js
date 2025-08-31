// Loop an object and Ways to declare an Object


let mobile = {
    brand : 'Nokia',
    isNew : true,
    isVersion : true,
    versionValue : 1.1,
    price : 26000,
    camera : '15 MP'
}

// for in loop

for(let prop in mobile){  //for of loop => array & for in loop => object
    // console.log("Key" + " : " + prop);
    // console.log("Value" + " : " + mobile[prop]);
    console.log(prop +" : "+ mobile[prop]);
}

// for of loop

let mobilekey = Object.keys(mobile);  // key output through array

console.log(mobilekey);

for(let prop1 of mobilekey){
    // console.log("Key" + " : " + prop1);
    // console.log("Value" + " : " + mobile[prop1]);
    console.log(prop1 +" : "+ mobile[prop1]);
}

// some way of declaration of object

let exam = new Object();    // new object() method

exam.name = "final" ;

exam.date = '27 Feb , 2026' ;

console.log(exam);

let myself = Object.create({});  // object.create(null) or, object.create({}) method

myself.name = 'Arafath' ;

myself['age'] = 24 ;

console.log(myself);