const prompt = require('prompt-sync')()
function getRandom() {
    return Math.floor(Math.random() * 100)
}

let num1;
let num2;


let numberOfQuestion  = 0
let AskQuestion = 1
let finalScore = 0


    while(numberOfQuestion != 10){
        let userLife = 2
        num1 = getRandom()
        num2 = getRandom()
        let question;
        let answer = num1 - num2

            while(true){
                if(userLife === 0){
                    break
                }
                    if(num2 > num1){
                        question = Number(prompt(`Question ${AskQuestion} what is the answer : ${num2} - ${num1}: `))
                        answer = num2 - num1

                    }else(
                        question = Number(prompt(`Question${AskQuestion} what is the answer : ${num1} - ${num2}: `))

                    )
                        if(question !== answer ){
                            userLife = userLife - 1
                            }else if( question === answer){

                                finalScore++
                                break
                            }

            }
                AskQuestion++
            numberOfQuestion++
    }

    console.log(`your final score is ${finalScore}`)



