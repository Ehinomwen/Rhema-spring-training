// if else if else statement 
// check if the number is positive, negative or zero

const prompt = require ("prompt-sync")({sigint: true});


const number = prompt("Enter a number");
if (number > 0) {
    console.log("the number is positive")
}
else if (number == 0) {
    console.log("the number is negative")
} else {
    console.log("the number is undefined")
}
