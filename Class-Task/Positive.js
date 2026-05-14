const prompt = require("prompt-sync")();
let userInput = prompt("Enter a number ");
let result = getNumber(userInput);

console.log(result); 

function getNumber(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
  
