//1 Return the First Element Array
// Create a function that takes an array containing only numbers and return the first element.

// Examples
// getFirstValue([1, 2, 3]) ➞ 1
// getFirstValue([80, 5, 100]) ➞ 80
// getFirstValue([-500, 0, 50]) ➞ -500


function getFirstValue(arr) {
    // return arr[0];
    // return arr.shift();
    // return arr.slice(0, 1);
    // return arr.splice(0, 1);
}
// console.log(getFirstValue([1, 2, 3]));
// console.log(getFirstValue([80, 5, 100]));
// console.log(getFirstValue([-500, 0, 50]));

//2 Pair Management
// Given two arguments, return an array which contains these two arguments.

// Examples
// makePair(1, 2) ➞ [1, 2]
// makePair(51, 21) ➞ [51, 21]
// makePair(512124, 215) ➞ [512124, 215]

function makePair(a, b) {
    return [a, b];
    // return Array(a , b)
}
// console.log(makePair(1, 2));
// console.log(makePair(51, 21));
// console.log(makePair(512124, 215));

//3 Learn Lodash: _.drop, Drop the First Elements of an Array
// According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

// Your challenge is to write your own version using vanilla JavaScript.

// Examples
// drop([1, 2, 3], 1) ➞[2, 3]
// drop([1, 2, 3], 2) ➞[3]
// drop([1, 2, 3], 5) ➞[]
// drop([1, 2, 3], 0) ➞[1, 2, 3]

function drop(arr1, arr2) {
    // return arr1.slice(arr2);
    // return arr1.splice(arr2)
    let main = [];
    for (let i = arr2; i < arr1.length; i++) {
        main.push(arr1[i])
    }
    return main
}

// console.log(drop([1, 2, 3], 1)); ➞[2, 3]
// console.log(drop([1, 2, 3], 2)); ➞[3]
// console.log(drop([1, 2, 3], 5)); ➞[]
// console.log(drop([1, 2, 3], 0)); ➞[1, 2, 3]

// //4 Upvotes vs Downvotes
// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

// Examples
// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13
// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31
// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0

function getVoteCount(vote) {
    return vote.upvotes - vote.downvotes
}
// console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
// console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));
// console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));

//5 Reverse an Array
// Write a function to reverse an array.

// Examples
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
// reverse([]) ➞ []

function reverse(arr) {
    let main = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        main.push(arr[i])
    }
    return main
}

// console.log(reverse([1, 2, 3, 4]));
// console.log(reverse([9, 9, 2, 3, 4]));
// console.log(reverse([]));

//6 Fix the Bug: Simple Array Manipulation

// Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

// Examples
// incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]
// incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]
// incrementItems([-1, -2, -3, -4]) ➞ [0, -1, -2, -3]

function incrementItems(arr) {
    let main = [];
    for (let i = 0; i < arr.length; i++) {
        main.push(arr[i] + 1);
    }
    return main

    // return arr.map((arr1) => arr1 + 1);

}
// console.log(incrementItems([0, 1, 2, 3]));
// console.log(incrementItems([2, 4, 6, 8]));
// console.log(incrementItems([-1, -2, -3, -4]));

//7 ES6: Destructuring Arrays I
// You can assign variables from arrays like this:

const arr = [1, 2, 3, 4, 5, 6]
let [a ,b] =  arr;

// console.log(a) // outputs 1
// console.log(b) // outputs 2

// With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax, where a === 1 and b === 2.
