import inquirer from "inquirer";
const res = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: "Please enter the number of seconds for the countdown:",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please enter a valid number";
        }
        else if (input <= 0) {
            return "Seconds must be greater than 0";
        }
        else {
            return true;
        }
    }
});
let input = res.userInput;
function startCountdown(seconds) {
    const interval = setInterval(() => {
        console.clear(); // Clear the console to update the countdown
        console.log(`Countdown: ${seconds} seconds`);
        if (seconds === 0) {
            clearInterval(interval);
            console.log("Countdown has ended!");
            process.exit();
        }
        seconds--;
    }, 1000);
}
startCountdown(input);
