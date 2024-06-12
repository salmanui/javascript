//String reverse str = "Hello World"
console.log("**String reverse and word reverse**");
let str = "Hello World";
console.log("Before Reverse String:", str);
//This line splits the string str into an array of individual characters using an empty string ("") as the delimiter.
let strReverse = str.split("").reverse().join("");
console.log("After String Reverse:", strReverse);
//String word reverse str = "Hello World"
//This line first string (" ") the string str into an array of substrings using space as the delimiter.
let wordReverse = str.split(" ").reverse("").join(" ");
console.log("String Word Reverse:", wordReverse);
console.log("\n");
console.log("**Swap the given Array**");
//Swap the given array
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
//create a temp variable to store value of array1
let temp = array1;
//Before swap
console.log("Before Swaping Arrays");
console.log(array1);
console.log(array2);
//Swaping arrays to get output
array1 = array2;
array2 = temp;
//After swap
console.log("After Swaping Arrays");
console.log(array1);
console.log(array2);
console.log("\n");
console.log("**Find Largest Number in Array**");
//Find largest number in array
let number = [1, 2, 5, 3, 4, 10, 20, 55];
let maxNumber = Math.max(...number);
console.log("Using Math max with spread operator:", maxNumber);
//Using reduce method
let num = [1, 2, 5, 3, 4, 10, 20, 55];
let maxNum = num.reduce((max, current) => Math.max(max, current));
console.log("Using reduce method:", maxNum);
//Using function and loops
function largestNumber(arr) {
  let largeNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largeNum) {
      largeNum = arr[i];
    }
  }
  return largeNum;
}
console.log("Using Function with loops:", largestNumber(num));
console.log("\n");
console.log("**Sort Given String**");
//Using split,sort and join methods
function sortString(str) {
  let charString = str.split("");
  charString.sort();
  let sortedStr = charString.join("");
  console.log("Sort given string using split,sort and join:", sortedStr);
  return sortedStr;
}
let string = "javascript";
sortString(string);
//Using split,sort,map and join methods
function sortByMap(str) {
  return str
    .split("")
    .sort()
    .map((char) => char)
    .join("");
}
let inputSting = "salmanmohammad";
let sortStingMap = sortByMap(inputSting);
console.log("Sort given string using split,sort,map and join:", sortStingMap);

console.log("\n");
console.log("**Given String isPalindrome or Not**");
let strPalindrome = "racecar";
let reverseString = strPalindrome.split("").reverse().join("");

if (strPalindrome === reverseString) {
  console.log(strPalindrome, "is a palindrome.");
} else {
  console.log(strPalindrome, "is not a palindrome.");
}
console.log("\n");
console.log("**Remove Duplicates from array using Set**");
// Remove Duplicates from array
let duplicateArray = [1, 1, 2, 2, 3, 4, 5, 5, 6, 7];
let removeDuplicate = new Set(duplicateArray);
console.log(removeDuplicate);
console.log("**Remove Duplicates from array using filter**");
let duplicateArr = [1, 1, 2, 2, 3, 4, 5, 5, 6, 7, 3, 3, 10, 9, 8];
let removeDuplicateArr = duplicateArr.filter((item, index) => {
  return duplicateArr.indexOf(item) === index;
});
removeDuplicateArr.sort((a, b) => a - b);
console.log(removeDuplicateArr);
//Closures in JavaScript with count example
console.log("\n");
//A closure is a function that retains access to its own scope including variables,even after the outer function is finished executing.
console.log("**Closures in JavaScript with count example**");
function count() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
const counter = count();
console.log(counter());
console.log(counter());
console.log(counter());
console.log("\n");
console.log("**Find Second Largest Number in an array**");
//Find Second Largest Number in an array
let Arr = [1, 2, 3, 4, 5, 6];
let secondLargestNum = Arr.length - 1;
console.log(secondLargestNum);

console.log("\n");
console.log("**Find Sub Array count in an Array**");
function countArray(arr) {
  return arr.reduce((acc, e) => {
    Array.isArray(e) ? (acc = acc + 1) : 0;
    return acc;
  }, 0);
}
console.log(
  "countArray:",
  countArray([2, 8, [2], 5, 4, [3], 9, 5, [8], [10], [12]])
);

function createObjectFromArray(arr, key) {
  return arr.reduce((acc, el) => {
    const keyValue = el[key];
    if (keyValue != key) {
      const { [key]: excluedKey, ...Obj } = el;
      acc[keyValue] = Obj;
      return acc;
    }
  }, {});
}
const details = [
  {
    title: "Royal Rumble",
    name: "Salman",
    year: 2024,
    opponent: "Sameeya",
  },
];
const result = createObjectFromArray(details, "title");
console.log(result);

const findNum = [1, 5, 3, 6, 88, 10, 20];
console.log(findNum.filter((item, index) => item % 2 == 0));
console.log(findNum.reduce((max, index) => Math.max(max, index)));
console.log(findNum.find((findNum) => findNum > 2));

let str1 = "Hello World";
console.log("Before Reverse String:", str1);

let strReverse1 = "";
for (let i = str1.length - 1; i >= 0; i--) {
  strReverse1 += str1[i];
}

console.log("After String Reverse:", strReverse1);
//Double the array
let arr = [1,2,3,4,5,6,7,8,9,10];
let doubleArr = arr.map((num)=>num*2);
console.log(doubleArr);

// calculate sum of all prices for the array below
const products = [
  { name: 'Product A', price: 10 },
  { name: 'Product B', price: 20 },
  { name: 'Product C', price: 30 },
  { name: 'Product D', price: 40 },
];

const totalPrice = products.reduce((sum, product)=> sum + product.price, 0);
console.log("Total Price:", totalPrice);



function fetchData(callback) {
  setTimeout(() => {
    // Simulate fetching data asynchronously
    const data = "Some data";
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});

function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate fetching data asynchronously
      const data = "Promise Some data";
      resolve(data);
    }, 1000);
  });
}

fetchDataPromise()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
