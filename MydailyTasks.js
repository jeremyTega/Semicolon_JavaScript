 const prompt = require('prompt-sync')()
// let var1 = 50
// let var2 = 60
// let var3 = 80
//
// let  temp = 0
//
// //temp = var1
// var1 = var2
// var2 = var3
// var3 = temp
//
// // console.log(var1)
// // console.log(var2)
// // console.log(var3)
//
// const name = prompt('What is your name? ');
// console.log(`Hello, ${name}!`);
//




 // let leftOperand = Number(prompt('Enter a number').trim());
 // let rightOperand = Number(prompt('Enter a number').trim());
 // let operator = prompt("Choose + to add, - to subtract, * to multiply, / to divide").trim();
 // let ans;
 //
 // switch (operator) {
 //     case "+":
 //         ans = leftOperand + rightOperand;
 //         break;
 //     case "-":
 //         ans = leftOperand - rightOperand;
 //         break;
 //     case "*":
 //         ans = leftOperand * rightOperand;
 //         break;
 //     case "/":
 //         ans = leftOperand / rightOperand;
 //         break;
 //     default:
 //         ans = "NaN";
 // }
 //
 // console.log(ans);



 // function findSecondLargest(arr) {
 //     let first = -Infinity;
 //     let second = -Infinity;
 //
 //     for (let num of arr) {
 //         if (num > first) {
 //             second = first;
 //             first = num;
 //         } else if (num > second && num !== first) {
 //             second = num;
 //         }
 //     }
 //
 //
 // }



 //const arr = [9,6,8,11,13, 12]
 const arr =[20,15,6,14,1]


     let first = 0;
     let second = 0;

     for (let num of arr) {
         if (num > first) {
             second = first;
             first = num;
         } else if (num > second && num !== first) {
             second = num;
         }
     }

     console.log(`the largest is ${first}`)
     console.log(`the second largest is ${second}`)





