/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here

var moneyIncreasePortion = 1.05;

var CurrentSalary = startingSalary * moneyIncreasePortion ** experience;

console.log(CurrentSalary.toFixed(2));