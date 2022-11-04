let greeting = "Hello World!";
console.log (greeting);
//number
let age = 36;
//BigInt
const bigInt = 123456789n;
//string
let cityName = "Moscow";
// boolean
let isCash = true;
//null
let passAdmin = null;
//undefined
let setPass;
// Symbol
let id1 = Symbol("id");
//object
let value = {name: 'Vasily', age:36};

console.log (age, bigInt, cityName, isCash, passAdmin, setPass, id1, value);
//typeof x
console.log (typeof age, typeof bigInt, typeof cityName, typeof isCash, typeof passAdmin, typeof setPass, typeof id1, typeof value);
//typeof (x)
console.log (typeof (age), typeof (bigInt), typeof (cityName), typeof (isCash), typeof (passAdmin), typeof (setPass), typeof (id1), typeof (value));

const firstName = "Vasily";
//firstName = "Denis";
console.log (firstName);

const user = {
  name: 'Vasily', 
  age:36
};
console.log (user);
user.name = "Ivan";
console.log (user);

let admin = {
  name: 'Vasily', 
  age:36
};

admin = {
  name: 'Denis', 
  age:20
};
console.log (admin);

var root = {
  name: 'Alex', 
  age:45
};

root = {
  name: 'Tom', 
  age:27
};
console.log (root);

