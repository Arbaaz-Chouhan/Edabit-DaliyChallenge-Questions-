// 1 Sum of Numbers in an Array
// Create a function that takes an array of numbers nums as an argument. Square each number in the array if the number is even and square root √ the number if it is odd. Return the sum of the new array rounded to two decimal places.

// Example:

// [2, 4, 9]  ➞ 23
// 2 ^ 2 + 4 ^ 2 + √9 = 4 + 16 + 3 = 23
// Examples

function arraySum(nums) {
    let sum = 0;
    for (let num of nums) {
        if (num % 2 === 0) {
            sum += Math.pow(num, 2);
        } else {
            sum += Math.sqrt(num); // Square root the number if it's odd
        }
    }
    return parseFloat(sum.toFixed(2)); // Round the sum to two decimal places
}

// console.log(arraySum([1, 3, 3, 1, 10])); // ➞ 105.46
// console.log(arraySum([2, 3, 4, 5])); // ➞ 23.97
// console.log(arraySum([1, 31, 3, 11, 0])) // ➞ 11.62


// 2 Characters in Shapes
// Create a function to calculate how many characters in total are needed to make up the shape. You will be given an array of strings which make up a shape in the compiler (i.e. a square, a rectangle or a line).

// Examples

function countCharacters(shap) {
    let chat = 0;
    for (let i = 0; i < shap.length; i++) {
        chat += shap[i].length
    }
    return chat
}

// console.log(countCharacters([
//   "###",
//   "###",
//   "###"
// ])); //➞ 9

// console.log(countCharacters([
//   "22222222",
//   "22222222",
// ])); //➞ 16

// console.log(countCharacters([
//   "------------------"
// ]) ); //➞ 18

// console.log(countCharacters([])); // ➞ 0
// console.log(countCharacters(["", ""]));// ➞ 0

// 3 Find the Average of the Letters 📊
// Create a function that returns the average of a list composed of letters. First, find the number of the letter in the alphabet in order to find the average of the list.

// A = 1
// B = 2
// C = 3
// D = 4
// E = 5
// average = total sum of all numbers / number of item in the set
// Return the result rounded to two decimal points.

// Examples
function averageIndex(letters) {
    let sum = 0;
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let letter of letters) {
        let position = alphabet.indexOf(letter.toLowerCase()) + 1;
        sum += position;
    }
    let average = sum / letters.length;
    return average.toFixed(2);
}

// console.log(averageIndex(["a", "b", "c", "i"])); // ➞ 3.75
// console.log(averageIndex(["e", "d", "a", "b", "i", "t"])); // ➞ 6.83
// console.log(averageIndex(["y", "o", "u", "a", "r", "e", "t", "h", "e", "b", "e", "s", "t"])); // ➞ 12.62


// 4 Extremely Over-Nested
// Create a function that returns the original value from a matrix with too many sub-arrays.

// Examples
function deNest(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];

    }
    return str
}
// console.log(deNest([[[[[[[[[[[[3]]]]]]]]]]]])); //➞ 3
// console.log(deNest([[[[[[[true]]]]]]]));  //➞ true
// console.log(deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]])); // ➞ "edabit"

// 5 Cowboy Shootout
// Wild Roger is tasked with shooting down 6 bottles with 6 shots as fast as possible. Here are the different types of shots he could make:

// He could use one pistol to shoot a bottle with a "Bang!" in 0.5 seconds.
// Or he could use both pistols at once with a "BangBang!" to shoot two bottles in 0.5 seconds.
// Given an array of strings, return the time (in seconds) it took to shoot down all 6 bottles. Make sure to only count Bangs and BangBangs. Anything else doesn't count.

// Examples
function rogerShots(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "BangBang!") {
            return i
        }
    }
    return -1

}
// console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"])); // ➞ 3
// console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "BangBang!"])); // ➞ 2.5
// console.log(rogerShots(["Bang!", "BangBangBang!", "Boom!", "Bang!", "BangBang!", "BangBang!"])); // ➞ 2

// 6 CMS Selector Based on a Given String
// Write a function that takes an array of strings and a pattern (string) and returns the strings that contain the pattern in alphabetical order. If the pattern is an empty string, return all the strings passed in the input array.

// Examples
function cmsSelector(arr, str) {
    let res = [];
    for (let i = 0; i <arr.length; i++) {
        if (arr[i].includes(str)) {
            res.push(arr[i]);
        }
    }
    return res
}
// console.log(cmsSelector(["WordPress", "Joomla", "Drupal"], "w")); //➞ ["WordPress"]
// console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "ru")); // ➞ ["Drupal"]
// console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "")); // ➞ ["Drupal", "Joomla", "Magento", "WordPress"]

// 7 Convert Number to Corresponding Month Name
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.

function monthName(monthNumber) {

    const monthNames = {
        // Number:MonthName ,
        1: "January ",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December",
    };

    return monthNames[monthNumber];
};
// // Examples
// console.log(monthName(3) ); //➞ "March"
// console.log(monthName(12)); // ➞ "December"
// console.log(monthName(6) ); //➞ "June"

// 8 Unlucky 13
// Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.

// Examples
function unlucky13(arr) {
    let main = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 13 !== 0) {
            main.push(arr[i]);
        }

    }
    return main
}
// console.log(unlucky13([53, 182, 435, 591, 637])); // ➞ [53, 435, 591]
// // 182 and 637 are divisible by 13.

// console.log(unlucky13([24, 316, 393, 458, 1279])); // ➞ [24, 316, 393, 458, 1279]
// No numbers in the array are divisible by 13.

// console.log(unlucky13([104, 351, 455, 806, 871])); // ➞ []
// // All numbers in the array are divisible by 13.

// 9 Fix the Error: Filtering out Empty Arrays
// I am trying to filter out empty arrays from an array. In other words, I want to transform something that looks like this: ["a", "b", [], [], [1, 2, 3]] to look like ["a", "b", [1, 2, 3]]. My code looks like this:

// function removeEmptyArrays(arr) {
//   return arr.filter(x => x !== [])
// }
// However, somehow, the empty arrays still exist. Fix this incorrect code to remove the empty arrays.

function removeEmptyArrays(arr) {
    let main = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "") {
            main.push(arr[i])
        }


    }
    return main

}
// // Examples
// // What I want:
// console.log(removeEmptyArrays(["a", "b", []])); // ➞ ["a", "b"]
// console.log(removeEmptyArrays([1, 2, [], 4]) ); //➞ [1, 2, 4]

// // What I am getting:
// console.log(removeEmptyArrays(["a", "b", []])); // ➞ ["a", "b", []]
// console.log(removeEmptyArrays([1, 2, [], 4]) ); //➞ [1, 2, [], 4]


// 10 Product Divisible by Sum?
//Write a function that returns true if the product of an array is divisible by the sum of that same array. Otherwise, return false.

// Examples
function divisible(arr) {
    // let main =[];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            return "true"
        } else {
            return "flase"
        }
    }
    // return main
}
// console.log(divisible([3, 2, 4, 2])); // ➞ false

// console.log(divisible([4, 2, 6])); // ➞ true
// // 4 * 2 * 6 / (4 + 2 + 6)

// console.log(divisible([3, 5, 1])); // ➞ false
