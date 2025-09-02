// double equal (==) vs triple equal (===), implicit conversion

// triple equal (===) => Strict Equality

// console.log(1 === 1);
// console.log(1 === 2);
// console.log(1 === '1');
// console.log([] === []);
// console.log({} === {});
// console.log([] === {});
// console.log('1' === '1');
// console.log('1' === '3');
// console.log(null === null);
// console.log(undefined === undefined);
// console.log(undefined === null);
// console.log('' === ' ');
// console.log(true === 1);
// console.log(false === 0);
// console.log('' === 0);
// console.log(' ' === 0);
// console.log(NaN === NaN);


// double equal (==) => Loose Equality

console.log(1 == 1);
console.log(1 == 2);
console.log(1 == '1'); // string convert into number
console.log([] == []); // different reference (non-primitive)
console.log({} == {}); // different reference (non-primitive)
console.log([] == {});
console.log('1' == '1');
console.log('1' == '3');
console.log(null == null);
console.log(undefined == undefined);
console.log(undefined == null); // emptyness
console.log('' == ' '); 
console.log(true == 1); // boolean convert into number
console.log(false == 0);  // boolean convert into number
console.log('' == 0);
console.log(' ' == 0);
console.log(NaN == NaN);
console.log([] == '') // array convert into string and string convert into number
console.log([5] == '5'); // array convert into string and string convert into number
console.log([5] == 5); // array convert into string and this string convert into number

// implicit conversion

console.log('5' - 2); // string convert into number (-,* and /)
console.log('5' + 2); // In the case of '+' this called concatanation => number convert into string(+)
console.log([5] == 5); // condition context => boolean (If condtion || ,  && and normal console.log == , ===)