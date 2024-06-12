// 1 Absolute Sum
// Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

function getAbsSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.abs(arr[i])


    }
    return sum;
}
// console.log(getAbsSum([2, -1, 4, 8, 10])); // ➞ 25
// console.log(getAbsSum([-3, -4, -10, -2, -3])); // ➞ 22
// console.log(getAbsSum([2, 4, 6, 8, 10])); // ➞ 30
// console.log(getAbsSum([-1])); // ➞ 1


// 2 Return the Index of the First Vowel
// Create a function that returns the index of the first vowel in a string.
function firstVowel(str1) {
    let str2 = "aeAIou";
    for (let i = 0; i < str1.length; i++) {
        if (str2.includes(str1[i])) {
            return i;
        }
    }
}
// console.log(firstVowel("apple")); // ➞ 0
// console.log(firstVowel("hello")); // ➞ 1
// console.log(firstVowel("STRAWBERRY") ); //➞ 3
// console.log(firstVowel("pInEaPPLe") ); //➞ 1

// 3 Find the Largest Numbers in a Group of Arrays
// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

function findLargestNums(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        let largest = Math.max(...arr[i]);
        res.push(largest);
    }
    return res
}
// console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); // ➞ [7, 90, 2]
// console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])); // ➞ [-34, -2, 7]
// console.log(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]])); // ➞ [0.7634, 9.32, 9]

// 4 Scrabble Hand
// Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.

// Here's an example hand:

// [
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 }
// ]
// The players maximumScore from playing all these tiles would be 1 + 5 + 10 + 8 + 2 + 1 + 1, or 28.

function maximumScore(arr) {
    let res = 0;

    for (let i = 0; i < arr.length; i++) {
        res += arr[i].score

    }
    return res
}


// console.log(maximumScore([
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 }
// ]));//  ➞ 28

// console.log(maximumScore([
//   { tile: "B", score: 2 },
//   { tile: "V", score: 4 },
//   { tile: "F", score: 4 },
//   { tile: "U", score: 1 },
//   { tile: "D", score: 2 },
//   { tile: "O", score: 1 },
//   { tile: "U", score: 1 }
// ]));// ➞ 15

// 5 Transform into an Array with No Duplicates
// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.

// [1, 3, 3, 5, 5, 5]
// // original array

// [1, 3, 5]
// // original array transformed into a set
// Create a function that sorts an array and removes all duplicate items from it.

function set(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i])
        }
    }
    return res
}
// console.log(set([1, 3, 3, 5, 5])); // ➞ [1, 3, 5]
// console.log(set([4, 4, 4, 4])); // ➞ [4]
// console.log(set([5, 7, 8, 9, 10, 15])); // ➞ [5, 7, 8, 9, 10, 15]
// console.log(set([3, 3, 3, 2, 1])); // ➞ [1, 2, 3]


// 6 Amplify the Multiples of Four
// In this challenge, you must generate a sequence of consecutive numbers, from a lower bound that will always be equal to 1, up to a variable given higher bound (including the bounds in the sequence).

// Each number of the sequence that can be exactly divided by 4 must be amplified by 10 (see notes below).

// Given a higher bound num, implement a function that returns an array with the sequence of numbers, after that every multiple of 4 has been amplified.

function amplify(num) {
    let res = [];

    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += 1;
        res.push(sum);
        if (i % 4 === 0) {
            res.push(i * 10)
        }
    }
    return res;
}
// console.log(amplify(4) ); //➞ [1, 2, 3, 40]
// Create a sequence from 1 to 4
// 4 is exactly divisible by 4, so it will be 4*10 = 40

// console.log(amplify(3) ); //➞ [1, 2, 3]
// Create a sequence from 1 to 3
// There are no numbers that can be exactly divided by 4

// console.log(amplify(25)); // ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
// Create a sequence from 1 to 25
// The numbers exactly divisible by 4 are: 4 (4*10 = 40), 8 (8 * 10 = 80)... and so on.

// 7 Hashes and Pluses
// Create a function that returns the number of hashes and pluses in a string.

function hashPlusCount(str) {
    let count1 = 0;
    let count2 = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "#") {
            count1 += 1;

        } else if (str[i] === "+") {
            count2 += 1;
        }
    }
    return [count1, count2]
}
// console.log(hashPlusCount("###+")); // ➞ [3, 1]
// console.log(hashPlusCount("##+++#")); // ➞ [3, 3]
// console.log(hashPlusCount("#+++#+#++#")); // ➞ [4, 6]
// console.log(hashPlusCount("")); // ➞ [0, 0]

// 8 Reverse the Case
// Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.


function reverseCase(str) {
    let res = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            res += str[i].toUpperCase();

        } else {
            res += str[i].toLowerCase();
        }

    }
    return res

}
// console.log(reverseCase("Happy Birthday")); // ➞ "hAPPY bIRTHDAY"
// console.log(reverseCase("MANY THANKS")); // ➞ "many thanks"
// console.log(reverseCase("sPoNtAnEoUs")); // ➞ "SpOnTaNeOuS"

// 9 Omnipresent Value
// A value is omnipresent if it exists in every subarray inside the main array.

// To illustrate:

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// // 3 exists in every element inside this array, so is omnipresent.
// Create a function that determines whether an input value is omnipresent for a given array.

function isOmnipresent(arr, value) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(value)) {
            return true
        } else {
            return false;
        }
    }
}
// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));// ➞ true
// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));// ➞ false
// console.log(isOmnipresent([[5], [5], [5], [6, 5]], 5)); // ➞ true
// console.log(isOmnipresent([[5], [5], [5], [6, 5]], 6)); // ➞ false

// 10 Count Ones in a 2D Array
// Create a function to count the number of 1s in a 2D array.


function countOnes(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 1) {
                count++;
            }
        }
    }
    return count;
}
// console.log(countOnes([
//     [1, 0],
//     [0, 0]
// ])); // ➞ 1

// console.log(countOnes([
//     [1, 1, 1],
//     [0, 0, 1],
//     [1, 1, 1]
// ])); // ➞ 7

// console.log(countOnes([
//     [1, 2, 3],
//     [0, 2, 1],
//     [5, 7, 33]
// ])); // ➞ 2


