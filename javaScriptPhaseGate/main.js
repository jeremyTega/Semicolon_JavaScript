const {createAccount,transactions} = require('./BankAtm.js')
const prompt = require('prompt-sync')()

user_transaction = []
count = 0
while (true){

    user_balance = Number(prompt("enter user_balance: "))
    if (user_balance < 100){
        user_transaction.push(user_balance)
        console.log("Balance must be greater than N100.")

        continue}
        console.log(`your balance is ${createAccount(user_balance)}`)
        while (true){
            console.log(user_balance)
            withdrawal_amount = Number(prompt("Enter amount to withdraw (multiples of 500 or 1000): "))
            if (withdrawal_amount > user_balance){
                console.log("Insufficient funds. Please enter a valid amount.")
                continue}

                else if (withdrawal_amount % 500 !== 0 && withdrawal_amount % 1000 !== 0){
                console.log("Please enter an amount that is a multiple of 500 or 1000.")
                continue}
                else if (withdrawal_amount > 20000){
                console.log("The maximum amount you can withdraw at once is N20,000.")}

                else{
                    console.log(transactions(withdrawal_amount, user_balance))
                    to_continue = prompt('do you want to continue? ')
                    to_continue= to_continue.toLowerCase()
                    if (to_continue == "yes"){
                        continue
                    }else{

                    break}
}
}
}
