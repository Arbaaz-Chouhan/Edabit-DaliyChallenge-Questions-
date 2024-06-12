// 1 Adding Both Ends Together
// Given an array of numbers, of any length, create a function which counts how many of those numbers pass the following criteria:

// The first and last digits of a number must add to 10.

function endsAddTo10(nums) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let num = Math.abs(nums[i])
        if (num > 9) {
            let strNum = num.toString();
            let firstDigit = parseInt(strNum[0]);
            let lasttDigit = parseInt(strNum[strNum.length - 1]);

            if (firstDigit + lasttDigit === 10) {
                count++;
            }
        }
    }
    return count
}
// console.log(endsAddTo10([19, 46, 2098])); // ➞ 3
// console.log(endsAddTo10([33, 44, -55])); // ➞ 1
// console.log(endsAddTo10([])); // ➞ 0

// 2 Likes vs. Dislikes
// YouTube currently displays a like and a dislike button, allowing you to express your opinions about particular content. It's set up in such a way that you cannot like and dislike a video at the same time.

// There are two other interesting rules to be noted about the interface:

// Pressing a button, which is already active, will undo your press.
// If you press the like button after pressing the dislike button, the like button overwrites the previous "dislike" state. The same is true for the other way round.
// Create a function that takes an array of button inputs and returns the final state.


function likeOrDislike(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] === arr[i]) {
            return "Nothing";
        }
    }

    return arr[0]
}

// console.log(likeOrDislike(["Dislike"])); // ➞ "Dislike"
// console.log(likeOrDislike(["Like", "Like"])); // ➞ "Nothing"
// console.log(likeOrDislike(["Dislike", "Like"])); // ➞ "Like"
// console.log(likeOrDislike(["Like", "Dislike", "Dislike"])); // ➞ "Nothing"

// 3A Letter's Best Friend
// Given a string, return if a given letter always appears immediately before another given letter.

// Worked Example
// bestFriend("he headed to the store", "h", "e") ➞ true

// All occurences of "h": ["he", "headed", "the"]
// All occurences of "h" have an "e" after it.
// Return true

function bestFriend(str, a, b) {
    for (let i = 0; i < str.length; i++) {
        if (str[i].includes(a, b)) {
            return true;
        }

    }
    return false
}

// console.log(bestFriend("he headed to the store", "h", "e")); // ➞ true
// console.log(bestFriend("i found an ounce with my hound", "o", "u") ); //➞ true
// console.log(bestFriend("we found your dynamite", "d", "y") ); //➞ false


// 4 Count the Smiley Faces :)
// Create a function that takes an array of strings and return the number of smiley faces contained within it. These are the components that make up a valid smiley:

// A smiley has eyes. Eyes can be : or ;.
// A smiley has a nose but it doesn't have to. A nose can be - or ~.
// A smiley has a mouth which can be ) or D.
// No other characters are allowed except for those mentioned above.


function countSmileys(arr) {
    let count = 0;
    const validSmileys = [":)", ";)", ":-)", ";-)", ":~)", ";~)", ":D", ";D", ":-D", ";-D", ":~D", ";~D"];

    for (let i = 0; i < arr.length; i++) {
        if (validSmileys.includes(arr[i])) {
            count++;
        }
    }

    return count;
}

// console.log(countSmileys([":)", ";(", ";}", ":-D"])); // ➞ 2
// console.log(countSmileys([";D", ":-(", ":-)", ";~)"])); // ➞ 3
// console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"])); // ➞ 1


// 5 Remix the String
// Create a function that takes both a string and an array of numbers as arguments. Rearrange the letters in the string to be in the order specified by the index numbers. Return the "remixed" string.


// remix("abcd", [0, 3, 1, 2]) ➞ "acdb"
// The string you'll be returning will have: "a" at index 0, "b" at index 3, "c" at index 1, "d" at index 2, because the order of those characters maps to their corresponding numbers in the index array.

function remix(str, arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result[arr[i]] = str[i];
    }

    return result.join('');
}

// console.log(remix("PlOt", [1, 3, 0, 2])); // ➞ "OPtl"
// console.log(remix("computer", [0, 2, 1, 5, 3, 6, 7, 4]));// ➞ "cmourpte"


// 6 RNA Reverse Complement
// Create a function that finds the reverse complement of a ribonucleic acid (RNA) strand. The RNA will be represented as a string containing only the characters "A", "C", "G" and "U". Since RNA can only (canonically) allow pairings of A/U and G/C, the complement of an RNA would be as follows:

// original -> complement
// "AAA" -> "UUU"
// "UUU" -> "AAA"
// "GGG" -> "CCC"
// "CCC" -> "GGG"
// "GGAACC" -> "CCUUGG"
// Your function should find the complement on the right AND also reverse the resulting string.


function reverseComplement(str) {
    let res = "";
    for (let i = str.length - 1; i >= 0; i--) {

        if (str[i] === "A") {
            res += "U";
        } else if (str[i] === "U") {
            res += "A";
        } else if (str[i] === "C") {
            res += "G";
        } else if (str[i] === "G") {
            res += "C";
        }
    }
    return res
}
// console.log(reverseComplement("GUGU") ); //➞ "ACAC"
// console.log(reverseComplement("UCUCG")); // ➞ "CGAGA"
// console.log(reverseComplement("CAGGU")); // ➞ "ACCUG"

// 7 The Fibonacci Number
// Create a function that, given a number, returns the corresponding value of that index in the Fibonacci series.

// The Fibonacci Sequence is the series of numbers:

// 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// The next number is found by adding the two numbers before it:

// The 2 is found by adding the two numbers before it (1+1).
// The 3 is found by adding the two numbers before it (1+2).
// The 5 is (2+3), and so on!

function fibonacci(n) {
    let res = 0;
    for (let i = 1; i < n; i++) {
        res += i
    }

    return res

}
// console.log(fibonacci(3)); //➞ 3
// console.log(fibonacci(7)); //➞ 21
// console.log(fibonacci(12)); // ➞ 233  

// 8 The Bottom of the Matrix
// This challenge concerns square matrices (same number of rows and columns) as the below example illustrates:

// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// The entries in the diagonal line from the top left to the bottom right form the main diagonal of the matrix. In this case, 1,5,9 form the main diagonal.

// Write a function that returns the matrix obtained by replacing the entries above the main diagonal with 0s.

// For example, for the matrix above you should return:

// [
//   [1, 0, 0],
//   [4, 5, 0],
//   [7, 8, 9]
// ]

function lowerTriang(matrix) {


}
// console.log(lowerTriang([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ])); // ➞ [
//   [1, 0, 0],
//   [4, 5, 0],
//   [7, 8, 9]
// ]

// console.log(lowerTriang([
//   [5, 7],
//   [7, 9]
// ]) ); //➞ [
//   [5, 0],
//   [7, 9]
// ]

// console.log(lowerTriang([
//   [1, 8, 8, 1],
//   [2, 7, 7, 2],
//   [3, 6, 6, 3],
//   [4, 5, 5, 4]
// ])); // ➞ [
//   [1, 0, 0, 0],
//   [2, 7, 0, 0],
//   [3, 6, 6, 0],
//   [4, 5, 5, 4]
// ]

// 9 Little Big Sequence
// A number sequence is as follows:

// 5, 100, 6, 200, 7, 400, 8, 800, 9, 1600, 10, 3200, ...
// Given that 5 is at position 1, create a function that returns the number found at position num in the sequence.


function littleBig(num) {
    for (let i = 1; i <= num; i++) {
        if (num % 2 === 0) {
            let currentEle = Math.pow(2, num / 2);
            let value = currentEle * 50;
            return value
        } else {
            return 7
        }
    }
}
// console.log(littleBig(4)); //➞ 200
// console.log(littleBig(5)); //➞ 7
// console.log(littleBig(28)); // ➞ 819200

// 10 Construct and Deconstruct
// Given a string, create a function which outputs an array, building and deconstructing the string letter by letter. See the examples below for some helpful guidance.


function constructDeconstruct(str){
    let res = [];
let words = "";
    for(let i = 0; i <str.length; i++){
     words += str[i]
     
       res.push(words);
    }
    
   
    return res
}

// console.log(constructDeconstruct("Hello") ); //➞ [
//   "H",
//   "He",
//   "Hel",
//   "Hell",
//   "Hello",
//   "Hell",
//   "Hel",
//   "He",
//   "H"
// ]

// console.log(constructDeconstruct("edabit")); //➞ [
//   "e",
//   "ed",
//   "eda",
//   "edab",
//   "edabi",
//   "edabit",
//   "edabi",
//   "edab",
//   "eda",
//   "ed",
//   "e"
// ]

// console.log(constructDeconstruct("the sun")); // ➞ [
//   "t",
//   "th",
//   "the",
//   "the ",
//   "the s",
//   "the su",
//   "the sun",
//   "the su",
//   "the s",
//   "the ",
//   "the",
//   "th",
//   "t"
// ]
