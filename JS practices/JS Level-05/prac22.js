// API Concept , Intro to JSON

// User ↔ API Req ↔ Server ↔ Database

// Intro to JSON
// JSON => JavaScript Object Notation => Data type is string with key pair data look alike a object
// JSON => Data Interchange Format => Data from API

 let myObject = {
    name: 'Arafath',
    Roll: 2206,
    Position: 2,
    Progress: 'good'
}

console.log(myObject);     // Object Format

let myObjectJson = JSON.stringify(myObject);

console.log(myObjectJson); // JSON Format

let normalObject = JSON.parse(myObjectJson);

console.log(normalObject); // Object Format