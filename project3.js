const prompt  = require('prompt-sync')()

function printInfo(){
    console.log("Contact Management System");
    console.log("------------------------");
    console.log("1. Add a Contacts");
    console.log("2. Delete a Contacts");
    console.log("3. View a Contacts");
    console.log("4. Search a Contacts");
    console.log("5. Exit");
}


function addContact(){
    const name = prompt("Name: ");
    const email = prompt("Email: ");
    const contact = {
        name: name,
        email: email
    }
    contacts.push(contact);
    console.log("Added");
}
function deleteContact(){
    console.log("Contact IDs");
    for(let i = 0; i < contacts.length; i++ ){
        const contact = contacts[i];
        console.log((i + 1).toString() +":", contact.name);
    }
    const number = parseInt(prompt("Enter an ID: "));
    if(isNaN(number) || (number < 0 || number > contacts.length)){
        console.log("Invalid");
        return;
    }
    contacts.splice(number - 1,1);
    console.log("Removed");
}

function searchContact(){
    const searchString = prompt("Serach: ").toLowerCase();
    const results = [];
    for(let contact of contacts){
        if(contact.name.toLowerCase().includes(searchString)){
            results.push(contact);
        }
    }
    listContacts(results);
}

function listContacts(contacts){
    //console.log(contacts);
    for(let contact of contacts){//iterate by item
        console.log("##########");
        console.log('Name:',contact.name);
        console.log('Email:',contact.email);
    }
    // for(let i = 0; i < contacts.length; i++){
    //     console.log(contacts[i]);
    // }
}
printInfo();


const contacts = [];

let keepGoing = true;
while(keepGoing){
    const number = prompt("Enter an operation (1-5)");

    switch(number){
        case "1":
            addContact();
            break;
    
        case "2":
            deleteContact();
            break;
    
        case "3":
            listContacts(contacts);
            break;
    
        case "4":
            searchContact();
            break;
    
        case "5":
            keepGoing = false;
            break;
                     
        default:
            console.log("Unknown");
            break;
    
     }
}


// //arrays
// //IMPORTANT ARRAYS CONTENT ARE MUTABLE(CHANGEABLE) IE IT ADDRESS CANT BE CHANGED SINCE IT IS CONSTANT BUT CONTENT PRESENT HEAP CAN BE CAHNGED
// // slice(): Extracts and returns a part of the array without modifying the original array.
// // splice(): Modifies the original array by removing or adding elements, and returns the removed elements.

// const arr = [1,2,4,5];
// arr = [5,6,7];// invalid
// arr[0] = 9;

// arr.push(10);

// console.log(arr);

// arr.pop();

// console.log(arr);

// const arr3 = arr.splice(3,2);//splice( from index,no of elements to remove)
// console.log(arr3);


// const arr1 = arr.slice(0,2);//array.slice(startIndex(inclusive), endIndex(exclusive));return new array without modifying original array

// console.log(arr1);

// console.log(arr);

//  //An object in JavaScript is a collection of key-value pairs.
// // Keys are labels (like name, email), and values are the data associated with those keys (like "Tim", "abc@gmail.com").
// // You can access the values of an object using dot notation (object.name) or bracket notation (object["email"]).
// // Objects can store different types of data like strings, numbers, arrays, etc.

// const object = {
//     marks:[1,2,3],//Using quotes is more common when the key has special characters or spaces
//     name : "Tim",
//     "Father's Name" : "Jhon",
//     email : "abc@gmail.com",
//     "phone":8976194672
// }

// //access objects
// console.log(object["Father's Name"]);

// console.log(object.name);

// //modify values
// object["marks"][2] = 4;
// console.log(object.marks);

// //modify values
// object.marks[2] = 9;
// console.log(object.marks);

// let man;
// console.log(man);//undefined


// const person1 = { name: "John", age: 30 };
// console.log(typeof  person1);  // Outputs: "object"

// console.log(typeof  arr.push);//"function"

// console.log(typeof  typeof arr.push);//"string"

// console.log(typeof arr.push());//"number"

// console.log(typeof typeof arr.push());//string

// console.log(typeof arr.slice);//"function"

// console.log(typeof arr.slice());//"object"

// const person2 = { name: "John", age: 30 };
// console.log(typeof typeof person2);  // Outputs: "string"

// //for loop
// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

// includes() checks if a value exists in an array or a string.
// It returns true if the value/substring is found, otherwise false.

// const fruits = ["banana","grapes","apple"];
// console.log(fruits.includes("banana",0));