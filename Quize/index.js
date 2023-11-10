import inquirer from "inquirer";
import chalk from "chalk";
const apilink = "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple";
let fetchData = async (data) => {
    let fetchQuize = await fetch(data);
    let res = await fetchQuize.json();
    return res.results;
};
let data = await fetchData(apilink);
let StartQuize = async () => {
    let score = 0;
    let name = await inquirer.prompt({
        type: "input",
        name: "name",
        message: "Please enter your name?"
    });
    for (let i = 0; i < 5; i++) {
        let answers = [...data[i].incorrect_answers, data[i].correct_answer];
        let ans = await inquirer.prompt({
            type: "list",
            name: "Quize",
            message: data[i].question,
            choices: answers.map((val) => val),
        });
        if (ans.Quize == data[i].correct_answer) {
            ++score;
        }
    }
    console.log(`Dear ${chalk.green.bold(name.name)},
, your score is ${chalk.red.bold(score)} out of ${chalk.red.bold("5")}`);
};
StartQuize();
