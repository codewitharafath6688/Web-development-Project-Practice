// Math, abs, round, ceil, floor, and random number

console.log(Math.min(23, 45, 66, -100, 121)); // show lowest value

console.log(Math.max(23, 45, 66, -100, 121)); // show highest value

console.log(Math.abs(-88) + " & " + Math.abs(88) + " both are same value"); // positive or, negative sign => show always just value without sign

console.log(Math.round(6.67) + " & " + Math.round(6.45) + " both are different"); // Returns a supplied numeric expression rounded to the nearest integer which can be lower or higher

console.log(Math.floor(6.89)); // Returns the greatest integer less than or equal to its numeric argument

console.log(Math.ceil(5.21)); // Returns the smallest integer greater than or equal to its numeric argument.

console.log(Math.random()*10); // 0 to higest(which you give) random number given & Math.floor(Math.random()*(max - min)) + min, for range (min to max)