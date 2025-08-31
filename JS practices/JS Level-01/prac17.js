// Multiple ways to get & set object properties

let mySelf = {
    myName : 'Arafath',
    age : 24,
    isSingle : true,
    haveCar : false,
    favPlaces : ['CRB', 'Potenga Beach', 'Cox-bazar'],
    'fav hobbies' : ['gerdening', 'watching tv']
}

// dot notation

let myAge = mySelf.age;

console.log(myAge);

// 3rd bracket notation

let Name = mySelf['myName'];

console.log(Name);

let hobbies = mySelf['fav hobbies']; // this type of object properties are not follow dot notation => Only apply 3rd bracket notation

console.log(hobbies);

// we can change the object property value

let car = 'haveCar';

mySelf[car] = true;

let myHobbies = 'fav hobbies';

mySelf[myHobbies] = ['playing cricket', 'playing games'];

mySelf.age = 26 ;

console.log(mySelf);