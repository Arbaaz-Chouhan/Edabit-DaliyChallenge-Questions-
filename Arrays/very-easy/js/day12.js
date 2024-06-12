// 1 Nth Smallest Integer
// Given an unsorted array, create a function that returns the nth smallest integer (the smallest integer is the first smallest, the second smallest integer is the second smallest, etc).

// Examples
function nthSmallest(arr, nth) {

    if (arr.length >= nth) {
        return arr[nth - 1];
    } else {
        return null;
    }

}

// console.log(nthSmallest([1, 3, 5, 7], 1) ); //➞ 1
// console.log(nthSmallest([1, 3, 5, 7], 3) ); //➞ 5
// console.log(nthSmallest([1, 3, 5, 7], 5) ); //➞ null
// console.log(nthSmallest([7, 3, 5, 1], 2)); // ➞ 3


// 2 Odd Up, Even Down
// Create a function that goes through the array, incrementing (+1) for each odd-valued number and decrementing (-1) for each even-valued number.

// Examples
function transform(arr) {

    transformArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            transformArray.push(arr[i] + 1)
        } else {
            transformArray.push(arr[i] - 1)
        }
    }

    return transformArray
}
// console.log(transform([1, 2, 3, 4, 5])); // ➞ [2, 1, 4, 3, 6]
// console.log(transform([3, 3, 4, 3])); // ➞ [4, 4, 3, 4]
// console.log(transform([2, 2, 0, 8, 10])); // ➞ [1, 1, -1, 7, 9]

// 3 Applying Discounts
// Create a function that applies a discount d to every number in the array.

// Examples
function getDiscounts(arr, discount) {
    let deal = parseFloat(discount) / 100;
    let main = [];
    for (let i = 0; i < arr.length; i++) {
        main.push(arr[i] * deal)
    }
    return main
}
// console.log(getDiscounts([2, 4, 6, 11], "50%")); // ➞ [1, 2, 3, 5.5]
// console.log(getDiscounts([10, 20, 40, 80], "75%") ); //➞ [7.5, 15, 30, 60]
// console.log(getDiscounts([100], "45%")); // ➞ [45]


// 4 State Names and Abbreviations
// Create a function that filters out an array of state names into two categories based on the second parameter.

// Abbreviations abb
// Full names full
// Examples

function filterStateNames(arr, type) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (type === "abb" && arr[i].length <= 2) {
            res.push(arr[i]);
        } else if (type === "full" && arr[i].length > 2) {
            res.push(arr[i])

        }
    }
    return res
}

// console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb"));
// //➞ ["CA", "NY"]
// console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full"));
// //➞ ["Arizona", "Nevada"]
// console.log(filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb"));
// //➞ ["MT", "NJ", "TX", "ID", "IL"]
// console.log(filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full"));
// // //➞ []


// 5 Date Format
// Create a function that converts a date formatted as MM/DD/YYYY to YYYYDDMM.

// Examples
function formatDate(date) {
    let split = date.split('/');
    let formatDate = " ";

    for (let i = split.length - 1; i >= 0; i--) {
        formatDate += split[i]
    }
    return formatDate
}
// console.log(formatDate("11/12/2019")); // ➞ "20191211"
// console.log(formatDate("12/31/2019")); // ➞ "20193112"
// console.log(formatDate("01/15/2019")); // ➞ "20191501"

// 6 Repeat the Same Item Multiple Times
// Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.

// Examples
function repeat(item, items) {
    let main = [];
    for (let i = 0; i < items; i++) {
        main.push(item)
    }
    return main
}
// console.log(repeat("edabit", 3)); // ➞ ["edabit", "edabit", "edabit"]
// console.log(repeat(13, 5)); //➞ [13, 13, 13, 13, 13]
// console.log(repeat("7", 2)); //➞ ["7", "7"]
// console.log(repeat(0, 0));//➞ []


// 7 Return Only the Integer
// Write a function that takes an array of elements and returns only the integers.

// Examples
function returnOnlyInteger(arr) {
    let main = [];

    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            main.push(arr[i])
        }
    }
    return main
}
// console.log(returnOnlyInteger([9, 2, "space", "car", "lion", 16]));// ➞ [9, 2, 16]
// console.log(returnOnlyInteger(["hello", 81, "basketball", 123, "fox"]));// ➞ [81, 123]
// console.log(returnOnlyInteger([10, "121", 56, 20, "car", 3, "lion"]) );//➞ [10, 56, 20, 3]
// console.log(returnOnlyInteger(["String",  true,  3.3,  1])); //➞ [1]

// 8 Calculate Determinant of a 2x2 Matrix
// Create a function to calculate the determinant of a 2 * 2 matrix. The determinant of the following matrix is: ad - bc:

// [[a, b], [c, d]]
// Examples
function calcDeterminant(matrix) {

}
// console.log(calcDeterminant([
//     [1, 2],
//     [3, 4]
// ])); //➞ -2

// console.log(calcDeterminant([
//     [5, 3],
//     [3, 1]
// ])); // ➞ -4

// console.log(calcDeterminant([
//     [1, 1],
//     [1, 1]
// ]));  // ➞ 0

// 9 Exists a Number Higher?
// Write a function that returns true if there exists at least one number that is larger than or equal to n.

// Examples
function existsHigher(arr, item) {

    for (let i = 0; i < arr.length; i++) {
        if (item >= arr[i]) {
            return true;
        } else {
            return false
        }
    }
    return false
}
// console.log(existsHigher([5, 3, 15, 22, 4], 10)); // ➞ true
// console.log(existsHigher([1, 2, 3, 4, 5], 8)); // ➞ false
// console.log(existsHigher([4, 3, 3, 3, 2, 2, 2], 4)); // ➞ true
// console.log(existsHigher([], 5));// ➞ false

// 10 Reverse Coding Challenge #3
// This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.

// Your task is to create a function that, when fed the inputs below, produces the sample outputs shown.

// Examples

function sum(arr, item) {
    let main = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % item == 0) {
            main.push(0)
        } else {
            main.push(arr[i])
        }

    }
    return main
}

// console.log(sum([5, 7, 8, 2, 1], 2)); // ➞ [1, 1, 0, 0, 1]
// console.log(sum([9, 8, 16, 47], 4)); // ➞ [1, 0, 0, 3]
// console.log(sum([17, 11, 99, 55, 23, 1], 5)); // ➞ [2, 1, 4, 0, 3, 1]
// console.log(sum([6, 1], 7 )); //➞ [6, 1]
// console.log(sum([3, 2, 9], 3 )); //➞ [0, 2, 0]
// console.log(sum([48, 22, 0, 19, 33, 100], 10 ));//➞ [8, 2, 0, 9, 3, 0]

