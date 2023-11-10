import inquirer from "inquirer";
// Player Class and Methods
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    increaseFuel() {
        this.fuel = 100;
    }
    decreaseFuel() {
        this.fuel = this.fuel - 25;
    }
}
// Main function start of program execution
async function mainMenu() {
    // Players data gathering
    let players = await inquirer.prompt([
        {
            name: "player1",
            type: "input",
            message: "Enter Player 1 Name:"
        },
        {
            name: "player2",
            type: "list",
            choices: ["Skeleton", "Assasin", "Zoombie"],
            message: "Select Player 2:"
        }
    ]);
    // Players object declaration with constructor parameter
    let p1 = new Player(players.player1);
    let p2 = new Player(players.player2);
    do {
        // Play with selected player
        console.log(`${players.player1} VS ${players.player2}`);
        let actions = await inquirer.prompt([
            {
                name: "action",
                type: "list",
                choices: ["Attack", "Bonus Life", "Quit Game"],
                message: "Select to Play:"
            }
        ]);
        if (actions.action == "Attack") {
            let score = Math.floor(Math.random() * 2);
            if (score > 0) {
                p1.decreaseFuel();
                console.log(`${p1.name} Life ${p1.fuel}%`);
                console.log(`${p2.name} Life ${p2.fuel}%`);
                if (p1.fuel <= 0) {
                    console.log(`${p2.name} You Win!`);
                    process.exit();
                }
            }
            else {
                p2.decreaseFuel();
                console.log(`${p2.name} Life ${p2.fuel}%`);
                console.log(`${p1.name} Life ${p1.fuel}%`);
                if (p2.fuel <= 0) {
                    console.log(`${p1.name} You Win!`);
                    process.exit();
                }
            }
        }
        else if (actions.action == "Bonus Life") {
            p1.increaseFuel();
            p2.increaseFuel();
        }
        else if (actions.action == "Quit Game") {
            console.clear();
            console.log("You lost the game. Try again.");
            process.exit();
        }
    } while (true);
}
// Calling the main function
await mainMenu();
