// Handle unexpected function input parameter error (validation)

function total(arrayValue) {
  if (Array.isArray(arrayValue) === false) {
    return "Only array is applicable";
  }
  let total = 0;
  for (let val of arrayValue) {
    if (typeof val !== "number") {
      return "Only number is applicable";
    }
    total = total + val;
  }
  return total;
}


let val1 = [56, 44 , 25];  // this is correct and others are all wrong
let val2 = {number: 45};
let val3 = ['sum'];
let val4 = [true];
let val5 = 56;
let val6 = "sum";
let val7 = true;

console.log(total(val1));
console.log(total(val2));
console.log(total(val3));
console.log(total(val4));
console.log(total(val5));
console.log(total(val6));
console.log(total(val7));