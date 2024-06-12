// 1 Sum of Resistance in Parallel Circuits
// If two or more resistors are connected in parallel, the overall resistance of the circuit reduces. It is possible to calculate the total resistance of a parallel circuit by using this formula:

// 1/RTotal = 1/R1 + 1/R2 + 1/R3 ...

// Create a function that takes an array of parallel resistance values, and calculates the total resistance of the circuit.

// Worked Example
// parallelResistance([6, 3, 6]) ➞ 1.5

// 1/RTotal = 1/6 + 1/3 + 1/6
// 1/RTotal = 2/3
// RTotal = 3/2 = 1.5
// Examples

function parallelResistance(arr) {
    let reciprocalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        reciprocalSum += 1 / arr[i];
    }
    return 1 / reciprocalSum;
}

// console.log(parallelResistance([6, 3]));  // ➞ 2
// console.log(parallelResistance([10, 20, 10]));  // ➞ 4
// console.log(parallelResistance([500, 500, 500]));  // ➞ 166.6
// // Round to the nearest decimal place

// 2 Odd Up, Even Down — N Times
// Create a function that performs an even-odd transform to an array, n times. Each even-odd transformation:

// Adds two (+2) to each odd integer.
// Subtracts two (-2) from each even integer.
// Examples

function evenOddTransform(arr, n) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            res.push(arr[i] - 2 * n)
        } else {
            res.push(arr[i] + 2 * n)
        }
    }
    return res
}
// console.log(evenOddTransform([3, 4, 9], 3) ); //➞ [9, -2, 15]
// // Since [3, 4, 9] => [5, 2, 11] => [7, 0, 13] => [9, -2, 15]
// console.log(evenOddTransform([0, 0, 0], 10)); // ➞ [-20, -20, -20]
// console.log(evenOddTransform([1, 2, 3], 1) ); //➞ [3, 0, 5]


// 3 War of Numbers
// There's a great war between the even and odd numbers. Many numbers already lost their lives in this war and it's your task to end this. You have to determine which group sums larger: the evens, or the odds. The larger group wins.

// Create a function that takes an array of integers, sums the even and odd numbers separately, then returns the difference between the sum of the even and odd numbers.

// Examples
function warOfNumbers(arr) {
    let evenNumber = 0;
    let oddNuber = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumber += arr[i];
        } else {
            oddNuber += arr[i];
        }


    }
    return Math.abs(evenNumber - oddNuber)

}
// console.log(warOfNumbers([2, 8, 7, 5])); // ➞ 2
// 2 + 8 = 10
// 7 + 5 = 12
// 12 is larger than 10
// So we return 12 - 10 = 2

// console.log(warOfNumbers([12, 90, 75]) ); //➞ 27
// console.log(warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243])); // ➞ 168


// 4 Reverse the Order of Words with Five Letters or More
// Write a function that takes a string of one or more words as an argument and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples
function reverse(str) {
    let words = str.split(" ");
    let res = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= 5) {
            res.push(words[i].split("").reverse().join(""));
        } else {
            res.push(words[i]);
        }
    }
    return res.join(" ");
}

// console.log(reverse("Reverse")); // ➞ "esreveR"
// console.log(reverse("This is a typical sentence.")); //➞ "This is a lacipyt .ecnetnes"
// console.log(reverse("The dog is big.")); // ➞ "The dog is big."


// 6 Find Unique Positive Numbers from Array
// Write a function that takes an array and returns a new array with unique positive (more than 0) numbers.

// Examples
function uniqueArr(arr) {

    let res = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            res.push(arr[i])
        }
    }
    return res
}
// console.log(uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1])); // ➞ [1, 3]
// console.log(uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3])); //➞ [3, 5]
// console.log(uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5]));// ➞ [10, 6, 13, 5]

// 7 Finish the Sentence You're On!
// POV: You are in an exam and time has just run out. While the teacher's back is turned, you hastily take the opportunity to finish scribbling down the last few words of the conclusion.

// For this challenge, it takes 0.5 seconds to write a character (not including spaces). Given the full sentence and the unfinished sentence as inputs, return the time it takes to finish writing in seconds.

// // Worked Example
// console.log(timeToFinish(
//     "And so brings my conclusion to its conclusion.",
//     "And so brings my conclusion to"
// )); //➞ 7

// "its" has 3 characters
// "conclusion." has 11 characters, including punctuation.
// 11 + 3 = 14
// 14 x 0.5 = 7
// Remember not to include spaces.
// Examples
function timeToFinish(full, part) {
    let str1 = full.split(" ");
    let str2 = part.split(" ");
    let count = 0;

    for (let i = 0; i < str2.length; i++) {
        if (str1.includes(str2[i])) {

            count++;
        }
    }
    return count

}
// console.log(timeToFinish(
//     "And so brings my conclusion to its conclusion.",
//     "And so brings my conclusion to its conclus"
// )); // ➞ 2


// console.log(timeToFinish(
//     "As a result, my point is still valid.",
//     "As a result, my"
// )); // ➞ 9

// console.log(timeToFinish(
//     "Thank you for reading my essay.",
//     "T"
// )); // ➞ 12.5


// 8 Who's in First Place?
// Create a function that takes a string road and returns the car that's in first place. The road will be made of "=", and cars will be represented by letters in the alphabet.

// Examples
function firstPlace(str) {
    let words = str.split("");
    for (let i = 0; i < words.length; i++) {
        if (i < words.length - 1) {
            return str[i];
        }
    }
}
// NO SOLVE
// console.log(firstPlace("====b===O===e===U=A==") ); //➞ "A"
// console.log(firstPlace("e==B=Fe")  ); //➞ "e"
// console.log(firstPlace("proeNeoOJGnfl") ); // ➞ "l"



// 9 Neutralisation
// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.
// Worked Example

// neutralise("+-+", "+--") ➞ "+-0"
// Compare the first characters of each string, then the next in turn.
// "+" against a "+" returns another "+".
// "-" against a "-" returns another "-".
// "+" against a "-" returns "0".
// Return the string of characters.
// Examples

function neutralise(s1, s2) {
    let res = "";
    let x = "";
    for (let i = 0; i < s2.length; i++) {
        if (s1[i] !== s2[i]) {
            res += "0";

        } else {
            res += s1[i];
        }
    }

    return res
}

// console.log(neutralise("--++--", "++--++")); // ➞ "000000"
// console.log(neutralise("-+-+-+", "-+-+-+")); // ➞ "-+-+-+"
// console.log(neutralise("-++-", "-+-+")); //➞ "-+00"


// 10 Filter Repeating Character Strings
// Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).

// Examples
function identicalFilter(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i] && arr[i].length >= 1 ) {
            res.push(arr[i])
        } 
        return res
    }
}
// console.log(identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]));
// //➞ ["aaaaaa", "d", "eeee"]
// console.log(identicalFilter(["88", "999", "22", "545", "133"]));
// //➞ ["88", "999", "22"]
// console.log(identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]));
// ➞ []

// 11 Find the Second Occurrence of "zip" in a String
// Write a function that returns the position of the second occurrence of "zip" in a string, or -1 if it does not occur at least twice. Your code should be general enough to pass every possible case where "zip" can occur in a string.

// Examples
function findZip(str) {
    let res = 0;

    for (let i = 0; i < str.length; i++) {

        if ("zip" === str[i].length) {
            res += 1
        } else {
            return -1
        }
    }
    // No solve 
    return res
}
// console.log(findZip("all zip files are zipped")); // ➞ 18
// console.log(findZip("all zip files are compressed")); // ➞ -1


// 12 Negative Image
// Suppose an image can be represented as a 2D array of 0s and 1s. Write a function to reverse an image. Replace the 0s with 1s and vice versa.

// Examples

function reverseImage(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let row = [];
        for (let j = 0; j < arr[i].length; j++) {
            // let res = [];
            if (arr[i][j] === 1) {
                row.push(0);
            } else if (arr[i][j] === 0) {
                row.push(1)
            }

        }

        res.push(row)
    }
    return res
}

// console.log(reverseImage([
//     [1, 0, 0],
//     [0, 1, 0],
//     [0, 0, 1]
// ])); //➞ [
// //   [0, 1, 1],
//   [1, 0, 1],
//   [1, 1, 0]
// ]

// console.log(reverseImage([
//     [1, 1, 1],
//     [0, 0, 0]
// ])); //➞ [
//   [0, 0, 0],
//   [1, 1, 1]
// ]

// console.log(reverseImage([
//     [1, 0, 0],
//     [1, 0, 0]
// ]));  //➞ [
//   [0, 1, 1],
//   [0, 1, 1]
// ]


// 13 Sum of all Evens in a Matrix
// Create a function that returns the sum of all even elements in a 2D matrix.

// Examples
function sumOfEvens(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length; j++) {

            if (arr[i][j] % 2 === 0) {
                sum += arr[i][j]
            }
        }
    }
    return sum
}
// console.log(sumOfEvens([
//   [1, 0, 2],
//   [5, 5, 7],
//   [9, 4, 3]
// ])); // ➞ 6

// // 2 + 4 = 6

// console.log(sumOfEvens([
//   [1, 1],
//   [1, 1]
// ]));// ➞ 0

// console.log(sumOfEvens([
//   [42, 9],
//   [16, 8]
// ]));// ➞ 66

// console.log(sumOfEvens([
//   [],
//   [],
//   []
// ]));// ➞ 0

// 14 Reverse Coding Challenge #6
// This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.

// Your task is to create a function that, when fed the inputs below, produces the sample outputs shown.

// Examples
function mysteryFunc(num) {
    let result = 1;
    while (num > 0) {
        let digit = num % 10;
        result *= digit;
        num = Math.floor(num / 10);
    }
    return result;
}


console.log(mysteryFunc(152)); // ➞ 10
console.log(mysteryFunc(832)); // ➞ 48
console.log(mysteryFunc(19) ); //➞ 9
console.log(mysteryFunc(133)); // ➞ 9


// 15 Record Temperatures
// You are given two arrays that each contain data that represents the min and max weather temperatures for each day of the week.

// The records array contains the all-time record low/high temperatures for that day of the week.

// [[record low, record high], ...]
// The current week array contains the daily low/high temperatures for each day of the current week.

// [[daily low, daily high], ...]
// A daily high temperature is considered a new record high if it is higher than the record high for that day of the week. A daily low temperature is considered a new record low if it is lower than the record low for that day of the week.

// Compare the daily low/high temperatures of the current week to the record lows/highs and return an array with the updated record temperatures.

// There may be multiple record temperatures in a week.
// If there are no broken records return the original records array.
// Example

function recordTemps(record, currentWeek) {

    let res = [];
    for (let i = 0; i < record.length; i++) {
        let low = Math.min(...record[i]);
        let hight = Math.max(record[i][1], currentWeek[i][1]);
        res.push([low, hight])
    }

    return res
}

//             sun       mon      tues       wed      thur      fri       sat
// console.log(recordTemps([[34, 82], [24, 82], [20, 89],  [5, 88],  [9, 88], [26, 89], [27, 83]],
//             [[44, 72], [19, 70], [40, 69], [39, 68], [33, 64], [36, 70], [38, 69]]));

// ➞           [[34, 82], [19, 82], [20, 89], [5, 88], [9, 88], [26, 89], [27, 83]]



// 16 Syncopated Rhythm
// Syncopation means an emphasis on a weak beat of a bar of music; most commonly, beats 2 and 4 (and all other even-numbered beats if applicable).

// You will be given a string representing beats, where hashtags # represent emphasized beats. Create a function that returns true if the line of music contains any syncopation, and false otherwise.

// Examples

function hasSyncopation(str) {

    for (let i = 1; i < str.length; i += 4) {
        if (str[i] === "#") {
            return true;
        }
    }
    return false
}
// console.log(hasSyncopation(".#.#.#.#")); // ➞ true
// // There are Hash signs in the second, fourth, sixth and
// // eighth positions of the string.

// console.log(hasSyncopation("#.#...#.")); // ➞ false
// // There are no Hash signs in the second, fourth, sixth or
// // eighth positions of the string.

// console.log(hasSyncopation("#.#.###.")); // ➞ true
// There is a Hash sign in the sixth position of the string.


// 17 Harshad Number
// A number is said to be Harshad if it's exactly divisible by the sum of its digits. Create a function that determines whether a number is a Harshad or not.

// Examples
function isHarshad(n) {
    let res = n;
    let total = 0;
    for (let i = 1; i <= n; i++) {
        res += 1
        total = res / 11;
        if (n % total === 0) {
            return true;
        }

    }
    return false

    // return total
}
// console.log(isHarshad(75)); //➞ false
// // 7 + 5 = 12
// // 75 is not exactly divisible by 12
// console.log(isHarshad(171)); // ➞ true
// // 1 + 7 + 1 = 9
// // 9 exactly divides 171
// console.log(isHarshad(481)); // ➞ true
// console.log(isHarshad(89)); //➞ false
// console.log(isHarshad(516)); // ➞ true
// console.log(isHarshad(200)); // ➞ true
