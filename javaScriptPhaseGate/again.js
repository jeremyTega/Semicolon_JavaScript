
const { createAccount, transactions } = require('./BankAtm');
const prompt = require('prompt-sync')()

let userBalance = 0;

while (true) {

    let balanceInput = prompt("Enter initial balance  ");
    userBalance = parseFloat(balanceInput);

    if (isNaN(userBalance) || userBalance < 100) {
        console.log("Invalid input. Balance must be a number greater than ₦100.");
        continue;
    }


    createAccount(userBalance);
    console.log(`Account created with balance: ₦${userBalance}`);


    while (true) {
        console.log(`Current balance: ₦${userBalance}`);
        let withdrawalInput = prompt("Enter amount to withdraw (₦500 or ₦1000 multiples): ");
        let withdrawalAmount = parseFloat(withdrawalInput);


        if (isNaN(withdrawalAmount)) {
            console.log("Invalid input. Please enter a valid number.");
            continue;
        }

        if (withdrawalAmount % 500 !== 0 && withdrawalAmount % 1000 !== 0) {
            console.log("Please enter an amount that is a multiple of ₦500 or ₦1000.");
            continue;
        }

        if (withdrawalAmount > 20000) {
            console.log("The maximum amount you can withdraw at once is ₦20,000.");
            continue;
        }


        let transactionMessage = transactions(withdrawalAmount, userBalance);
        console.log(transactionMessage);


        userBalance -= withdrawalAmount;

        // Ask if user wants to continue
        let continueInput = prompt("Do you want to continue? (yes/no): ").toLowerCase();
        if (continueInput !== 'yes') {
            break;
        }
    }


    let createNewAccount = prompt("Do you want to create another account? (yes/no): ").toLowerCase();
    if (createNewAccount !== 'yes') {
        console.log("Thank you for using the ATM. Goodbye!");
        break;
    }
}
