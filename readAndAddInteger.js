const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number between 1 and 10000: ", (input) => {
    const num = parseInt(input);
    const total = 0

    if (isNaN(num) || num < 1 || num > 10000) {
        console.log("Invalid number! Must be between 1 and 10000.");
    } else {
         while(num > 0){
             oneDigit = num % 10
             total = total + oneDigit
             num = num / 10

        }
        console.log(`the sum of ${num} is ${total}`)
    }



});
