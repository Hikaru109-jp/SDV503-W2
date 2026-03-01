console.log("Hellow World");
console.log("Hikaru Okano");

var name = "Hikaru"; // Function-scoped, hoisted - avoid in modern JS 古いバージョン
let age = 21; //Block-scoped, can be reassighed 　何回でも変更することができる
const PI = 3.14159;// block-scoped, cannot be reassighned　一度だけしか変更できない。

let score = 0;
console.log(score);
score = 10;
console.log(score);

const MAX = 100;
// MAX = 200;

let homeAddress = "Nikau Appartments"; // camelCase 最初の文字は小文字、その後の文字は大文字　スペース無し

let userAge = 49; 
console.log(userAge);