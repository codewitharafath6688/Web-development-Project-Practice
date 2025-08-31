// while loop
// Problem-01

// let i = 1 ;

// while(i <= 60){
//     console.log("I will invest at least 6 hrs every single day for next 60 days!");
//     i++;
// }

// Problem-02 (Sub-Task-01)

// let i = 61;

// while(i <= 100){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
//     i++;
// }

// Problem-02 (Sub-Task-02)

// let i = 78 ;

// while(i <= 98){
//     if(i % 2 === 0){
//         console.log(i);
//     }
//     i++;
// }

// Problem-03 (Sub-Task-01)

let i = 81 ;

let sum = 0 ;

while(i <= 131){
    if(i % 2 !== 0){
        sum = sum + i ;
        console.log(i);
    }
    i++;
}

// console.log("Sum of odd numbers", sum);

// Problem-03 (Sub-Task-02)

// let i = 206 ;

// let sum = 0 ;

// while(i <= 311){
//     if(i % 2 === 0){
//         sum = sum + i ;
//         console.log(i);
//     }
//     i++;
// }

// console.log("Sum of even numbers", sum);

// Problem-04

// let i = 1 ;

// let b = 5 ;

// let a;

// console.log("Ersa to generate a multiplication table for number 5 :");

// while(i <= 10){
//     a = b * i ;
//     console.log(" "+ b +" x "+ i +" = "+a);
//     i++;
// }

// Problem-05

// let i = 21 ;

// while(i >= 15){
//     console.log(i);
//     i--;
// }

// for loop
// Problem-01

// for(i = 1 ; i <= 60 ; i++){
//     console.log("I will invest at least 6 hrs every single day for next 60 days!");
// }

// Problem-02 (Sub-Task-01)

// for(i = 61 ; i <= 100 ; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

// Problem-02 (Sub-Task-02)

// for(i = 78 ; i <= 98 ; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// Problem-03 (Sub-Task-01)

// let sum = 0 ;

// for(i = 91 ; i <= 129 ; i++){
//     if(i % 2 !== 0){
//         sum = sum + i ;
//         console.log(i);
//     }
// }

// console.log("Sum of odd numbers", sum);

// Problem-03 (Sub-Task-02)

// let sum = 0;

// for(i = 51 ; i <= 85 ; i++){
//     if(i % 2 === 0){
//         sum = sum + i ;
//         console.log(i);
//     }
// }

// console.log("Sum of even numbers", sum);

// Problem-04

// let a = 9 ;

// let b;

// for(i = 1 ; i <= 10 ; i++){
//     b = a * i ;
//     console.log(" "+ a +" x "+ i +" = "+ b);
// }

// Problem-05

// for(i = 81 ; i >= 65 ; i--){
//     console.log(i);
// }

// continue
// Problem-01

// for(i = 1 ; i <= 40 ; i++){
//     if(i % 2 === 1){
//         continue;
//     }
//     console.log(i);
// }

// Problem-02

// for(i = 55 ; i <= 85 ; i++){
//     if(i % 5 === 0){
//         continue;
//     }
//     console.log(i);
// }

// break
// Problem-01

// let i = 1 ;

// while(i <= 200){
//     if(i > 100){
//         break;
//     }
//     console.log(i);
//     i++;
// }

// Problem-02

// let sum = 0;

// for(i = 1 ; i <= 200 ; i++){
//     sum = sum + i ;
//     if(sum >= 100){ 
//         break;
//     }
// }

// console.log(i);   // final ans of exact point

// console.log(sum);  // final ans of exact point

// Problem-03

// for(i = 2 ; i <= 100 ; i++){            // i = 1 , 2 , 3.......
//     if(Number.isInteger(Math.sqrt(i))){
//         console.log(i);   //final ans of exact point
//         break; 
//     }
// }