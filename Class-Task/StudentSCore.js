const prompt = require("prompt-sync")();

function getStudentScore() {

let score = prompt("what is your score? ");

if(score >= 70){

    console.log("A")
}else if (score >= 60) {

    console.log("B")
}else if (score >= 50){

    console.log("C")
}else if (score >= 40){
    console.log("D")
}else {

    console.log("F");
}

}

 getStudentScore();


