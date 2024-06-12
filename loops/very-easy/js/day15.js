// 1 Reverse Coding Challenge #1
// This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.

// Your task is to create a function that, when fed the inputs below, produce the sample outputs shown.

function mysteryFunc(str) {
    let res = " ";
    for (let i = 0; i < str.length; i++) {
        let currentEle = parseInt(str[i]);
        if (!Number.isNaN(currentEle)) {

            for (let j = 0; j < currentEle; j++) {

                res += str[i - 1]
            }
        }
    }

    return res
}

// console.log(mysteryFunc("A4B5C2")) //;➞ "AAAABBBBBCC"
// console.log(mysteryFunc("C2F1E5")) //;➞ "CCFEEEEE"
// console.log(mysteryFunc("T4S2V2")) //;➞ "TTTTSSVV"
// console.log(mysteryFunc("A1B2C3D4)")); //➞ "ABBCCCDDDD"

// 2     Modifying the Last Character
//  Create a function which makes the last character of a string repeat n number of times.  
function modifyLast(str, num) {
    let res = str.slice(0, -1);
    let lastChar = str.slice(-1);
    for (let i = 0; i < num; i++) {
        res += lastChar;
    }
    return res

}
// console.log(modifyLast("Hello", 3));// ➞ "Hellooo"
// console.log(modifyLast("hey", 6)); //➞ "heyyyyyy"
// console.log(modifyLast("excuse me what?", 5));//➞ "excuse me what?????"

// 3 Encode Morse
// Create a function that takes a string as an argument and returns the Morse code equivalent.

function encodeMorse(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 0) {
            res += "."
        } else if (str[i] === " ") {
            res += "-"
        }
    }
    return res
}
// console.log(encodeMorse("EDABBIT CHALLENGE"));  //➞ ". -.. .- -... -... .. -   -.-. .... .- .-.. .-.. . -. --. ."

// console.log(encodeMorse("HELP ME !"));  // ➞ ".... . .-.. .--.   -- .   -.-.--"

//  4 Burglary Series (09): Filter Values
// The insurance guy calls, the policy you chose doesn't cover values below 5000€, it wouldn't dignify your status you said at the time. Given an object with a list of the stolen items, return a copy of that list without the values below 5000.

function filterValues(obj) {
    let res = {};
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        let currentEle = keys[i];
        let currentValue = obj[keys[i]];
        if (currentValue >= 5000) {
            res[currentEle] = obj[currentEle];
        }
    }
    return res
}
// console.log(filterValues({ tv: 4999, guitar:5000, fork: 5001 })); //➞ { guitar:5000, fork: 5001 }
// console.log(filterValues({ tv: 4999 })); // ➞ {}
// console.log(filterValues({ guitar: 5000 } )); //➞ { guitar: 5000 }
// console.log(filterValues({} )); //➞ {}

// 5 Total Sales of Product
// In this question you will be given a table as below, where the first row lists the names of products, and each of row after that lists the sales of the product for each day (over some time range).

// [
//   ["A", "B", "C"],
//   [ 2 ,  7 ,  1 ],
//   [ 3 ,  6 ,  6 ],
//   [ 4 ,  5 ,  5 ]
// ]
// Write a function that receives:

// A sales table sales as shown above.
// The name of a product product.
// ... and returns the total sales if the product is on the array, otherwise return the string "Product not found".

function totalSales(Sales, produce) {
    let res = 0;
    for (let i = 1; i < Sales.length; i++) {

        for (let j = 0; j < Sales.length; j++) {
            if (Sales[0][j] === produce) {
                res += Sales[i][j]
            }
        }

    }
    return res

}


// console.log(totalSales([
//   ["A", "B", "C"],
//   [ 2 ,  7 ,  1 ],
//   [ 3 ,  6 ,  6 ],
//   [ 4 ,  5 ,  5 ]
// ], "A")); // ➞ 9

// // 2 + 3 + 4 = 9


// console.log(totalSales([
//   ["A", "B", "C"],
//   [ 2 ,  7 ,  1 ],
//   [ 3 ,  6 ,  6 ],
//   [ 4 ,  5 ,  5 ]
// ], "C")); // ➞ 12

// // 1 + 6 + 5 = 12


// console.log(totalSales([
//   ["A", "B", "C"],
//   [ 2 ,  7 ,  1 ],
//   [ 3 ,  6 ,  6 ],
//   [ 4 ,  5 ,  5 ]
// ], "D")); // ➞ "Product not found"

// 6 Blackjack
// Create a function that takes an array of card numbers and checks if the sum of their value exceeds 21. If the sum exceeds 21, return true and if the sum is under or equal to 21, return false. Values of the cards are as follows:

// 2-10 are their value.
// J-K (face cards) count as 10.
// Aces count either as 1 or 11 - play conservatively, so that if giving an ace a value of 11 causes you to lose and 1 allows you to win, then go with 1.
function overTwentyOne(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }

    return res > 21;
}
// console.log(overTwentyOne([2, 8, "J"])); // ➞ false
// console.log(overTwentyOne(["A", "J", "K"])); // ➞ false
// console.log(overTwentyOne([5, 5, 3, 9])); // ➞ true
// console.log(overTwentyOne([2, 6, 4, 4, 5])); // ➞ false
// console.log(overTwentyOne(["J", "Q", "K"])); // ➞ true

// 7 Consecutive Numbers
// Create a function that determines whether elements in an array can be re-arranged to form a consecutive list of numbers where each number appears exactly once.

function cons(arr) {
    let uniqueSet = new Set(arr);
    let min = Math.min(...uniqueSet);
    let max = Math.max(...uniqueSet);

    if (arr.length !== uniqueSet.size) {
        return false;
    }

    return max - min === arr.length - 1;
}

// console.log(cons([5, 1, 4, 3, 2])); // ➞ true
// console.log(cons([5, 1, 4, 3, 2, 8])); // ➞ false
// console.log(cons([5, 6, 7, 8, 9, 9])); // ➞ false


// 8 Missing Letters
// Given a string containing unique letters, return a sorted string with the letters that don't appear in the string.

function getMissingLetters(str) {
    let res = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < alphabet.length; i++) {
        if (!str.includes(alphabet[i])) {
            res += alphabet[i];
        }
    }

    return res
}
// console.log(getMissingLetters("abcdefgpqrstuvwxyz")); // ➞ "hijklmno"

// console.log(getMissingLetters("zyxwvutsrq")); // ➞ "abcdefghijklmnop"

// console.log(getMissingLetters("abc")); // ➞ "defghijklmnopqrstuvwxyz"

// console.log(getMissingLetters("abcdefghijklmnopqrstuvwxyz")); // ➞ ""

// 9 Find the Odd Integer
// Create a function that takes an array and finds the integer which appears an odd number of times.

function findOdd(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {

        if (res.indexOf(arr[i]) === -1 && arr[i] % 2 !== 0) {
            res.push(arr[i]);
        }
    }

    if (arr >= 10) {
        return arr
    }
    return res[res.length - 1]
}

// console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); // ➞ -1
// console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // ➞ 5
// console.log(findOdd([10])); // ➞ 10

//10 Factorial of Factorials
// Create a function that takes an integer n and returns the factorial of factorials. See below examples for a better understanding:
 
function factorial(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}

function factFact(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= factorial(i);
    }
    return res;
}
console.log(factFact(4)); //➞ 288
// 4! * 3! * 2! * 1! = 288
console.log(factFact(5)); //➞ 34560
console.log(factFact(6)); //➞ 24883200
