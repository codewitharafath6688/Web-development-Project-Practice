// Function parameter, handle multiple parameters

function addition(num1, num2) {
  let add = num1 + num2; // this work only in function block not outside
  console.log("Numbers are", num1 + " & " + num2);
  console.log("Sum is", add);
}

addition(45, 45);

function sqr(num) {
  let sqre = num ** 2;
  console.log("Input value is", num);
  console.log("Square of"+ " " + num + " is " + sqre);
}

sqr(70);