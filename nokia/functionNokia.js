


function PhoneBook() {
    while (true) {
        const phoneBookInput = prompt(`
        1  - Search
        2  - Service Nos
        3  - Add Name
        4  - Erase
        5  - Edit
        6  - Assign Tone
        7  - Send b'card
        8  - Options
        9  - Speed dial
        10 - Voice tags
        11 - Enter 0 to go back to previous menu
        `);

        if (phoneBookInput > 10 || phoneBookInput < 0) {
           console.log("enter a valid input")
           continue
        }

        switch (phoneBookInput) {
            case "0":
                mainMenu();
                break;
            case "1":
                console.log("Search");
                promptReturn();
                break;
            case "2":
                console.log("Service Nos");
                promptReturn();
                break;
            case "3":
                console.log("Add Name");
                promptReturn();
                break;
            case "4":
                console.log("Erase");
                promptReturn();
                break;
            case "5":
                console.log("Edit");
                promptReturn();
                break;
            case "6":
                console.log("Assign Tone");
                promptReturn();
                break;
            case "7":
                console.log("Send b'card");
                promptReturn();
                break;
            case "8":
                optionEight();
                break;
            case "9":
                console.log("Speed dial");
                promptReturn();
                break;
            case "10":
                console.log("Voice tags");
                promptReturn();
                break;
            default:
                console.log("Invalid input");
        }
    }
}

function promptReturn() {
    const enterNumber = prompt("Enter 0 to go back to previous menu");
    if (enterNumber === "0") {
        PhoneBook();
    } else {
        console.log("Invalid number");
    }
}

function optionEight() {
    console.log("Options");
    promptReturn();
}

function mainMenu() {

    console.log("Returning to main menu...");
}


