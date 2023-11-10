import chalk from "chalk";
import inquirer from "inquirer";


const genNo = Math.floor(Math.random() * 5)
const user = await inquirer.prompt({
    name : "numOne",
    type : "list",
    message : "kindly Select The Number:",
    choices : ["0","1","2","3","4"]

});

if(genNo == parseInt(user.numOne)){
    console.log(chalk.bold.greenBright("Congratulation you won"));
}else{
    console.log(chalk.bold.redBright("Sorry please try again"))
}
