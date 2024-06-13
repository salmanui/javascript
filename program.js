//star partten
const triangleHalfPartten = (length = 5, symbol = "*") => {
  for (let i = 1; i <= length; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += symbol;
    }
    console.log(row);
  }
};
triangleHalfPartten();
const trianglePartten = (length = 5, symbol = "*") => {
  for (let i = 1; i <= length; i++) {
    let row = " ";
    for (let j = 0; j < length - i; j++) {
      row += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      row += symbol;
    }
    console.log(row);
  }
};
trianglePartten();

const triangleRightPartten = (length = 5, symbol = "*") => {
  for (let i = 1; i <= length; i++) {
    let row = " ";
    for (let j = 0; j < length - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= i; k++) {
      row += symbol;
    }
    console.log(row);
  }
};
triangleRightPartten();
function generateNumberPattern() {
  for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += j;
    }
    console.log(line);
  }
}

generateNumberPattern();

const alphabetNumber = "ABC1234RFVGG45667KFJGNFJGNJ8790";

function findAlphabetsAndNumbers() {
  let alphabets = "";
  let numbers = "";
  for (let i = 0; i < alphabetNumber.length; i++) {
    const char = alphabetNumber[i];
    if (/[A-Za-z]/.test(char)) {
      alphabets += char + " ";
    } else if (/\d/.test(char)) {
      numbers += char + " ";
    }
  }
  console.log("Alphabets:", alphabets);
  console.log("Numbers:", numbers);
}

findAlphabetsAndNumbers();

//Using Match Method

const regexp = /[A-Za-z]/g;
const numRegExp = /\d/g;

const setAlphabet = alphabetNumber.match(regexp).join(" ");
console.log("Match Alphabets:" + setAlphabet);

const setNumbers = alphabetNumber.match(numRegExp).join(" ");
console.log("Match Numbers:" + setNumbers);

//Find largest number in an array
const array = [1, 2, 10, 30, 4, 5, 6];
const maxArray = Math.max(...array); //using spread operator it checks argument of array
console.log(maxArray);

//Find second largest number in an array
const array1 = [1, 2, 3, 4, 5, 6];
const secondlargestNum = array1.length - 1;
console.log(secondlargestNum);

//Given string is palindrome or not

const strPalindrome = "racecar";

const isPalindrome = strPalindrome.split("").reverse().join("");
if (strPalindrome === isPalindrome) {
  console.log(strPalindrome + " is a palindrome");
} else {
  console.log(strPalindrome + " is not a palindrome");
}

//closure function

function outerFun(outervar) {
  return function innerFun(innervar) {
    console.log("OuterFun:", outervar);
    console.log("InnerFun:", innervar);
  };
}
const newFun = outerFun("outerside");
newFun("inside");

// Given Number is Palindrome or not
const num = 123;

const numstr = num.toString();

const numPalindrome = numstr.split("").reverse().join("");

if (numstr === numPalindrome) {
  console.log(numstr + " is a palindrome");
} else {
  console.log(numstr + " is not a palindrome");
}

const number = 121;
const isNumPalindrome =
  number.toString() === number.toString().split("").reverse().join("");
console.log(
  number + (isNumPalindrome ? " is a palindrome" : " is not a palindrome")
);

//Reverse the given String
const str = "Salman Mohammad";
const strReverse = str.split("").reverse().join("");
const wordReverse = str.split(" ").reverse("").join(" ");
console.log(strReverse);
console.log(wordReverse);

// Function to fetch data from an API
let allData = [];

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    allData = data; // Store the fetched data in the global variable
    // displayData(allData);
    console.log(allData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
fetchData();
//Valuelabs
document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.getElementById('myDropdown');

  const fetchDataToDropdown = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const data = await response.json();

      data.results.forEach(item => {
        const option = document.createElement('option');
        option.value = item.name;
        option.textContent = item.name;
        dropdown.appendChild(option);
      });
    } catch (error) {
      console.error("Error while fetching data:", error);
    }
  };
  fetchDataToDropdown();
});
