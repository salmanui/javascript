//var example with global scope, function scope and hoisted
var a;
console.log(a);
a = 10;
console.log(a); //output 10
var text = "I am Mohammad Salman";
console.log(text);
var textnull = null;
console.log(textnull);
function varExample() {
  var a = 15;
  console.log(a);
  if (a === 15) {
    var a = a + 2;
    console.log(a);
  }
}
varExample();
//String Example
function exampleString() {
  var text = "I am Mohammad Salman";
  console.log(text);
  if (text === "I am Mohammad Salman") {
    var text = "Hello" + " " + text;
    console.log(text);
  }
}
exampleString();

//let example block scope and function scope

let x = 5;
console.log(x); //5

if (x === 5) {
  let x = 10; //x is block scoped
  //   let x = a + 2; Here x is already declared
  console.log(x);
}
console.log(x); // 5 outside of x is unchanged
let y = 15;
console.log(y);
function letScoped() {
  let y = 25;
  //   let y = 20; Here x is already declared
  console.log(y);
}
letScoped();
console.log(y); // 15 outside of x is unchanged

//const example block and function scoped

const b = 10;
// b = 15; // Type Error Assigment to const variable
console.log(10);

{
  const j = "john";
  console.log(j, "" + "", "Block Scoped");
}
const j = "deo";
console.log(j);
{
  const j = "john";
  //   const j = "deo";
}
function sum(num1,num2){
  let sumNum = num1+num2;
  console.log(sumNum);
}
sum(4,5);

let array = [2,8,7,10,20,55];
let maxArray = Math.max(...array);
console.log(maxArray);

let str = "racecar";
let isPalindrome = str.split("").reverse().join("");
if(str === isPalindrome){
  console.log(str, "is a Palindrome");
}else{
  console.log(str, "is not Palindrome");
}

let string = "Sameeya";
let strReverse = string.split("").reverse().join("");
console.log(strReverse);

function factorial(number){
 if(number === 0 || number === 1){
   return 1;
 }else{
   return number*factorial(number-1);
 }
}
console.log(factorial(4));

function primeNum(num) {
for(let i = 2; i<Math.sqrt(num);i++){
  if(num% i === 0){
    console.log(num,"is not a prime number");
    return;
  }
}
console.log(num, "is prime number");
}
primeNum(101);
