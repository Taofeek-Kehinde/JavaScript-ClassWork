//for loop
for(let index = 1; index <= 10; index++){

    console.log(index)
}

//for in

const obj = {
name: "kenny",
hobby: "garri",
age: 21
}

for(let index in obj){

    console.log(obj[index])
}

OR

const array = [2,4,4,5,6,7,8,9];

for (let number in array){
    console.log(array[number])
}
//for of

const array = [2,4,4,5,6,7,8,9];

for (let number of array){
    console.log(number)
}

//it only for in that can go through js object and loop through an element
