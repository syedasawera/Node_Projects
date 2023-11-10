import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "kindly enter your number"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "kindly enter your number"
    }, {
        type: "number",
        name: "numberOne",
        message: "kindly enter your number"
    }, {
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
        message: "kindly enter your operator"
    },
]);
const { numberOne, numberTwo, operator } = answer;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberOne + numberTwo;
    }
    else if (operator === "-") {
        result = numberOne - numberTwo;
    }
    if (operator === "*") {
        result = numberOne * numberTwo;
    }
    if (operator === "/") {
        result = numberOne / numberTwo;
    }
    console.log("you number is :", result);
}
else {
    console.log("kindly enter valid number");
}
