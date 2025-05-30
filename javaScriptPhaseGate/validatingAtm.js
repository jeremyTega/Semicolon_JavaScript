const prompt = require('prompt-sync')()

function findCardNumber(myCard){
 let cardIssuer = Number(prompt('enter card issuer, enter 1 for visa, 2 for MasterCard, 3 for america Express or 4 for discovery '));
 if(cardIssuer <=0 || cardIssuer > 4){
     console.log("enter a number From 1-4")
}

 let defaultCard ={
     valid:false,
     reason:"none"
}
 if(cardIssuer === 1){
     for(i = 0; i < myCard.length; i++){
             if(myCard.length  < 16){
              defaultCard.reason = "invalid length"
            }else if(myCard[0] != 4){
                defaultCard.reason = "invalid card"
                break

            }else{
                delete defaultCard.reason;
               defaultCard.valid = true
               defaultCard.issuer = "Visa"



            }


         }
    }

    if(cardIssuer === 2){
        for(i = 0; i < myCard.length; i++){
            if(myCard.length  != 16){
                 defaultCard.reason = "invalid length"
            }else if(myCard[0] != 5){
                defaultCard.reason = "invalid card"

            }else{
                delete defaultCard.reason;
                defaultCard.valid = true
                defaultCard.issuer = "MasterCard"


            }


        }
    }
    if(cardIssuer === 3){
    for(i = 0; i < myCard.length; i++){
        if(myCard.length  != 16){
             defaultCard.reason = "invalid length"
        }else if(myCard[0] != 6){
            defaultCard.reason = "invalid card"

        }else{
            delete defaultCard.reason;
            defaultCard.valid = true
            defaultCard.issuer = "Discovery"


        }


}
    }


    if(cardIssuer === 4){
for(i = 0; i < myCard.length; i++){
    if(myCard.length  != 15){
        defaultCard.reason = "invalid length"
    }else if(myCard[0] != 5){
         defaultCard.reason = "invalid card"

    }else{
        delete defaultCard.reason;
        defaultCard.valid = true
        defaultCard.issuer = "American express"


    }


}
    }


     return defaultCard




}





console.log(findCardNumber([5,2,3,4,5,6,7,8,9,2,3,4,5,3,2,4]))
//const result = input.replace(/\D/g, '');

// let myCard = [1,2,3,4,5,6]
//
// // for(i = 0; i < myCard.length; i++){
// //     console.log(myCard[0])
//
//
// }
// for(let num of myCard){
//     console.log(myCard[0])
//
// }
