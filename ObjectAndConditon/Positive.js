const prompt = require("prompt-sync")();

const number = prompt("Enter a number ")

if (number <= 0){
    console.log("Negative")
} else if (number > 0) {
    console.log("Postive")
}

//console.log(number)
