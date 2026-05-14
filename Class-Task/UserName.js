const prompt = require("prompt-sync")();

function getUserName(name, password) {

    return { name: name, password: password };
}

let name = prompt("Enter user name: ");
let password = prompt("Enter your password: ");

let result = getUserName(name, password);

console.log("Name is: " + result.name);
console.log("Password is: " + result.password);
console.log("LOGIN SUCCESSFUL");
