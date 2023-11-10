"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var inquirer_1 = require("inquirer");
var genNo = Math.floor(Math.random() * 5);
var user = await inquirer_1.default.prompt({
    name: "numOne",
    type: "list",
    message: "kindly Select The Number:",
    choices: ["0", "1", "2", "3", "4"]
});
if (genNo == parseInt(user.numOne)) {
    console.log(chalk_1.default.bold.greenBright("Congratulation you won"));
}
else {
    console.log(chalk_1.default.bold.redBright("Sorry please try again"));
}
