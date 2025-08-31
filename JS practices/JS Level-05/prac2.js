// Function default parameter for not provided values (=) & use of template string (` `)
 
// Function default parameter & if not provide this what happen ....

let add1 = (a, b) => {
    return `${a} , ${b}, total: ${a + b}`
}

console.log(add1(45));

let add2 = (a, b = 0) => {           // default value set up b = 0
    return `${a} , ${b}, total: ${a + b}`
}

console.log(add2(45));

let add3 = (a, b) => {
    return `${a} , ${b}, total: ${a + b}`
}

console.log(add3());

// write a poem using normal string

let poem1 = 'A quiet breeze, a fleeting song, \n' +
'The day is short, the night is long. \n' +
'Yet in the dark, the stars still glow, \n' +
'A gentle guide for hearts that roam. \n'

console.log(poem1);

// write a poem using template string

let poem2 = `
A quiet breeze, a fleeting song,
The day is short, the night is long.
Yet in the dark, the stars still glow,
A gentle guide for hearts that roam.
`

console.log(poem2);