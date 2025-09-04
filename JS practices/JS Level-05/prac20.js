// Explore about Closure

// Closure is when an inner function can remember and use the variables of its outer function, even after the outer function has finished running. 

function counter(){ // outer function
    let count = 0 ;
    return function innerFn(){ // inner function
        count++;
        console.log('Some one call me from outer space', count);
    }
}

let fn = counter();
fn(); // 'Some one call me from outer space', 1
fn(); // 'Some one call me from outer space', 2
fn(); // 'Some one call me from outer space', 3

let fn1 = counter();
fn1(); // 'Some one call me from outer space', 1
fn1(); // 'Some one call me from outer space', 2
fn1(); // 'Some one call me from outer space', 3