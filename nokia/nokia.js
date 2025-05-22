const prompt = require("prompt-sync")()
const function = require ("./functionNokia.js")

function mainMenu() {
    const userInput = prompt(`
    =====================================
    WELCOME TO TEGA'S PHONE
    =====================================

    MAIN MENU

    1  -> Phone Book
    2  -> Messages
    3  -> Chat
    4  -> Call Register
    5  -> Tones
    6  -> Settings
    7  -> Call Divert
    8  -> Games
    9  -> Calculator
    10  -> Reminder
    11  -> Clock
    12  -> Profiles
    13  -> SIM Services
    0  -> Exit

    =====================================
    Kindly enter your choice below:
    =====================================
    `);

    if (userInput === null) {
        console.log("Goodbye!");
        return;
    }

    switch (userInput) {
        case "1":
            function.PhoneBook();
            break;
        case "2":
            Messages();
            break;
        case "3":
            Chat();
            break;
        case "4":
            CallRegister();
            break;
        case "5":
            Tones();
            break;
        case "6":
            Settings();
            break;
        case "7":
            CallDivert();
            break;
        case "8":
            Games();
            break;
        case "9":
            Calculator();
            break;
        case "10":
            Reminder();
            break;
        case "11":
            Clock();
            break;
        case "12":
            Profiles();
            break;
        case "13":
            SimServices();
            break;
        case "0":
            console.log("Goodbye!");
            break;
        default:
            console.log("Invalid input. Please enter a number between 0 and 13.");
    }
}
/*
function PhoneBook() {
    console.log("Opening Phone Book...");
}

function Messages() {
    console.log("Opening Messages...");
}

function Chat() {
    console.log("Opening Chat...");
}

function CallRegister() {
    console.log("Opening Call Register...");
}

function Tones() {
    console.log("Opening Tones...");
}

function Settings() {
    console.log("Opening Settings...");
}

function CallDivert() {
    console.log("Opening Call Divert...");
}

function Games() {
    console.log("Opening Games...");
}

function Calculator() {
    console.log("Opening Calculator...");
}

function Reminder() {
    console.log("Opening Reminder...");
}

function Clock() {
    console.log("Opening Clock...");
}

function Profiles() {
    console.log("Opening Profiles...");
}

function SimServices() {
    console.log("Opening SIM Services...");
}*/


mainMenu();





