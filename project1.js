const prompt = require("prompt-sync")();
const name = prompt("What is your Name? ");
console.log("Hello", name, "Welcome to our game");

const shouldWePlay = prompt('Do You Want to play? ');

/*
== loose comarison(type ignored) 7 == "7"
=== ("1" === 1 false) always use this
!= ("1" != 1 false)
!== ("1" !== 1 true)
>
<
>=
<=
*/
const condition = shouldWePlay.toLowerCase() === "yes";
//console.log(condition);

if(condition){
   console.log("Okay We will play!"); 
   //Game logic
   const leftOrRight = prompt("You enter a maze, do you want to go left or right? ");
    if(leftOrRight === "left"){
        console.log("You go left and see a bridge");
        const cross = prompt("Do You want to cross bridge? ").toLowerCase();
        if(cross === "yes" || cross === "y" || cross === "ok"){
            console.log("You cross but the bridge is weak and broke and you lost...");
        }else{
            console.log("Good choice... you win");
        }
    }else{
        console.log("You go right and fall of a cliff...");
    }
}
else if(shouldWePlay.toLocaleLowerCase() === "no"){
    console.log("Okay :(");
}
else{
    console.log("Invalid input....");
}

//logical operators
// && and
// ||  or
// ! not