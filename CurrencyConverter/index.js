import inquirer from "inquirer";
// Define exchange rates 
const exchangeRates = {
    USD: 1.0,
    EUR: 0.85,
    GBP: 0.75,
    JPY: 110.0,
};
// Function to perform currency conversion
function convertCurrency(amount, fromCurrency, toCurrency) {
    if (fromCurrency === toCurrency) {
        return amount;
    }
    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];
    if (fromRate !== undefined && toRate !== undefined) {
        return (amount * toRate) / fromRate;
    }
    else {
        throw new Error("Invalid currency code.");
    }
}
async function main() {
    const userCurrency = await inquirer.prompt({
        type: "input",
        message: "Enter the amount in your currency:",
        name: "amount",
    });
    const fromCurrencyResponse = await inquirer.prompt({
        type: "input",
        message: "Enter the currency code you are converting from (e.g., USD):",
        name: "fromCurrency",
    });
    const toCurrencyResponse = await inquirer.prompt({
        type: "input",
        message: "Enter the currency code you want to convert to (e.g., EUR):",
        name: "toCurrency",
    });
    const amount = parseFloat(userCurrency.amount);
    const fromCurrency = fromCurrencyResponse.fromCurrency.toUpperCase();
    const toCurrency = toCurrencyResponse.toCurrency.toUpperCase();
    if (isNaN(amount) || !exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
        console.log("Invalid input. Please check your currency codes and try again.");
    }
    else {
        const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
        console.log(`Converted amount: ${convertedAmount.toFixed(2)} ${toCurrency}`);
    }
}
main();
