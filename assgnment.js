function categorizeNumbers(...args) {
    const divisibleBy = args.pop();
    let found = false;
    for (const num of args) {
        if (num % divisibleBy === 0) {
            console.log(num);
            found = true;
        }
    }
    if (!found) {
        console.log("No divisible numbers found");
    }
}

categorizeNumbers(10, 15, 21, 30, 5);




