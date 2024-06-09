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
