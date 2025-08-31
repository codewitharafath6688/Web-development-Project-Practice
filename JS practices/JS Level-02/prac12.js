// Check whether a year is a Leap Year or not

function isLeapYaer(yearValue) {
  if (yearValue % 100 !== 0 && yearValue % 4 === 0) {
    return true;
  } else if (yearValue % 100 === 0 && yearValue % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYaer(1900));

console.log(isLeapYaer(2052));

console.log(isLeapYaer(2100));

// 1. those year that is not divisible by 100 and if the year is divisible by = then it will be a leap year
// 2. if the year is divisible by 100 and divisible by 400 , then it will be a leap year
// 3. else it is not a leap year