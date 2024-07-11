# JavaScript Common Interview questions

### 1. What is the difference between var,let and const?

var is function-scoped and variables can be redeclared and updated.
let is block-scoped and variables can be updated but not redeclared.
const is also block-scoped and variables cannot be updated or redeclared.


### 2. What are the data types in Javascript?

In Javascript we have two types of data types where as primitive data types and non primitive data types.
In primitive data types we have:

###### string
###### number
###### boolean
###### null
###### undefined
###### symbol

other hand we have:

###### objects
###### arrays
###### functions

### 3. What is the difference between null and undefined?

###### Null

In Javascript null represents the intentional absence of any object value.

###### Undefined

In Javascript undefined represents the absence of value or the value has not been assigned yet.

### 4. What is the difference between == and === operators?

== checks for equality of values after type coercion, while === checks for equality of values without type coercion also know as strict equality.

### 5. What is closure in javascript?

In Javascript closure is a function defined inside another function and has access to the outer function's variables. It has access to it's own scope, the outer function's scope and the global scope.

```javascript
function createCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
```

```javascript
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const multiplyNumber = multiply(2)(5);
console.log(multiplyNumber);
```

### 6. What is event delegation in javascript?

Event delegation is a technique where you attach an event listener to a parent element instead of multiple child elements. It will handle it based on the target element.

```html
<ul id="parent-list">
  <li class="item">Item 1</li>
  <li class="item">Item 2</li>
  <li class="item">Item 3</li>
</ul>
```

```javascript
// Select the parent element
const parentList = document.getElementById("parent-list");

// Attach a single event listener to the parent element
parentList.addEventListener("click", function (event) {
  // Check if the clicked element has the class 'item'
  if (event.target && event.target.matches("li.item")) {
    console.log("Item clicked:", event.target.textContent);
  }
});
```

### 7. What is callback function?

A callback function is a function passed as an arguments to another function to be executed later. It is commonly used in asynchronous programming and event handling.

```javascript
// Function that takes a callback as a parameter
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

// Callback function
function sayGoodbye() {
  console.log("Goodbye!");
}

// Calling the function with a callback
greet("Sameeya", sayGoodbye);
```

### 8. Explain the concept of hoisting?

Hosting is a javascript mechanism where variables and function declarations are moved to the top of their containing scope during the compilations phase,before the code execution.

```javascript
console.log(myVar); // Output: undefined
var myVar = 5;
console.log(myVar); // Output: 5

myFunction(); // Output: "Hello, World!"

function myFunction() {
  console.log("Hello, World!");
}
```

### 9. What is event bubbling and capturing in javascript?

Event bubbling is the process where the event starts at the inner most traget element and then bubbles up the DOM hierachy until it reachs to the root element.
Event capturing is the oppsite, where the event starts at the root element and then trickles down to the traget element.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Event Bubbling and Capturing</title>
</head>
<body>
  <div id="parent">
    Parent
    <button id="child">Child</button>
  </div>

  <script>
    // Event listener for the parent div (capturing phase)
    document.getElementById("parent").addEventListener("click", function() {
      console.log("Parent element clicked (capturing)");
    }, true); // true indicates capturing phase

    // Event listener for the child button (capturing phase)
    document.getElementById("child").addEventListener("click", function() {
      console.log("Child element clicked (capturing)");
    }, true); // true indicates capturing phase

    // Event listener for the parent div (bubbling phase)
    document.getElementById("parent").addEventListener("click", function() {
      console.log("Parent element clicked (bubbling)");
    }, false); // false indicates bubbling phase

    // Event listener for the child button (bubbling phase)
    document.getElementById("child").addEventListener("click", function() {
      console.log("Child element clicked (bubbling)");
    }, false); // false indicates bubbling phase
  </script>
</body>
</html>
```

### 10. Explain the this keyword in javascript?

this keyword refers to the object to which a function or method belongs, depending on how the function is called.It can change its value based on how a function is invoked.

### 11. What is a promise in javascript?

A promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to handle asynchronous operations more elegently then using callbacks and provides methods for handling success and failure.

```javascript
// Function that returns a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    console.log("Fetching data...");

    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {
      let success = true; // Change this to false to simulate an error

      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error fetching data!");
      }
    }, 2000); // Simulate a 2-second delay
  });
}

// Consuming the Promise
fetchData()
  .then((message) => {
    console.log(message); // Output: "Data fetched successfully!" after 2 seconds
  })
  .catch((error) => {
    console.log(error); // Output: "Error fetching data!" if success is false
  });
```

### 12. What is the async/await feature in javascript?

In javascript async/await is a syntatic for writing asynchronous code like synchronous manner. async functions return a promise, and await can be used inside the functions to pause the execution until the promise is resolved.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Async/Await Example</title>
</head>
<body>
  <div id="user-container">
    <h1>User List</h1>
    <ul id="user-list"></ul>
  </div>

  <script>
    // Async function to fetch and display user data
    async function fetchAndDisplayUsers() {
      try {
        // Fetch data from the API
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        // Check if the request was successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Parse the JSON data
        const users = await response.json();

        // Get the user list element
        const userList = document.getElementById('user-list');

        // Clear any existing content
        userList.innerHTML = '';

        // Iterate over the user data and create list items
        users.forEach(user => {
          const listItem = document.createElement('li');
          listItem.textContent = `Name: ${user.name}, Email: ${user.email}`;
          userList.appendChild(listItem);
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    // Call the async function to fetch and display users
    fetchAndDisplayUsers();
  </script>
</body>
</html>
```

### 13. What is the spread operator in javascript?

The spread operator(...) allows an iterable like array or string to be expanded into individual elements.
It is commonly used for array literals,function arguments, and object literals.

```javascript
// Examples
// 1. Copying Arrays
// The spread operator can create a shallow copy of an array.

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // Output: [1, 2, 3]

// 2. Merging Arrays
// You can merge multiple arrays into one using the spread operator.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];

console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// 3. Converting Array-like Objects to Arrays
// The spread operator can convert array-like objects (such as NodeLists or arguments objects) into arrays.

function sum() {
  const args = [...arguments];
  return args.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3)); // Output: 6

// 4. Function Arguments
// The spread operator allows you to pass an array as individual function arguments.

function add(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
console.log(add(...numbers)); // Output: 6

// 5. Copying Objects
// You can create a shallow copy of an object using the spread operator.

const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };

console.log(copiedObject); // Output: { a: 1, b: 2 }

// 6. Merging Objects
// You can merge multiple objects into one using the spread operator.

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObject = { ...obj1, ...obj2 };

console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }
```

#### 14. In JavaScript what is the purpose of map() method?
In javascript map() is a method of the Array object. It creates a new array by calling a function on every element of the original array and storing the results in a new array

```javascript
// Array of objects
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

// Using map() to create a new array with just the names
const userNames = users.map(user => user.name);

console.log(userNames); // Output: ['Alice', 'Bob', 'Charlie']

```

#### 15.  In JavaScript what is the purpose of filter() method?
 The filter() method creates a new array filled with elements that pass a test provided by a function. The filter() method does not execute the function for empty elements.

 ```javascript
 // Array of product objects
const products = [
    { id: 1, name: 'Laptop', inStock: true, price: 1000 },
    { id: 2, name: 'Phone', inStock: false, price: 500 },
    { id: 3, name: 'Tablet', inStock: true, price: 300 },
    { id: 4, name: 'Monitor', inStock: false, price: 150 },
    { id: 5, name: 'Keyboard', inStock: true, price: 50 }
];

// Using filter() to get products in stock and map() to get their names
const productNamesInStock = products
    .filter(product => product.inStock)
    .map(product => product.name);

console.log(productNamesInStock); // Output: ['Laptop', 'Tablet', 'Keyboard']

 ```

####  16. In JavaScript what is the purpose of reduce() method? 
 In javascript reduce() is a higher order function used in data manipulation that reduces an array to a single value. It takes two parameters: an accumulator and the current element of an array.
 ```javascript
 // Array of transaction objects
const transactions = [
    { id: 1, amount: 100 },
    { id: 2, amount: 200 },
    { id: 3, amount: 150 },
    { id: 4, amount: 50 }
];

// Using reduce() to calculate the total amount
const totalAmount = transactions.reduce((total, transaction) => {
    return total + transaction.amount;
}, 0);

console.log(totalAmount); // Output: 500

// Array of strings
const words = ['JavaScript', 'is', 'a', 'powerful', 'language'];

// Using reduce() to concatenate the strings
const sentence = words.reduce((accumulator, word) => {
    return accumulator + ' ' + word;
}, '');

console.log(sentence); // Output: "JavaScript is a powerful language"

 ```


#### 17. In JavaScript what is the purpose of sort() method? 
 In javascript sort() methods sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings and converts elements to strings before comparing them.

 ```javascript
 // Array of product objects with some having the same price
const products = [
    { id: 1, name: 'Laptop', price: 500 },
    { id: 2, name: 'Phone', price: 300 },
    { id: 3, name: 'Tablet', price: 500 },
    { id: 4, name: 'Monitor', price: 150 },
    { id: 5, name: 'Keyboard', price: 500 },
    { id: 6, name: 'Mouse', price: 150 }
];

// Using sort() to sort the products by price in ascending order
products.sort((a, b) => a.price - b.price);

console.log(products);
// Output:
// [
//   { id: 4, name: 'Monitor', price: 150 },
//   { id: 6, name: 'Mouse', price: 150 },
//   { id: 2, name: 'Phone', price: 300 },
//   { id: 1, name: 'Laptop', price: 500 },
//   { id: 3, name: 'Tablet', price: 500 },
//   { id: 5, name: 'Keyboard', price: 500 }
// ]
 ```