let account = 0;

function createAccount(user_balance) {
    if (user_balance <= 100) {
        console.log("Balance must be greater than N100.");
    } else {
        account = user_balance;
    }
    return account;
}

function transactions(withdrawal_amount, account) {
    if (withdrawal_amount % 500 !== 0 && withdrawal_amount % 1000 !== 0) {
        console.log("Please enter an amount that is a multiple of 500 or 1000.");
            } else if (withdrawal_amount > account) {
                console.log("Insufficient funds. Please enter a valid amount.");
            } else if (withdrawal_amount > 20000) {
        console.log("The maximum amount you can withdraw at once is N20,000.");
    } else {
        account = account - withdrawal_amount - 100;
        console.log(`Transaction successful. You withdrew ${withdrawal_amount}.`);
                console.log("Withdrawal fee is: N100");
                console.log(`Transaction successful. Your new balance is N${account}.`);
    }
    return account;
}

module.exports = {
    createAccount,
    transactions
};
