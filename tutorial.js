// console.log("hello");
// //data types
// var nme = 'hi'//string
// var isTrue = true;//boolean
// var val = 9;//Number
// var ud = undefined;
// var n = null;
// console.log(nme + isTrue + val + ud + n);

// //variables
// var lastName = "palsam's";//camelCase
// let firstName = "Manisha";
// const pi = 3.14;//constant cant change value


//user input
const prompt = require("prompt-sync")();
// import PromptSync from "prompt-sync";
// const promp2 = PromptSync() ;
const p = require('prompt-sync')()
prompt("hii ");
const name = prompt("What is your Name? ");
console.log("hello",name, "how are you?");



// //difference between var let const
// var a = 10;
// var b = 20;

// let b = 10;
// let b = 20; throw error js gets confused

// const c = 10;
// const c = 20;//error memory is locked cannot change 

//BEFORE USED ONLY FOR BROWSER
//commonJS//CAME IN 2009 WHEN NODEJS CAME USED AT SERVER SIDE TOO
//ES6 MODULES(COMMON CODE PRESENT)// CAME IN 2015 BY ECMA SCRIPT COMMITEE TO FLEXIBLE USE IN BROWSER AND SEREVRE