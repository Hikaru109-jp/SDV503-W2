// console.log("Hellow World");
// console.log("Hikaru Okano");

// var name = "Hikaru"; // Function-scoped, hoisted - avoid in modern JS 古いバージョン
// let age = 21; //Block-scoped, can be reassighed 　何回でも変更することができる
// const PI = 3.14159;// block-scoped, cannot be reassighned　一度だけしか変更できない。

// let score = 0;
// console.log(score);
// score = 10;
// console.log(score);

// const MAX = 100;
// // MAX = 200;

// let homeAddress = "Nikau Appartments"; // camelCase 最初の文字は小文字、その後の文字は大文字　スペース無し

// let userAge = 49; 
// console.log(userAge);

// console.log(typeof homeAddress);

// console.log(5+3);

// console.log(8/2);
// console.log(9 % 2);

// console.log(2**3);
// console.log(5 == 5);
// console.log(5 === 5);
// console.log(5 == "5");
// console.log(5 !== 5); 



const msg = "Hello, JavaScript!"

console.log("The length of mesg is = " + msg.length)
console.log(msg.toUpperCase())
console.log(msg.replace("Hello", "hi"))

msg.length //18
msg.toUpperCase() //"Hello, JAVASCRIPT!"
msg.toLowerCase() //"hello, javascript!"
msg.includes("Java") //true
msg.startsWith("He") //true
msg.indexOf("Java") //7
msg.slice(7, 17) //"JavaScript"
msg.replace("Hello", "Hi") //("Hi, JavaScript!")
msg.split(", ") //["Hello", "JavaScript"]
" hi ".trim() //"hi"



console.log(`The length of msg is = ${msg.length}`) //new version use this!!
const name = "Ali";
const age = 25;

// Old way - concatenation (error-prone)
const msg1 = "Hello, " + name + "! You are " + age + "years old.";

// New way - template literal (clean and readable)
const msg2 = `Hello, ${name}! You are ${age} years old.`;

// //Multi-line strings
// const html = 
//     <div class="card">
//         <h2>${name}</h2>
//         <p>Age: ${age}</p>
//     </div>
//     ;

// // Any expression works inside ${}
// const total = `Price: ${12.99 * 3}.toFixed(2)}`; //"Price: 38.97"