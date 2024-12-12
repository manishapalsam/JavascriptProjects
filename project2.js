const  prompt = require('prompt-sync')();

//functions are technically objects
function getNumber(numberString){
    while(true){
        number = parseFloat(prompt("Enter Number " + numberString +": "));
       if(isNaN(number)){
           console.log("Invalid input");
       }else {
        return number;
       }
   }
}

let number1 = getNumber('One');//global scope
let number2 = getNumber('Two');


const operator = prompt("Enter Sign: ");

let result;//undefined assign just later i will give value
let valid = true;
switch(operator){
 case "+":
    result = number1 + number2;//"hello" + 1 = NaN
    break;

    case "-":
    result = number1 - number2;
    break;

    case "/":
        if(number2 === 0){
            valid = false;
            console.log("Zero division error");
        }
    result = number1 / number2;// 9/0=infinity
    break;

    case "%":
    result = number1 % number2;
    break;

    case "*":
    result = number1 * number2;
    break;

    default:
        console.log("Invalid");
        valid = false;
        break;
}
if(valid){
    console.log(number1, operator, number2, "=", result);
}



console.log(typeof getNumber);//"function"

