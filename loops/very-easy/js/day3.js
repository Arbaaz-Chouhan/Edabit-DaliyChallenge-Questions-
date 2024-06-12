// 1 Give Me the Even Numbers
// Create a function that takes two parameters (start, stop), and returns the sum of all even numbers in the range.

function sumEvenNumsInRange
    (start, stop) {
    let res = 0;
    for (let i = start; i <= stop; i++) {
        if (i % 2 === 0) {
            res += i
        }
    }
    return res
}
// console.log(sumEvenNumsInRange(10, 20)); //➞ 90
// // 10, 12, 14, 16, 18, 20
// console.log(sumEvenNumsInRange(51, 150)); // ➞ 5050
// console.log(sumEvenNumsInRange(63, 97)); //➞ 1360

// 2 Hamming Distance
// Hamming distance is the number of characters that differ between two strings.

// To illustrate:

// String1: "abcbba"
// String2: "abcbda"

// Hamming Distance: 1 - "b" vs. "d" is the only difference.
// Create a function that computes the hamming distance between two strings.

function hammingDistance(str1, str2) {
    let res = 0;
    for (let i = 0; i < str2.length; i++) {
        if (str1[i] !== str2[i]) {
            res += 1;

        }
    }
    return res
}
// console.log(hammingDistance("abcde", "bcdef") );//➞ 5
// console.log(hammingDistance("abcde", "abcde") );//➞ 0
// console.log(hammingDistance("strong", "strung")); // ➞ 1


// 3 Find the Largest Number in an Array
// Create a function that takes an array of numbers. Return the largest number in the array.

function findLargestNum(arr) {
    // let res = 0;

    // for (let i = 0; i < arr.length; i++) {
    //     let max = -Infinity;

    //     for (let j = 0; j < arr[i].length; j++) {
    //         const currentEle = arr[i][j]
    //         if (max < currentEle) {
    //             max = currentEle;
    //         }
    //     }
    //     res += max;
    // }
    // return res;


for(let i = 1; i<arr.length; i++){
    let maxNum =  Math.max(arr[i]);
    return maxNum;
}
}

// console.log(findLargestNum([4, 5, 1, 3])); // ➞ 5
// console.log(findLargestNum([300, 200, 600, 150])) // ➞ 600
// console.log(findLargestNum([1000, 1001, 857, 1])); // ➞ 1001

// 4 Typing Game
// You're in the midst of creating a typing game.

// Create a function that takes in two arrays: the array of user-typed words, and the array of correctly-typed words and outputs an array containing 1s (correctly-typed words) and -1s (incorrectly-typed words).

// Inputs:
// User-typed Array: ["cat", "blue", "skt", "umbrells", "paddy"]
// Correct Array: ["cat", "blue", "sky", "umbrella", "paddy"]

// Output: [1, 1, -1, -1, 1]
function correctStream(user, Correct) {
    let res = [];
    for (let i = 0; i < Correct.length; i++) {
        if (user[i] === Correct[i]) {
            res.push(1);
        } else {
            res.push(-1)
        }
    }
    return res
}
// console.log(correctStream(
//     ["it", "is", "find"],
//     ["it", "is", "fine"]
// )); // ➞ [1, 1, -1]

// console.log(correctStream(
//     ["april", "showrs", "bring", "may", "flowers"],
//     ["april", "showers", "bring", "may", "flowers"]
// )); // ➞ [1, -1, 1, 1, 1]


//  5 Word Endings
// Create a function that adds a string ending to each member in an array.

function addEnding(arr, ending) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i] += ending);
    }
    return res
}
// console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"));
//  //➞ ["cleverly", "meekly", "hurriedly", "nicely"]

// console.log(addEnding(["new", "pander", "scoop"], "er"));
// //➞ ["newer", "panderer", "scooper"]

// console.log(addEnding(["bend", "sharpen", "mean"], "ing"));
//  //➞ ["bending", "sharpening", "meaning"]

// 6 Array of Consecutive Numbers
// Implement a function that returns an array containing all the consecutive numbers in ascendant order from the given value low up to the given value high (bounds included).

function getSequence(low, high) {
    let res = [];
    for (let i = low; i <= high; i++) {
        res.push(i)
    }
    return res
}
// console.log(getSequence(1, 5)); // ➞ [1, 2, 3, 4, 5]
// console.log(getSequence(98, 100) ); //➞ [98, 99, 100]
// console.log(getSequence(1000, 1000)); // ➞ [1000]


// 7 Negate the Array of Numbers
// Given an array of numbers, console.log();negate all elements contained within.

// Negating a positive value -+n will return -n, because all +'s are removed.
// Negating a negative value --n will return n, because the first - turns the second minus into a +.

function negate(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (+arr[i]) {
            res.push(-arr[i]);
        }else if(-arr[i]){
            res.push(+arr[i])
        }
    }
    return res
}
// console.log(negate([1, 2, 3, 4])); //➞ [-1, -2, -3, -4]
// console.log(negate([-1, 2, -3, 4])); //➞ [1, -2, 3, -4]
// console.log(negate([])); //➞ []


// 8 Multiply by Length
// Create a function to multiply all of the values in an array by the amount of values in the given array.


// function multiplyByLength(arr){
//     let res = [];
//     for(let i = 0; i<arr.length; i++){
//         res.push(arr.length * arr[i])
//     }
//     return res
// }

// console.log(multiplyByLength([2, 3, 1, 0])); // ➞ [8, 12, 4, 0]
// console.log(multiplyByLength([4, 1, 1])); // ➞ ([12, 3, 3])
// console.log(multiplyByLength([1, 0, 3, 3, 7, 2, 1])); // ➞  [7, 0, 21, 21, 49, 14, 7]
// console.log(multiplyByLength([0])); //➞ ([0])

// 9 Find the Smallest Number in an Array
// Create a function that takes an array of numbers and returns the smallest number in the set.

function findSmallestNum(arr){
   
    let min = Math.min(...arr)
    return min;
}
// console.log(findSmallestNum([34, 15, 88, 2])); // ➞ 2
// console.log(findSmallestNum([34, -345, -1, 100])); // ➞ -345
// console.log(findSmallestNum([-76, 1.345, 1, 0]) ); //➞ -76
// console.log(findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]) ); //➞ -0.9999
// console.log(findSmallestNum([7, 7, 7])); // ➞ 7

// 10 Difference of Max and Min Numbers in Array
// Create a function that takes an array and returns the difference between the biggest and smallest numbers.

function diffMaxMin(arr){
    let res = 0;
    
        let min = Math.min(...arr);
        let max = Math.max(...arr);
        res += max - min;

   
    return res
}
// console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21])); // ➞ 82
// Smallest number is -50, biggest is 32.

// console.log(diffMaxMin([44, 32, 86, 19])); // ➞ 67
// Smallest number is 19, biggest is 86.


// 11 Generate a console.log(Countdown of ); Numbers in an Array
// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

function countdown(n){
    let res = [];

    for(let i = n; i >= 0; i-- ){
        res.push(i);
    }
    return res;
}
// console.log(countdown(5)); //➞ [5, 4, 3, 2, 1, 0]
// console.log(countdown(1)); //➞ [1, 0]
// console.log(countdown(0)); //➞ [0]

// 12 Convert Number to String of Dashes
// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.

function Go(n){
    let str = "";
    for(let i = 1; i<=n; i++){
      str += "-"
    }

    return str
}
// console.log(Go(1)); // ➞ "-"
// console.log(Go(5)); // ➞ "-----"
// console.log(Go(3)); // ➞ "---"