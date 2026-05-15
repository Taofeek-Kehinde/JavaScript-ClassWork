const prompt = require("prompt-sync")();

function getSum () {

let firstNumber = Number(prompt("Enter first number "));
let secondNumber = Number(prompt("Enter second number "));

return firstNumber + secondNumber;

}
let result = getSum ();
console.log("sum = " + result);

