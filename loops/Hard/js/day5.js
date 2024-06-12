// 1 Burglary Series (05): Third Most Expensive
// Time to call your lover to inform what he/she lost in the burglary.

// Given an object of the stolen objects, return the 3rd most expensive item on the list. If that is not possible, because there are not enough items, return false.

function thirdMostExpensive(obj) {
    let keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].length < 3) {
            return keys[keys.length - 1];
        }

    }
    return false
}

// console.log(thirdMostExpensive({})); // ➞ false
// console.log(thirdMostExpensive({ piano: 100, tv: 200 })); //➞ false
// console.log(thirdMostExpensive({ piano: 400, tv: 300, stereo: 200 })); //  ➞ "stereo"
// console.log(thirdMostExpensive({ piano: 1000, tv: 500, ball: 10, mirror: 200, })); //➞ "mirror"


// 2 Simple Counting
// Mubashir needs your help to count a specific digit in an array.

// You have to create a function that takes two integers n and d and makes an array of squares of all numbers from 0...<= n and returns the count of the digits d in the array.
function countDigits(n, d) {
    let countDigits = 0;
    for (let i = 0; i <= n; i++) {
        let square = i*i;
        let squares =  square.toString();

         
        for (let char of squares) {
            if (char === d.toString()) { {
            countDigits++;
        } }
    }
    }
    return countDigits
}

// console.log(countDigits(10, 1)) //➞ 4
// // Squared array from 0 to 10 = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
// // Digit 1 appeared 4 times in the array
// console.log(countDigits(25, 2)) //➞ 9
// console.log(countDigits(10, 1)) //➞ 4



// 3 Primes Below a Given Number
// Create a function that will find all primes below a given number. Return the result as an array.

function primesBelowNum(n){
    let res = [];
    for(let  i = 1; i<=n; i++){
        if(i % 2 !== 0){
            res.push(i);
        } 
    }
    return res
}

// console.log(primesBelowNum(5) ); //➞ [2, 3, 5]
// console.log(primesBelowNum(10)); // ➞ [2, 3, 5, 7]
// console.log(primesBelowNum(20)); // ➞ [2, 3, 5, 7, 11, 13, 17, 19]


// 4 All Rotations of a String
// Create a left rotation and a right rotation function that returns all the left rotations and right rotations of a string.

function leftRotations(str){
let res = [];

for(let i = 0; i<str.length ; i++){
    let rotation = str.slice(i) + str.slice(0, i);
    res.push(rotation);

}
return res
}

function rightRotations(str){
    let res = [];

    for(let i = str.length; i>= 0 ; i--){
        let rotation = str.slice(i) + str.slice(0, i);
        res.push(rotation);
    
    }
    return res
}

// console.log(leftRotations("abc") ); // ➞ ["abc", "bca", "cab"]
// console.log(rightRotations("abc")); //  ➞ ["abc", "cab", "bca"]
// console.log( leftRotations("abcdef") ); // ➞ ["abcdef", "bcdefa", "cdefab", "defabc", "efabcd", "fabcde"]
// console.log(rightRotations("abcdef") ); // ➞ ["abcdef", "fabcde", "efabcd", "defabc", "cdefab", "bcdefa"]


// 5 Beginning and End Pairs
// Write a function that pairs the first number in an array with the last, the second number with the second to last, etc.

// Examples
// pairs([1, 2, 3, 4, 5, 6, 7]) ➞ [[1, 7], [2, 6], [3, 5], [4, 4]]

// pairs([1, 2, 3, 4, 5, 6]) ➞ [[1, 6], [2, 5], [3, 4]]

// pairs([5, 9, 8, 1, 2]) ➞ [[5, 2], [9, 1], [8, 8]]

// pairs([]) ➞ []