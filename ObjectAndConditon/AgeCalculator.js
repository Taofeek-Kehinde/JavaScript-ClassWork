const prompt = require("prompt-sync")();

let name = prompt("What is your name? ")
let age = prompt ("How old are you? ")

if (age >= 18) {

    console.log("Adult")

} else {

    console.log("Minor")
}
