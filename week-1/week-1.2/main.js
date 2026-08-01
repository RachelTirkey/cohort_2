// console.log("hello world");

// var a = 1;
// a = 2;
// console.log(a);

let firstName = "Rachel";
let age = 26;
let isMarried = false;

console.log("this person name is " + firstName + " and their age is" + age);

console.log("this person name is ");
console.log(firstName);

// If-Else ------------

if (isMarried == true) {
  console.log(firstName + " is married");
} else {
  console.log(firstName + " is not married");
}

//  For loop------------

let answer = 0;

for (let i = 0; i < 100; i++) {
  answer = answer + i;
  console.log(answer);
}

// ------------

let person1 = "Rachel";
let person2 = "Rima";
let person3 = "Sam";

const personArray = ["Rachel", "Rima", "Sam"];

console.log(personArray);
console.log(personArray[0]);
console.log(personArray[1]);
console.log(personArray[2]);

// ------------

const ages = [21, 22, 23, 24, 25];

for (let i = 0; i < ages.length; i++) {
  if (ages[i] % 2 == 0) {
    console.log(ages[i]);
  }
}

// Objects ------

const allUsers = [
  {
    firstName: "Rachel",
    gender: "female",
  },
  {
    firstName: "Rima",
    gender: "female",
  },
  {
    firstName: "Sam",
    gender: "male",
  },
];

for (let i = 0; i < allUsers.length; i++) {
  if (allUsers[i].gender == "female") {
    console.log(allUsers[i].firstName);
  }
}

// Functions ------

function sum(a, b) {
  const sumValue = a + b;
  return sumValue;
}

const value = sum(10, 20);
const value2 = sum(40, 20);
console.log(value);

// users["name"] and users.name are same

// Functions ------

function sum1(num1, num2, fnToCall) {
  let result = num1 + num2;
  fnToCall(result);
}

function displayResult(data) {
  console.log("Result of the sum1 is " + data);
}

function displayResultPassive(data) {
  console.log("Sum1's result is " + data);
}

const ans = sum1(1, 2, displayResult);


// setTimeout ------

function greet(){
    console.log("hello world");
}

function greetAlient(){
  console.log("hello alien");
}


setTimeout(greetAlient, 2 * 1000);

// -----------

function calculateArithmetic(a, b, arithmeticFinalFunction){
    const ans1 = arithmeticFinalFunction(a, b);
    return ans1;
}

function sum2(a, b){
    return a + b;
}

const value1 = calculateArithmetic(15, 2, sum2);
console.log(value1);


