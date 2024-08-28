// 151 =>Split String by Identical Characters
// Create a function that splits a string into an array of identical clusters.

function splitGroups(str) {
    let res = [];
    let currentGroup = str[0]; 
    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            currentGroup += str[i];
        } else {
            res.push(currentGroup);
            currentGroup = str[i]; 
        }
    }
    
    // Push the last group to the result
    res.push(currentGroup);

    return res;
}
// console.log(splitGroups("555"));  // ["555"]
// console.log(splitGroups("5556667788"));  // ["555", "666", "77", "88"]
// console.log(splitGroups("aaabbbaabbab"));  // ["aaa", "bbb", "aa", "bb", "a", "b"]
// console.log(splitGroups("abbbcc88999&&!!!_"));  // ["a", "bbb", "cc", "88", "999", "&&", "!!!", "_"]



// 152 =>Kaprekar Numbers
// A Kaprekar Number is a positive integer that is equal to a number formed by first squaring, then splitting and summing its two lexicographical parts:

// If the quantity of digits of the squared number is even, the left and right parts will have the same length.
// If the quantity of digits of the squared number is odd, then the right part will be the longer half, with the left part being the shorter or equal to zero if the quantity of digits is equal to 1.
// Given a positive integer n implement a function that returns true if it's a Kaprekar number, and false if it's not.


// isKaprekar(3) ➞ false
// // n² = "9"
// // Left + Right = 0 + 9 = 9 ➞ 9 !== 3

// isKaprekar(5) ➞ false
// // n² = "25"
// // Left + Right = 2 + 5 = 7 ➞ 7 !== 5

// isKaprekar(297) ➞ true
// // n² = "88209"
// // Left + Right = 88 + 209 = 297 ➞ 297 === 297


// 153 => From A to Z
// Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter. Note that if the range is given in capital letters, return the string in capitals also!


// gimmeTheLetters("a-z") ➞ "abcdefghijklmnopqrstuvwxyz"

// gimmeTheLetters("h-o") ➞ "hijklmno"

// gimmeTheLetters("Q-Z") ➞ "QRSTUVWXYZ"

// gimmeTheLetters("J-J") ➞ "J"


// 154 => N-Sized Parts
// Create a function that divides a string into parts of size n.


// partition("chew", 2) ➞ ["ch", "ew"]

// partition("thematic", 4) ➞ ["them", "atic"]

// partition("c++", 2) ➞ ["c+", "+"]
