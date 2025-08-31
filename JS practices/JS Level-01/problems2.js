// Problem-01

let burgerPrice = 300;

if (burgerPrice > 500) {
  console.log("Free coke");
} else {
  console.log("Coke: 30tk");
}

// problem-02

let weight = 20;

let height = 1.52;

let resultOfBmi = weight / height ** 2;

if (resultOfBmi < 18.5) {
  console.log("you are underweight.");
} else {
  if (resultOfBmi >= 18.5 && resultOfBmi <= 24.9) {
    console.log("you are normal.");
  } else {
    if (resultOfBmi >= 25 && resultOfBmi <= 29.9) {
      console.log("you are overweight.");
    } else {
      console.log(" you are obese.");
    }
  }
}

// Problem-03

let marks = 100;

if (marks >= 90 && marks <= 100) {
  console.log("Your grade is A");
} else if (marks >= 80 && marks <= 89) {
  console.log("Your grade is B");
} else if (marks >= 70 && marks <= 79) {
  console.log("Your grade is C");
} else if (marks >= 60 && marks <= 69) {
  console.log("Your grade is D");
} else if (marks >= 0 && marks <= 59) {
  console.log("You are fail");
}

// Problem-04

let myMarks = 83;

let frndMarks = 45;

if (myMarks > 80) {
  if (frndMarks > 80) {
    console.log("go for a lunch.");
  } else {
    if (frndMarks < 80 && frndMarks >= 60) {
      console.log("good luck next time.");
    } else {
      if (frndMarks < 60 && frndMarks >= 40) {
        console.log("keep your friend's message unseen");
      } else {
        console.log("block your friend");
      }
    }
  }
} else {
  console.log("go to home and sleep and act sad.");
}

// Problem-05

let num1 = 25;

let num2 = 30;

let sum;

num1 > num2 ? console.log((num1 = num1 * 2)) : console.log((sum = num1 + num2));

if (num1 > num2) {
  num1 = num1 * 2;
  console.log(num1);
} else {
  sum = num1 + num2;
  console.log(sum);
}

// Problem-06

let age = 65;

let student = true;

if(age < 10){
  console.log("Children , so ticket is free");
} else if(age >= 60){
  console.log("Senior citizen , so get a 15% discount in ticket");
} else if(student){
  console.log("Student , so get a 50% discount in ticket");
} else{
  console.log("Regular ticket fare 800 tk");
}