function getUserAge(age) {
    if(age < 0){
    
    return "Invalid age";
}
    if (age < 5){

    return "Child";
}else if(age < 18){

    return "Teen";
}else {
    return "Adult";

}



}
const prompt = require("prompt-sync")();
let userInput = prompt("Enter your age:");
let age = Number(userInput);

let result = getUserAge(age);

console.log(result);
