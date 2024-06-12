//1 Array Indexing

// Given an index and an array, return the value of the array with the given index.

// Examples
// valueAt([1, 2, 3, 4, 5, 6], 10 / 2) ➞ 6
// valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2) ➞ 5
// valueAt([1, 2, 3, 4], 6.535355314 / 2) ➞ 4

function valueAt(arr, index) {
    // let math = Math.floor(index);
    // return arr[math]
    // let checkindex = Math.floor(index);
    for (let i = 0; i < arr.length; i++) {
        if (i === checkindex) {
            return arr[i];
        }
    }
}

// console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2));
// console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2));
// console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2));


//2 Find the Index (Part 1)
// Create a function that finds the index of a given item.

//  Examples
// search([1, 5, 3], 5) ➞ 1
// search([9, 8, 3], 3) ➞ 2
// search([1, 2, 3], 4) ➞ -1

function search(arr, item) {
    //  return arr.indexOf(item)
    // return arr.lastIndexOf(item)

    // for (let i = 0; i < arr.length; i++) {
    //     const currentelement = arr[i]
    //     if (currentelement === item) {
    //         return i
    //     }
    // }
    // return -1
}
// console.log(search([1, 5, 3], 5));
// console.log(search([9, 8, 3], 3));
// console.log(search([1, 2, 3], 4));

// 3 Buggy Code (Part 3)
// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// Examples
// sumArray([1, 2, 3, 4, 5]) ➞ 15
// sumArray([-1, 0, 1]) ➞ 0
// sumArray([0, 4, 8, 12]) ➞ 24

function sumArray(arr) {
    // let sum = 0;
    // for(let i = 0; i < arr.length; i++){
    //    sum += arr[i];
    // }
    // return  sum

    let total = arr.reduce((a, b) => {
        return a + b;
    })
    return total;

}
// console.log(sumArray([1, 2, 3, 4, 5]))
// console.log(sumArray([-1, 0, 1]));
// console.log(sumArray([0, 4, 8, 12]));


// 4 Find the Index (Part #2)
// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

// Examples
// search([1, 2, 3, 4], 3) ➞ 2
// search([2, 4, 6, 8, 10], 8) ➞ 3
// search([1, 3, 5, 7, 9], 11) ➞ -1

function search(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i
        }
    }
    return -1
}
// console.log(search([1, 2, 3, 4], 3));
// console.log(search([2, 4, 6, 8, 10], 8) );
// console.log(search([1, 3, 5, 7, 9], 11) );


// 5 Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.

// Examples
// check([1, 2, 3, 4, 5], 3) ➞ true
// check([1, 1, 2, 1, 1], 3) ➞ false
// check([5, 5, 5, 6], 5) ➞ true
// check([], 5) ➞ false

function check(arr, num) {
    // return arr.includes(item);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return true;
        }
    }
    return false
}
// console.log(check([1, 2, 3, 4, 5], 3));
// console.log(check([1, 1, 2, 1, 1], 3));
// console.log(check([5, 5, 5, 6], 5));
// console.log(check([], 5));

