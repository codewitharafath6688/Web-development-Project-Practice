// Callback function and pass different functions

function ghotok(callBackMe , patro, patri){
    if(patri){
        callSomeOne(patro);
    } else{
        console.log('Not ok');
    }
}

function callSomeOne(person){    // Callback Function => A function pass by a argument of another fucntion
    console.log('Calling', person);
}

ghotok(callSomeOne, 'Jodu', 'Modu');

// A fucntion used in foreach , find , filter & map is  callback function