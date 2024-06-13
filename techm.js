//We can remove duplicates based on the name property using a Set to track names that have already been encountered.
const users = [
  {
    name: "Ravi",
    salary: "1000",
  },
  {
    name: "Loki",
    salary: "1000",
  },
  {
    name: "Adhi",
    salary: "1000",
  },
  {
    name: "Sanjay",
    salary: "1000",
  },
  {
    name: "Loki",
    salary: "1000",
  },
  {
    name: "Ravi",
    salary: "1000",
  },
  {
    name: "Sanjay",
    salary: "1000",
  },
];
console.log("Showing all users data");
console.log(users);
console.log(
  "Need to remove duplicates from above array of objects by using filter method."
);
const removeDuplicatsUsers = users.filter(
  (element, index) =>
    index ===
    users.findIndex(
      (obj) => obj.name === element.name && obj.salary === element.salary
    )
);
console.log(removeDuplicatsUsers);

const user = [
  { name: "Ravi", salary: "1000" },
  { name: "Loki", salary: "1000" },
  { name: "Adhi", salary: "1000" },
  { name: "Sanjay", salary: "1000" },
  { name: "Loki", salary: "1000" },
  { name: "Ravi", salary: "1000" },
  { name: "Sanjay", salary: "1000" },
];

console.log("Showing all users data");
console.log(user);

console.log("Removing duplicates using Set and filter");

const seen = new Set();
const uniqueUsers = user.filter((item) => {
  const key = item.name + item.salary;
  if (seen.has(key)) {
    return false;
  }
  seen.add(key);
  return true;
});

console.log(uniqueUsers);

console.log([] == []); // false
// Explanation: In JavaScript, arrays are reference types, so [] == [] compares the references, not the values.
// Since each [] is a different object in memory, the comparison returns false.

console.log({} == {}); // false
// Explanation: Similar to arrays, objects are also reference types. Therefore, {} == {} compares references.
// Since each {} is a different object in memory, the comparison returns false.

console.log(typeof []); // "object"
// Explanation: In JavaScript, arrays are a special type of object. Therefore, typeof [] returns "object".

// Difference between let and var
// var is function-scoped and can be re-declared. It does not have block scope.
// let is block-scoped and cannot be re-declared in the same scope. It is more predictable and safer to use.

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1);
}
// Output: 3 3 3
//Explanation: var is function-scoped, so the same i is referenced in each iteration. By the time the setTimeout callbacks are executed, i is 3.
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1);
}
// Output: 0 1 2
//Explanation: let is block-scoped, so a new i is created in each iteration of the loop.
// The setTimeout callbacks each reference the correct i from their respective iterations.
for (var i = 0; i < 3; i++) {
  (function (i) {
    setTimeout(function () {
      console.log("Immediately-invoked function expression");
      console.log(i);
    }, 1);
  })(i);
}
// Output: 0 1 2
//One common way to do this is by using an immediately-invoked function expression (IIFE).

//Program to Convert Currency from Indian Rupees (INR) to US Dollars (USD)
function convertINRtoUSD(inr, exchangeRate) {
  // Exchange rate should be the value of 1 INR in USD
  return inr * exchangeRate;
}

// Example usage:
let inrAmount = 1000;
let exchangeRate = 0.013; // Example exchange rate
let usdAmount = convertINRtoUSD(inrAmount, exchangeRate);
console.log(`${inrAmount} INR is equal to ${usdAmount} USD.`);
