const prompt = require("prompt-sync")();

let x = Number(prompt("Enter first number "));

let y = Number(prompt("Enter last number "));

let sum = x + y;

let twice = sum * 2; 

console.log(twice);


let value = 22;

let remainder = 10 

let modulus = value % remainder;

console.log(modulus);


let x = 5;
let n = 10;

let result = x * x ** n;

console.log(result);

let a = 15;

let x = a + 10;
let y = a - 10;
let z = a % 10;
let product = x * y * z;


if (product === 0) {
    console.log("Division by zero is undefined.");
} else {
    console.log(a / product);
}

