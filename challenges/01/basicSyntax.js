"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Data type variables
var name = readlineSync.question("Enter your name, please:");
var age = parseInt(readlineSync.question("Enter your age, as well:"));
var isHuman = readlineSync.question("Are you a human? (Yes/No)") === ("Yes") ? true : false;
var number1 = parseInt(readlineSync.question("Give me a number:"));
var number2 = parseInt(readlineSync.question("Give me another one:"));
// Template string
var greeting = "Hello hello, your name is ".concat(name, " and you are ").concat(age, " yo! ").concat(isHuman ? "Congrats, you're in fact a human! ^^" : "I'm sorry, but you seem like a bot to me. XD");
// Arrow function
var multiply = function (x, y) {
    return x * y;
};
// Print results
console.log(greeting);
console.log("The result of multiplying ".concat(number1, " and ").concat(number2, " is: ").concat(multiply(number1, number2)));
