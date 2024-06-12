// 1 Be Your Own Minifier
// Your boss has demanded you write a function to determine whether a given number n is prime or not. But there's a catch! The Blueberry Cæk™ you're using is a (rather extreme) discount model, and only has code storage space for a single line of code, and no more than the length of an old Tweet (140 characters).

// Can you still make a working function?

// (Re-)write the function isPrime() so that:

// It works! It must correctly return true or false depending on whether the number provided is prime or not.
// It takes up only a single line of code.
// It uses no more than 140 characters.

// const isPrime = n => n > 1 && Array(n - 1).fill().map((_, i) => i + 2).every(num => n % num !== 0);

// 2 Get the Diagonals
// Given a square array (n*n size) implement a function that returns a new array containing two arrays equal to the two diagonals, in the following order:

// diagonal 1 = from upper-left to lower-right corner
// diagonal 2 = from upper-right to lower-left corner

function getDiagonals(arr) {
    let res = [];

    let diagonal1 = [];
    let diagonal2 = [];

    for (let i = 0; i < arr.length; i++) {
   
        diagonal1.push(arr[i - 1][arr.length - 1]);
        diagonal2.push(arr[i - 1][i + i])
        res.push(diagonal1, diagonal2);
    }
   
    return res
}
// console.log(getDiagonals([[1, 2], [3, 4]])); // ➞ [ [1, 4], [2, 3] ]
// console.log(getDiagonals([["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]])); // ➞ [ ["a", "e", "i"], ["c", "e", "g"] ]
// console.log(getDiagonals([[true]])); // ➞ [ [true], [true] ]

// 3 Neighboring Letters
// Create a function that takes a string and checks if every single character is preceded and followed by a character adjacent to it in the english alphabet.

// Example: "b" should be preceded and followed by ether "a" or "c" (abc || cba || aba || cbc == true but abf || zbc == false).


function neighboring(str){
    let alphabet = "abccbaabacbc";
for(let i = 0; i<alphabet.length; i++){
    if(!alphabet.includes(str)){
        return false;
    }
}
return true
}
// console.log(neighboring("aba")); // ➞ true
// console.log(neighboring("abcdedcba")); // ➞ true
// console.log(neighboring("efghihfe")); // ➞ false
// console.log(neighboring("abc")); // ➞ true
// console.log(neighboring("qrstuv")); // ➞ true

// 4 Find the First Non-Repeated Character
// Create a function that accepts a string as an argument and returns the first non-repeated character.


function firstNonRepeatedCharacter(str){
  
    for(let i = 0; i<str.length; i++){
        let char = str[i];
        if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) {
            return char;
        }
    }
    return false;
}
// console.log(firstNonRepeatedCharacter("g")); // ➞ "g"
// console.log(firstNonRepeatedCharacter("it was then the frothy word met the round night")); // ➞ "a"
// console.log(firstNonRepeatedCharacter("the quick brown fox jumps then quickly blows air")); // ➞ "f"
// console.log(firstNonRepeatedCharacter("hheelloo")); // ➞ false
// console.log(firstNonRepeatedCharacter("")); // ➞ false

// 5 Rows of ASCII
// Given a very long string of ASCII characters, split the string up into equal sized groups of size width. To properly display the image, join up the groups with the newline character \n and return the output string.

// See the miniature examples below for clarity!



function formatAscii(str, num) {
    let res = "";
    for (let i = 0; i < str.length; i += num) {
        res += str + "\n";
    }
    return res;
}

// console.log(formatAscii("0123456789", 2)); // ➞ "01\n23\n45\n67\n89"
// console.log(formatAscii("................................", 8)); // ➞ "........\n........\n........\n........"
// console.log(formatAscii("^^^^^^^^", 1)); // ➞ "^\n^\n^\n^\n^\n^\n^\n^"

// 6 Strictly Increasing or Decreasing
// Create a function that takes an array and determines whether it's strictly increasing, strictly decreasing, or neither.


function check(arr) {
    let increasing = true;
    let decreasing = true;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            increasing = false;
        } else if (arr[i] < arr[i + 1]) {
            decreasing = false;
        }
    }

    if (increasing && !decreasing) {
        return "increasing";
    } else if (!increasing && decreasing) {
        return "decreasing";
    } else {
        return "neither";
    }
}
// console.log(check([1, 2, 3])); // ➞ "increasing"
// console.log(check([3, 2, 1])); // ➞ "decreasing"
// console.log(check([1, 2, 1])); // ➞ "neither"
// console.log(check([1, 1, 2])); // ➞ "neither"

//  7 Seven Boom!
// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".


function sevenBoom(arr){
    for(let  i = 0; i<arr.length; i++){
        if(String(arr[i]).includes(7)){
            return "Boom!";
        }
    }
    return "there is no 7 in the array";
  
}
// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])); // ➞ "Boom!"
// // 7 contains the number seven.
// console.log(sevenBoom([8, 6, 33, 100])); // ➞ "there is no 7 in the array"
// // None of the items contain 7 within them.
// console.log(sevenBoom([2, 55, 60, 97, 86])); // ➞ "Boom!"
// // 97 contains the number seven.

// 8 Number of Boomerangs
// A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

// Some boomerang examples:

// [3, 7, 3], [1, -1, 1], [5, 6, 5]
// Create a function that returns the total number of boomerangs in an array.

// To illustrate:

// [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// // 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
// Be aware that boomerangs can overlap, like so:

// [1, 7, 1, 7, 1, 7, 1]
// 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]


function countBoomerangs(arr){
    let collection = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i+2] && arr[i] != arr[i+1]) {
			collection++;
		}
	}
	return collection;
}

// console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1])); // ➞ 2
// console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9])); // ➞ 1
// console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9])); // ➞ 0




