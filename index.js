#! /usr/bin/env node
// import the inquirer modules for prompting user inputs
import inquirer from "inquirer";
// initialize a condition to control the loops 
let condition = true;
// loop to keep the calculator running until the user decides to stop
while (condition) {
    // prompt the user to enter two numbers and an operator
    const userAns = await inquirer.prompt([
        {
            type: "number",
            name: "number1",
            message: "Enter your first number"
        },
        {
            type: "number",
            name: "number2",
            message: "Enter your second number"
        },
        {
            type: "list",
            name: "operator",
            message: "Choose your operator for operation",
            choices: ["+", "-", "*", "/"]
        }
    ]);
    // Destructuring the answers
    let { number1, number2, operator } = userAns;
    // performing the operation based on the chosen operator and log the results
    if (operator === "+") {
        console.log(add());
    }
    else if (operator === "-") {
        console.log(sub());
    }
    else if (operator === "*") {
        console.log(multiply());
    }
    else if (operator === "/") {
        console.log(divide());
    }
    // function to add two numbers and return the result
    function add() {
        return `\nThe answer of ${number1} + ${number2} = ${number1 + number2}\n`;
    }
    // function to subtract two numbers and return the result
    function sub() {
        return `\nThe answer of ${number1} - ${number2} = ${number1 - number2}\n`;
    }
    // function to multiply two numbers and return the result
    function multiply() {
        return `\nThe answer of ${number1} x ${number2} = ${number1 * number2}\n`;
    }
    // function to divide two numbers and return the result
    function divide() {
        return `\nThe answer of ${number1} / ${number2} = ${number1 / number2}\n`;
    }
    // prompt the user if they want to perform more calculations
    let againCalculate = await inquirer.prompt({
        type: "confirm",
        name: "again",
        message: "Do you want to perform more calculations",
        default: false
    });
    // if the user does not want to continue,set the condition to false
    if (!againCalculate.again) {
        condition = false;
        // log a thank you message to the user
        console.log("\nThank you for using our calculator");
    }
}
