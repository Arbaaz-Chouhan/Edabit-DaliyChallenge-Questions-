// 1 Making Change
// Create a function that takes an amount of monetary change (e.g. 47 cents) and breaks down the most efficient way that change can be made using USD quarters, dimes, nickels and pennies. Your function should return an object.

// Coin	Value
// Penny	0.01
// Nickel	0.05
// Dime	0.10
// Quarter	0.25
// Examples

function makeChange(amount) {
    // console.log(makeChange(47)); // { "q": 1, "d": 2, "n": 0, "p": 2 }
    // console.log(makeChange(24)); // { "q": 0, "d": 2, "n": 0, "p": 4 }
    // console.log(makeChange(92)); // { "q": 3, "d": 1, "n": 1, "p": 2 }

}




// 2 Divide Array into Chunks
// Write a function that divides an array into chunks of size n, where n is the length of each chunk.

function chunkify(arr, n) {
    let res = [];
    for (let i = 1; i <= n; i++) {
        let Emtyarr = []

        for (let j = i; j < i + n && j < arr.length; j++) {

            Emtyarr.push(arr[j]);

        }
        res.push(Emtyarr);

    }

    return res
}

// console.log(chunkify([2, 3, 4, 5], 2)  ); //[[2, 3], [4, 5]]
// console.log(chunkify([2, 3, 4, 5, 6], 2) ); //[[2, 3], [4, 5], [6]]
// console.log(chunkify([2, 3, 4, 5, 6, 7], 3) );  //[[2, 3, 4], [5, 6, 7]]
// console.log(chunkify([2, 3, 4, 5, 6, 7], 1) ); //[[2], [3], [4], [5], [6], [7]]
// console.log(chunkify([2, 3, 4, 5, 6, 7], 7) );// [[2, 3, 4, 5, 6, 7]]


// 3 Return Duplicate Numbers
// Given an array nums where each integer is between 1 and 100, return a sorted array containing only duplicate numbers from the given nums array.

function duplicateNums(arr) {
    let seen = {};
    let duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (seen[num]) {
            duplicates.push(num);
        } else {
            seen[num] = true;
        }
    }


    duplicates.sort((a, b) => a - b);

    return duplicates.length > 0 ? duplicates : null; // Return null if no duplicates found
}

// console.log(duplicateNums([1, 2, 3, 4, 3, 5, 6])); // [3]
// console.log(duplicateNums([81, 72, 43, 72, 81, 99, 99, 10, 12, 54])); // [72, 81, 99]
// console.log(duplicateNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // null


// 4 Is the Input Factorial of an Integer?
// Create a function to check if a given integer is a factorial of integer or not. The return value should be a boolean.
function isFactorial(n) {
    let product = 1;

    for (let i = 2; i <= n; i++) {
        if (n % i !== 0) {

            return false;
        }
        product *= i;
        if (product === n) {

            return true;
        }
    }
}


// console.log( isFactorial(2) );  // true
// // 2 = 2 * 1 = 2!
// console.log( isFactorial(27));  // false
// console.log( isFactorial(24));  // true
// 24 = 4 * 3 * 2 * 1 = 4!


// 5 Triple Letter Groupings
// Given a string, return a sorted array of words formed from the first three letters, then the next three letters, shifting by only one.

// Worked Example
// threeLetterCollection("edabit")) ; // ["abi", "bit", "dab", "eda"]
// 1st word: "eda"
// 2nd word: "dab"
// 3rd word: "abi"
// 4th word: "bit"
// Remember to sort the array!


function threeLetterCollection(str) {
    let res = [];

    for (let i = 0; i < str.length - 2; i++) {
        let threeLetters = str.slice(i, i + 3);
        res.push(threeLetters);
    }


    return res;
}
// console.log(threeLetterCollection("slap")) ; // ["lap", "sla"]
// console.log(threeLetterCollection("click")) ; // ["cli", "ick", "lic"]
// console.log(threeLetterCollection("cat")) ; // ["cat"]
// console.log(threeLetterCollection("hi")) ; // []


// 6 Longest Word in a 7 Segment Display
// Given an array of words, return the longest word which can fit on a 7 segment display.

// Image of a 7 segment display

// Letters which do not fit on a 7 segment display are k, m, v, w and x.
// Therefore, do not count words which include these letters.

function longest7SegmentWord(arr) {
    let res = " ";
    let words = ["k", "m", "v", "w", "x"];
    for (let i = 0; i < arr.length; i++) {
        let char = arr[i];
        if (words.includes(char) !== 7) {
            return arr[i];
        }
    }

}


// no solve 

// console.log(longest7SegmentWord(["knighthood", "parental", "fridge", "clingfilm"])); // ➞ "parental"
// console.log(longest7SegmentWord(["coding", "crackers", "edabit", "celebration"])); // ➞ "celebration"
// console.log(longest7SegmentWord(["velocity", "mackerel", "woven", "kingsmen"])); // ➞ ""



// 7  Next Happy Year
// Mubashir needs your help to find out the next happy year.

// A Happy Year is the year with only distinct digits. Create a function that takes an integer year and returns the next happy year.

function happyYear(year) {

}
// console.log(happyYear(2017));  // ➞ 2018
// // 2018 has all distinct digits
// console.log(happyYear(1990));  // ➞ 2013
// console.log(happyYear(2021));  // ➞ 2031



// 8 What's the Missing Letter?
// Given a string of letters in the English alphabet, return the letter that's missing from the string. The missing letter will make the string be in alphabetical order (from A to Z).

// If there are no missing letters in the string, return "No Missing Letter".

function missingLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < alphabet.length; i++) {
        if (!str.includes(alphabet[i])) {
            return alphabet[i];
        }
    }
    return "No Missing Letter";
}

// console.log(missingLetter("abdefg")); //➞ "c"
// console.log(missingLetter("mnopqs")); //➞ "r"
// console.log(missingLetter("tuvxyz")); //➞ "w"
// console.log(missingLetter("ghijklmno")); //  ➞ "No Missing Letter"


// 9 Diamond Shaped Array
// Create a function that returns an array that expands by 1 from 1 to the value of the input, and then reduces back to 1. Items in the arrays will be the same as the length of the arrays.

function diamondArrays(n) {
    let res = [];
    for (let i = 1; i <= n; i++) {
        let arr = [];

        for (let j = 1; j <= i; j++) {
            arr.push(i)
        }
        res.push(arr)
    }

    return res
}

// console.log(diamondArrays(1)); // ➞ [[1]]
// console.log(diamondArrays(2)); // ➞ [[1], [2, 2], [1]]
// console.log(diamondArrays(5)); // ➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]]

// 10 Rock, Paper, Scissors!
// Abigail and Benson are playing Rock, Paper, Scissors.

// Each game is represented by an array of length 2, where the first element represents what Abigail played and the second element represents what Benson played.

// Given a sequence of games, determine who wins the most number of matches. If they tie, output "Tie".

// R stands for Rock
// P stands for Paper
// S stands for Scissors


function calculateScore(arr) {
    let abigailWins = 0;
    let bensonWins = 0;

    // Loop through each game round
    for (let i = 0; i < arr.length; i++) {
        const [abigail, benson] = arr[i];


        if (
            (abigail === "R" && benson === "S") ||
            (abigail === "S" && benson === "P") ||
            (abigail === "P" && benson === "R")
        ) {
            abigailWins++;
        } else {
            bensonWins++;
        }
    }

    if (abigailWins > bensonWins) {
        return "Abigail";
    } else {
        return "Tie";
    }
}
// console.log(calculateScore([["R", "P"], ["R", "S"], ["S", "P"]])); //➞ "Abigail"
// // Benson wins the first game (Paper beats Rock).
// // Abigail wins the second game (Rock beats Scissors).
// // Abigail wins the third game (Scissors beats Paper). 
// // Abigail wins 2/3.
// console.log(calculateScore([["R", "R"], ["S", "S"]])); // ➞ "Tie"
// console.log(calculateScore([["S", "R"], ["R", "S"], ["R", "R"]])); // ➞ "Tie"