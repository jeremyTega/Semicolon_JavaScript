// whrite a program which have a collection and user answer thoes question with answer
// give the user  two trials in each question they fail to answer
// 10 question in size
// each question have about 4 answer
// the user should put in the question they want to answer
// the question should be shugffed meaning not coming from the same format always
// the result after the question should be displayed their scores and also the once they miss display the correct answer and the question
// the program should have the question already
////     for q in questions:
//         print("Question:", q["question"])
//         for idx, option in enumerate(q["option"], start=1):
//             print(f"Option {idx}: {option}")
//             print("Answer:", q["answer"])
//             print()
//
//
/*
 const prompt = require('prompt-sync')()
// function getRandom() {
//     return Math.floor(Math.random() * 10)
// }
question = [{"question":"what is 1 + 1","option":[1,2,3,4], "answer":2}]



//userQuestion = prompt
const questions = [question1 = {"question": "what is 1 + 1", "option": [1, 2, 3, 4], "answer":"B"}]
console.log(questions[0].answer)

// const questions = [
//     { question: "what is 1 + 1", option:{"a":2,"b":4}, answer: 2 }
// ];

// questions.forEach(q => {
//     console.log(`Question: ${q.question}`);
//     console.log(`Options: ${q.option.join(', ')}`);
//     console.log(`Answer: ${q.answer}`);
// });
for (const q of questions) {
    console.log(`Question: ${q.question}`);
    console.log(`Options:A= ${q.option[0]}`);
    console.log(`Options:B= ${q.option[1]}`);
    console.log(`Options:C= ${q.option[2]}`);
    console.log(`Options:D= ${q.option[3]}`);
    //console.log(`Answer: ${q.answer}`);
}
const userAnser = prompt("choose either A,B,C,D")
    userAnser.toUpperCase()
if(userAnser !==question[0].answer){
    console.log("wrong answer")
}else{
    console.log("correct answer")
}




*/



const prompt = require('prompt-sync')();

function allQuestions() {
    return [
        { question: "What is 1 + 1?",
            options: [1, 2, 3, 4],
            answer: "B"

        },

        { question: "What is the capital of Nigeria?",
            options: ["Lagos", "Jos", "Semicolon", "Abuja"],
            answer: "D"

        },
        { question: "Has Arsenal won the Champions League?",
            options: ["Yes", "No", "IDK", "It doesn't concern me"],
            answer: "B"

        },
        { question: "Who is the president of Nigeria?",
            options: ["Obi", "Tega", "Tinubu", "Obasanjo"],
            answer: "C"

        },
        { question: "What is 7 + 6?", options:
            [10, 39, 88, 13],
            answer: "D"

        },
        { question: "What is 50 / 10?",
            options: [5, 10, 1, 20],
            answer: "A"

        },
        { question: "Which color is in the Nigerian flag?",
            options: ["Green", "Yellow", "Blue", "Black"],
            answer: "A"

        },
        { question: "What is CSS?", options:
            ["HTML", "Java", "Python", "CSS"],
            answer: "D"

        },
        { question: "What is 2 + 1?",
            options: [5, 3, 1, 20],
            answer: "B"

        },
        { question: "What is 10 * 10?",
            options: [500, 300, 100, 1000],
            answer: "D"

        }
    ];
}

function askQuestion(index) {
    const questions = allQuestions();
    const question = questions[index];
    let attempts = 0;
    let isCorrect = false;

    console.log("\n==== Question ====");
    console.log(question.question);
    console.log(`A: ${question.options[0]}`);
    console.log(`B: ${question.options[1]}`);
    console.log(`C: ${question.options[2]}`);
    console.log(`D: ${question.options[3]}`);

    while (attempts < 3 && !isCorrect) {
        let userAnswer = prompt("Choose Answer (A, B, C, D) or type 'exit' to quit: ").toUpperCase();

        if (userAnswer === 'EXIT') {
            console.log("Exiting the game. Goodbye!");
            break
        }

        while (!["A", "B", "C", "D"].includes(userAnswer)) {
            console.log("Invalid choice. Please choose A, B, C, or D.");
            userAnswer = prompt("Choose Answer (A, B, C, D) or type 'exit' to quit: ").toUpperCase();
        }

        if (userAnswer === question.answer) {
            console.log("Correct!\n");
            isCorrect = true;
        } else {
            attempts++;
            if (attempts < 3) {
                console.log(`Incorrect. You have ${3 - attempts} attempts left.\n`);
            } else {
                console.log("Incorrect. Moving to the next question.\n");
            }
        }
    }

    return isCorrect;
}

function startGame() {
    const totalQuestions = 10;
    let score = 0;
    let answeredQuestions = [];
    let availableQuestions = [1,2,3,4,5,6,7,8,9,10]

    console.log("\n==== Welcome to the Quiz Game! ====\n");

    while (availableQuestions.length > 0) {
        console.log(`Available Questions: ${availableQuestions.join(", ")}`);
        let questionIndex;

        do {
            questionIndex = parseInt(prompt(`Choose a question number (${availableQuestions.join(", ")}): `)) - 1;
            if (isNaN(questionIndex) || !availableQuestions.includes(questionIndex + 1)) {
                console.log("Invalid choice. Please choose a valid question number.");
                questionIndex = null;
            }
        } while (questionIndex === null);

        availableQuestions = availableQuestions.filter(q => q !== questionIndex + 1);
        const isCorrect = askQuestion(questionIndex);
        if (isCorrect) {
            score++;
        }
    }

    console.log(`\nGame Over! Your final score is: ${score} out of ${totalQuestions}`);
}

startGame();



