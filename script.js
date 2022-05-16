// let message;
// const myBirthday = '01.10.2000'

// message = "Hello";
// alert(message);

// let admin;
// let name = "John";
// admin = name;

// alert(admin);

// let ourPlanet = 'Earth';
// let currentVisitor = 'John';

// console.log(23 + 59);

// let sequenceSum = 3 + 1 + 2 + 3 + 4 + 2;
// console.log(sequenceSum);

// let equation = (4 + 6 + 9) / 77;
// console.log(equation);

// let a = 10;
// console.log(a);
// console.log(9 * a);

// let b = 7 * a;
// console.log(b);

// const MAX = 57;
// let actual = MAX - 13;
// let percentage = actual / MAX;


// const name = "Chris";
// const greeting = `Hello, ${name}`;
// console.log(greeting);


// window.onload=function() {

//     const button = document.getElementById('buttonPress');

//     function greet() {
//         const name = prompt('What is your name?');
//         alert(`Hello ${name}, nice to see you!`);
//     }   

//     button.addEventListener('click', greet);
// }


// let txt = "Hello World!";
// txt = txt.toUpperCase();


// window.onload = function() {

//     let username = prompt("Give a username: ");
//     const PASS = "TheMaster";

//     if (username === "Admin") {

//         let userPass = prompt("Password?: ");

//         if (userPass === PASS) {
//             alert("Welcome");
//         } 

//         else if (userPass === null || userPass === "") {
//             alert("Cancelled");
//         } 

//         else {
//             alert("Wrong password!");
//         }

//     } 
    
//     else if (username === null || username === "") {
//         alert("Cancelled");
//     } 
    
//     else {
//         alert("That's my purse, I don't know you!");
//     }
// }

// function min(a, b) {
//     if (a > b) {
//         return b;
//     }
//     return a;
// }

// function pow(x ,n) {
//     let result = x
//     for (let i = 1; i < n; i++) {
//         result = result * x
//     }
//     return result;
// }

// console.log(pow(10, 2));

let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    () => { alert("You agreed."); },
    () => { alert("You canceled the execution."); }
  );