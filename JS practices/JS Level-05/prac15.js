// Different Truthy and Falsy Values in JavaScript

// let data = 0;
// data = '0';
// data = 'Arafath';
// data = 1;
// data = -33;
// data = undefined;
// data = null;
// data = [];
// data = {};
// data = false;
// data = true;
// data = '';
data = ' ';

if(data){
    console.log(data, 'is truthy');
} else{
    console.log(data, 'is falsy');
}

// If I need all negative value to go inside if block

if(!data){
    console.log('Negative value, inside if block');
}

// If I need all positive value

if(!!data === true){
    console.log('Positive value with double not');
}