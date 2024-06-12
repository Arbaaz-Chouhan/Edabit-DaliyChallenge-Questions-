// 1 Mini Peaks
// Write a function that returns all the elements in an array that are strictly greater than their adjacent left and right neighbors.

function miniPeaks(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            res.push(arr[i])
        }
    }
    return res;
}
// console.log(miniPeaks([4, 5, 2, 1, 4, 9, 7, 2])); // ➞ [5, 9]
// // 5 has neighbours 4 and 2, both are less than 5.
// console.log(miniPeaks([1, 2, 1, 1, 3, 2, 5, 4, 4])); // ➞ [2, 3, 5]
// console.log(miniPeaks([1, 2, 3, 4, 5, 6]) ); //➞ []

// 2 Find the Largest Even Number
// Write a function that finds the largest number in an array nums that is also even. If there is no even number, return -1.

function largestEven(arr) {
    let maxEven = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            maxEven = arr[i];
        }
    }
    return maxEven
}
// console.log(largestEven([3, 7, 2, 1, 7, 9, 10, 13])); // ➞ 10
// console.log(largestEven([1, 3, 5, 7])); // ➞ -1
// console.log(largestEven([0, 19, 18973623])); // ➞ 0

// 3 Don't Roll Doubles!
// John is playing a dice game. The rules are as follows.

// Roll two dice.
// Add the numbers on the dice together.
// Add the total to your overall score.
// Repeat this for three rounds.
// But if you roll DOUBLES, your score is instantly wiped to 0 and your game ends immediately!

// Create a function which takes in a console.log(matrix as input, and return John's score after his game has ended.

function diceGame(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {

        if (arr[i][0] === arr[i][1]) {
            return 0
        } else {
            res += arr[i][0] + arr[i][1]
        }
    }
    return res;
}
// console.log(diceGame([[1, 2], [3, 4], [5, 6]])); // ➞ 21
// console.log(diceGame([[1, 1], [5, 6], [6, 4]])); // ➞ 0
// console.log(diceGame([[4, 5], [4, 5], [4, 5]])); // ➞ 27


// 4 Upper or Lower Case
// Return the smallest number of steps it takes to convert a string entirely into uppercase or entirely into lower case, whichever takes the fewest number of steps. A step consists of changing one character from lower to upper case, or vice versa.

function stepsToConvert(str) {
    let upperCount = 0;
    let lowerCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            upperCount++;
        } else {
            lowerCount++;
        }

    }
    return Math.min(upperCount, lowerCount)
}
// console.log(stepsToConvert("abC")); // ➞ 1
// // "abC" converted to "abc" in 1 step
// console.log(stepsToConvert("abCBA")); // ➞ 2
// // "abCBA" converted to "ABCBA" in 2 steps
// console.log(stepsToConvert("aba")); // ➞ 0
// console.log(stepsToConvert("abaCCC")); // ➞ 3


// 5 Increment to Top
// Create a function that returns the total number of steps it takes to transform each element to the maximal element in the array. Each step consists of incrementing a digit by one.


function incrementToTop(arr) {
    let res = 0;
    let max = Math.max(...arr);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== max) {
            res += max - arr[i]
        }

    }
    return res
}
// console.log(incrementToTop([3, 4, 5]) ); //➞ 3
// // Maximal element in the array is 5.
// // To transform 3 to 5 requires 2 steps: 3 -> 4, 4 -> 5.
// // To transform 4 to 5 requires 1 step: 4 -> 5.
// // Total steps required is 3.
// console.log(incrementToTop([4, 3, 4]) ); //➞ 1
// // Maximal element in the array is 4.
// // To transform 3 to 4 requires 1 steps: 3 -> 4.
// // Total steps required is 1.
// console.log(incrementToTop([3, 3, 3]) ); //➞ 0
// console.log(incrementToTop([3, 10, 3])); // ➞ 14


// 6 One Button Messaging Device
// Imagine a messaging device with only one button. For the letter A, you press the button one time, for E, you press it five times, for G, it's pressed seven times, etc, etc.

// Write a function that takes a string (the message) and returns the total number of times the button is pressed.

function howManyTimes(msg) {

}
// console.log(howManyTimes("abde") ); //➞ 12
// console.log(howManyTimes("azy")); // ➞ 52
// console.log(howManyTimes("qudusayo") ); //➞ 123


// 7 Compare by ASCII Codes
// Create a function that compares two words based on the sum of their ASCII codes and returns the word with the smaller ASCII sum.


function asciiSort(arr) {
  

}
// console.log(asciiSort(["hey", "man"])); // ➞ "man"
// ["h", "e", "y"] ➞ sum([104, 101, 121]) ➞ 326
// ["m", "a", "n"] ➞ sum([109, 97, 110]) ➞ 316
// console.log(asciiSort(["majorly", "then"])); // ➞ "then"
// console.log(asciiSort(["victory", "careless"]) ); //➞ "victory"

// 7 Peeling off the Outer Layers
// Given an array of arrays, return a new array of arrays containing every element, except for the outer elements.

function peelLayerOff(arr) {


    const peeled = arr.slice(1, -1).map(row => row.slice(1, -1));
    return peeled;
}
// console.log(peelLayerOff([
//   ["a", "b", "c", "d"],
//   ["e", "f", "g", "h"],
//   ["i", "j", "k", "l"],
//   ["m", "n", "o", "p"]
// ])); // ➞ [
//   ["f", "g"],
//   ["j", "k"]
// ]

// console.log(peelLayerOff([
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25],
//   [26, 27, 28, 29, 30],
//   [31, 32, 33, 34, 35]
// ]));  //➞ [
//   [7, 8, 9],
//   [12, 13, 14],
//   [17, 18, 19],
//   [22, 23, 24],
//   [27, 28, 29]
// ]

// console.log(peelLayerOff([
//   [true, false, true],
//   [false, false, true],
//   [true, true, true]
// ])); // ➞ [[false]]

// console.log(peelLayerOff([
//   ["hello", "world"],
//   ["hello", "world"]
// ]));// ➞ []


// 8 Cycling Through Strings
// Given two strings, repeatedly cycle through all of the letters in the first string until it is the same length as the second string.

function stringCycling(str1, str2){
    let res = "";
    for (let i = 0; i<str2.length; i++) {
        res += str1[i]
    }
    return res
}

// console.log(stringCycling("abc", "hello")); // ➞ "abcab"
// console.log(stringCycling("programming", "edabit") ); //➞ "progra"
// console.log(stringCycling("the world in me evolves in hers", "i love Tesh, so much so")); // ➞ "the world in me evolves"
// console.log(stringCycling("a thing of beauty is a joy forever", "indulge me surely")); // ➞ "a thing of beauty"
// console.log(stringCycling("to", "hide") );//➞ "toto"
// console.log(stringCycling("such a feeling coming over me", "top of the world")); //➞ "such a feeling c"

// 9 Joining Digits Together
// Create a function which takes in a number n as input and returns all numbers up to and including n joined together in a string. Separate each digit from each other with the character "-".

function joinDigits(n) {
    let res = [];
    for (let i = 1; i <= n; i++) {
        res.push(i);

    }
    return res.join("-")
}
// console.log(joinDigits(4) ); //➞ "1-2-3-4"
// console.log(joinDigits(11)); // ➞ "1-2-3-4-5-6-7-8-9-1-0-1-1"
// console.log(joinDigits(15)); // ➞ "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5"

// 10 Return an Array of Subarrays
// Write a function that takes three arguments (x, y, z) and returns an array containing x subarrays (e.g. [[], [], []]), each containing y number of item z.

// x Number of subarrays contained within the main array.
// y Number of items contained within each subarray.
// z Item contained within each subarray.
// Example
function matrix(x, y, z) {
    let res = [];

    for (let i = 1; i <= x; i++) {
        let innerArray = [];

        for (let j = 1; j <= y; j++) {
            innerArray.push(z);
        }

        res.push(innerArray)
    }
    return res
}

// console.log(matrix(3, 2, 3)); // ➞ [[3, 3], [3, 3], [3, 3]]
// console.log(matrix(2, 1, "edabit")); // ➞ [["edabit"], ["edabit"]]
// console.log(matrix(3, 2, 0)); // ➞ [[0, 0], [0, 0], [0, 0]]


