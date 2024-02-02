// For this first challenge I'll be praticing using basic 
// syntax like: template strings, arrow functions, and type annotations
import * as readlineSync from 'readline-sync';

// Data type variables
let name: string = readlineSync.question("Enter your name, please:");
let age: number = parseInt(readlineSync.question("Enter your age, as well:"));
let isHuman: boolean = readlineSync.question("Are you a human? (Yes/No)") === ("Yes") ? true : false;
let number1: number = parseInt(readlineSync.question("Give me a number:"));
let number2: number = parseInt(readlineSync.question("Give me another one:"));

// Template string
let greeting: string = `Hello hello, your name is ${name} and you are ${age} yo! ${isHuman ? "Congrats, you're in fact a human! ^^" : "I'm sorry, but you seem like a bot to me. XD"}`;

// Arrow function
const multiply = (x: number, y: number): number => {
    return x * y;
};

// Print results
console.log(greeting);
console.log(`The result of multiplying ${number1} and ${number2} is: ${multiply(number1 ,number2)}`);