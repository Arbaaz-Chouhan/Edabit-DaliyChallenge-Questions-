// 1 Flick Switch
// Create a function that always returns true for every item in a given array. However, if an element is the word "flick", switch to always returning the opposite boolean value.

function flickSwitch(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === false) {
            res.push(true);
        }else if(arr[i] === "edabit"){
            res.push(true)
        }else{
        res.push(false);
    }
}
    return res
}


// console.log(flickSwitch(["edabit", "flick", "eda", "bit"])); // ➞ [true, false, false, false]
// console.log(flickSwitch(["flick", 11037, 3.14, 53])); // ➞ [false, false, false, false]
// console.log(flickSwitch([false, false, "flick", "sheep", "flick"])); // ➞ [true, true, false, false, true]

// 2 Fruit Salad 🍇🍓🍎
// Fruit salads are served best when the fruits are sliced and diced into small chunks!

// For this challenge, slice each fruit in half and sort the chunks alphabetically. This recipe tastes best when the chunks are joined together to make a string.

// Worked Example
// fruitSalad(["apple", "pear", "grapes"]) ➞ "apargrapepesple"

// Chunks: ["ap", "ple", "pe", "ar", "gra", "pes"]
// Sorted chunks: ["ap", "ar", "gra", "pe", "pes", "ple"]
// Final string: "apargrapepesple"
function fruitSalad(arr) {
    let words = arr.split(" ");

    for (let i = 0; i < words.length; i++) {
        res += words[i];

    }
    return res
}
// console.log(fruitSalad(["apple", "pear", "grapes"])); // ➞ "apargrapepesple"
// console.log(fruitSalad(["raspberries", "mango"]) ); //➞ "erriesmangoraspb"
// console.log(fruitSalad(["banana"])); // ➞ "anaban"


// 3 Scalable Mountain?
// Given an array of numbers, representing the height of a mountain in certain intervals, return whether this mountain is scalable.

// A mountain can be considered scalable if each number is within 5 units of the next number in either direction.

function isScalable(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % arr[i] === 0) {
            return false;
        }
    }
    return true
}
// console.log(isScalable([1, 2, 4, 6, 7, 8])); //➞ true
// console.log(isScalable([40, 45, 50, 45, 47, 52])); // ➞ true
// console.log(isScalable([2, 9, 11, 10, 18, 21])); // ➞ false


// 4 Sum of Two Numbers in Array Equal to Given Number
// Create a function that takes an array of numbers arr and a number n. Return true if the sum of any two elements is equal to the given number. Otherwise, return false.

function checkSum(arr, n) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {

            if (arr[i] + arr[j] === n) {
                return true;
            }
        }
    }
    return false
}
// console.log(checkSum([10, 12, 4, 7, 9, 11], 16)); // ➞ true
// console.log(checkSum([4, 5, 6, 7, 8, 9], 13)); // ➞ true
// console.log(checkSum([0, 98, 76, 23], 174)); // ➞ true
// console.log(checkSum([0, 9, 7, 23, 19, 18, 17, 66], 39)); // ➞ false
// console.log(checkSum([2, 8, 9, 12, 45, 78], 1)); // ➞ false


// 5 Iterated Square Root
// The iterated square root of a number is the number of times the square root function must be applied to bring the number strictly under 2.

// Given an integer, return its iterated square root. Return "invalid" if it is negative.


function iSqrt(n) {
    if (n < 0) {
        return "invalid";
    }
    let res = Math.sqrt(n);
    return res
}

// console.log(iSqrt(1) ); //➞ 0
// console.log(iSqrt(2) ); //➞ 1
// console.log(iSqrt(7) ); //➞ 2
// console.log(iSqrt(27) );//➞ 3
// console.log(iSqrt(256));// ➞ 4
// console.log(iSqrt(-1) ); //➞ "invalid"


// 6 Remove Surrounding Duplicate Items
//Create a function that takes a sequence of either strings or numbers, removes the surrounding duplicates and returns an array of items without any items with the same value next to each other and preserves the original order of items.

function uniqueInOrder(str) {
    // let convertstr = str.split(" ");

    for (let i = 0; i < str.length; i++) {
        let res = [];

        for (let j = 0; j < str.length; j++) {
            if (res.indexOf(str[j]) === -1) {
                res.push(str[j]);
            }
        }
        return res
    }
}
// console.log(uniqueInOrder("AAAABBBCCDAABBB")); // ➞ ["A", "B", "C", "D", "A", "B"]
// console.log(uniqueInOrder("ABBCcAD")); //➞ ["A", "B", "C", "c", "A", "D"]
// console.log(uniqueInOrder([1, 2, 2, 3, 3])); // ➞ [1, 2, 3]


// 7 Longest Sequence of Consecutive Zeroes
// Write a function that returns the longest sequence of consecutive zeroes in a binary string.

function longestZero(s) {
    let res = 0;
    for (let i = 0; i <s.length; i++) {
        if (s[i] <= 4) {
            res+= s[0]
        }
    }

    return res
}
// console.log(longestZero("01100001011000")); // ➞ "0000"
// console.log(longestZero("100100100")); // ➞ "00"
// console.log(longestZero("11111")); // ➞ ""

// 8 Capital Split
// Create a function which adds spaces before every capital in a word. Uncapitalize the whole string afterwards.

function capSpace(str) {
    let res = " ";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            res += " " + str[i].toLowerCase();

        } else {
            res += str[i]
        }
    }
    return res
}
// console.log(capSpace("helloWorld")); // ➞ "hello world"
// console.log(capSpace("iLoveMyTeapot")); //➞ "i love my teapot"
// console.log(capSpace("stayIndoors")); // ➞ "stay indoors"

// 9 Puzzle Pieces
// Write a function that takes two arrays and adds the first element in the first array with the first element in the second array, the second element in the first array with the second element in the second array, etc, etc. Return true if all element combinations add up to the same number. Otherwise, return false.

function puzzlePieces(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr1[i] + arr2[i]) {
            return true;
        } else {
            return false
        }

    }
}
// console.log(puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1])); // ➞ true
// // 1 + 4 = 5;  2 + 3 = 5;  3 + 2 = 5;  4 + 1 = 5
// // Both arrays sum to [5, 5, 5, 5]
// console.log(puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6])); //➞ true
// console.log(puzzlePieces([1, 2], [-1, -1])); // ➞ false
// console.log(puzzlePieces([9, 8, 7], [7, 8, 9, 10])); // ➞ false 


// 10 First N Vowels
// Write a function that returns the first n vowels of a string.

function firstNVowels(s, n) {
    let res = "";
    let VowelsCount = 0;
    let Vowels = "aiuoe";

    for (let i = 0; i < s.length; i++) {
        if (Vowels.includes(s[i])) {
            res += s[i];
            VowelsCount++;
        }
        if (VowelsCount === n) {
            return res
        }
    }
    return VowelsCount === n ? res : "invalid"
}
// console.log(firstNVowels("sharpening skills", 3)); // ➞ "aei"
// console.log(firstNVowels("major league", 5)); //➞ "aoeau"
// console.log(firstNVowels("hostess", 5)); //➞ "invalid"


// 11 Convert to Hex
// Create a function that takes a string's characters as ASCII and returns each character's hexadecimal value as a string.

function toHex(str) {



}
// console.log(toHex("hello world")); // ➞ "68 65 6c 6c 6f 20 77 6f 72 6c 64"
// console.log(toHex("Big Boi")); // ➞ "42 69 67 20 42 6f 69"
// console.log(toHex("Marty Poppinson")); // ➞ "4d 61 72 74 79 20 50 6f 70 70 69 6e 73 6f 6e"


// 12 Crowded Carriage Capacity
// A train has a maximum capacity of n passengers overall, which means each carriage's capacity will share an equal proportion of the maximum capacity.

// Create a function which returns the index of the first carriage which holds 50% or less of its maximum capacity. If no such carriage exists, return -1.

// Worked Example
//findASeat(200, [35, 23, 18, 10, 40]) ➞ 2

// There are 5 carriages which each have a maximum capacity of 40 (200 / 5 = 40).
// Index 0's carriage is too full (35 is 87.5% of the maximum).
// Index 1's carriage is too full (23 is 57.5% of the maximum).
// Index 2's carriage is good enough (18 is 45% of the maximum).
// Return 2.

function findASeat(n, arr) {
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        let maximum = Math.max(...arr);
        res += maximum
    }
}
// console.log(findASeat(20, [3, 5, 4, 2]) ); //➞ 3
// console.log(findASeat(1000, [50, 20, 80, 90, 100, 60, 30, 50, 80, 60])); // ➞ 0
// console.log(findASeat(200, [35, 23, 40, 21, 38])); // ➞ -1


// 13 Perfect Square Patch
// Create a function that takes an integer and outputs an n x n square solely consisting of the integer n.


function squarePatch(n) {
    let res = [];
    for (let i = 1; i <= n; i++) {
        let EmptyArr = [];

        for (let j = 1; j <= n; j++) {
            EmptyArr.push(n);
        }
        res.push(EmptyArr)
    }
    return res
}
// console.log(squarePatch(3));  //➞ [
//   [3, 3, 3],
//   [3, 3, 3],
//   [3, 3, 3]
// ]

// console.log(squarePatch(5)); // ➞ [
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5]
// ]

// console.log(squarePatch(1)); // ➞ [
//   [1]
// ]

// console.log(squarePatch(0)); // ➞ []

