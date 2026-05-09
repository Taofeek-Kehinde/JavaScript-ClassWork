const prompt = require("prompt-sync")();

const student = {
    name: "Amaka",
    score: Number(prompt("Enter your score: ")) 
};

if (student.score >= 90) {
    console.log("A");
} else if (student.score >= 80) {
    console.log("B");
} else if (student.score >= 70) {
    console.log("C");
} else {
    console.log("F");
}

