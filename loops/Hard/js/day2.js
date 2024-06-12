// 1 Vowel to Vowel Links
// Given a sentence as str, return true if any two adjacent words have this property: One word ends with a vowel, while the word immediately after begins with a vowel (a e i o u).

// Examples
function vowelLinks(str) {
    let words = str.split(" ");
    let vowels = "aeiou"
    for (let i = 0; i < words.length - 1; i++) {
        let currentWord = words[i]
        if (vowels.includes(currentWord[currentWord.length - 1]) && vowels.includes(words[0])) {
            return true;
        } else {
            return false;
        }
    }

}
// console.log(vowelLinks("a very large appliance")); // ➞ true
// console.log(vowelLinks("go to edabit")); // ➞ true
// console.log(vowelLinks("an open fire") ); //➞ false
// console.log(vowelLinks("a sudden applause") ); //➞ false


// 2 Find First Character That Repeats
// Create a function that takes a string and returns the first character that repeats. If there is no repeat of a character, return "-1".

// Examples
function firstRepeat(str) {
    let encountered = {};
    for (let char of str) {
        if (encountered[char]) {
            return char;
        } else {
            encountered[char] = true;
        }
    }
    return -1;
}
// console.log(firstRepeat("legolas"));// ➞ "l"
// console.log(firstRepeat("Gandalf"));// ➞ "a"
// console.log(firstRepeat("Balrog") );//➞ "-1"
// console.log(firstRepeat("Isildur") );//➞ "-1"
// Case sensitive "I" not equal to "i"


// 3 Burglary Series (16): Nested objects
// And who cursed the most in the fight between you and your spouse?

// Given an object with three rounds, with nested objects as your scores per round, return a string of who cursed the most:

// If you, return "ME!"
// If your spouse, return "SPOUSE!"
// If a draw, return "DRAW! 

// Examples

function determineWhoCursedTheMost(scores) {
    let meScore = 0;
    let spouseScore = 0;

    // Iterate through each round
    for (let round in scores) {
        if (scores[round]['me'] > scores[round]['spouse']) {
            meScore++;
        } else if (scores[round]['me'] < scores[round]['spouse']) {
            spouseScore++;
        }
        // If scores are equal, do nothing
    }

    // Compare total scores
    if (meScore > spouseScore) {
        return "ME!";
    } else if (meScore < spouseScore) {
        return "SPOUSE!";
    } else {
        return "DRAW!";
    }
}

// Test cases
// console.log(determineWhoCursedTheMost({
// round1: {
// me: 10,
// spouse: 5,
// },
// round2: {
// me: 5,
// spouse: 10,
// },
// round3: {
// me: 10,
// spouse: 10,
// },
// })); // ➞ "DRAW!"
// 
// console.log(determineWhoCursedTheMost({
// round1: {
// me: 40,
// spouse: 5,
// },
// round2: {
// me: 9,
// spouse: 10,
// },
// round3: {
// me: 9,
// spouse: 10,
// },
// })); // ➞ "ME!"
// 
// console.log(determineWhoCursedTheMost({
// round1: {
// me: 10,
// spouse: 5,
// },
// round2: {
// me: 9,
// spouse: 44,
// },
// round3: {
// me: 10,
// spouse: 55,
// },
// })); // ➞ "SPOUSE!"



// 4 Two Distinct Elements
// In each input array, every number repeats at least once, except for two. Write a function that returns the two unique numbers.

// Examples
function returnUnique(arr) {

    return arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item));
}

// console.log(returnUnique([1, 9, 8, 8, 7, 6, 1, 6])); // ➞ [9, 7]
// console.log(returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1])); // ➞ [2, 1]
// console.log(returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8])); // ➞ [5, 6]

// 5 Instances of the Fibonacci Sequence
// Create a function that takes a number as an argument and returns n instances of the Fibonacci sequence as an array.

// Fibonacci numbers: F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1. So the easy explanation is: The next element is the sum of the two previous elements.

// If you want to read more about this sequence, take a look at the On-Line Encyclopedia of Integer Sequences. Fibonacci numbers are strongly related to the golden ratio. See the OEIS and Wikipedia links in the resources tab.

// Examples
function fibSeq(n) {
    let res = [];
    if (n >= 1) {
        res.push(0);
    }
    if (n >= 2) {
        res.push(1);
    }
    for (let i = 2; i < n; i++) {
        res.push(res[i - 1] + res[i - 2]);
    }
    return res;
}

// console.log(fibSeq(4)); // ➞ [0, 1, 1, 2]
// console.log(fibSeq(7)); // ➞ [0, 1, 1, 2, 3, 5, 8]
// console.log(fibSeq(0)); // ➞ []


// 6 Burglary Series (15): Number of Occurrences
// To further increase the statistical knowledge of your fight, count the number of times a certain adjective was used.

// Given an object that contains several adjectives as values, return a new object where you count the ocurrences of each adjective.

// Examples
function countNumberOfOccurrences(obj) {
    let res = {};
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        const currentVal = obj[keys[i]];
        if (res[currentVal]) {
            res[currentVal]++;
        } else {
            res[currentVal] = 1
        }
    }
    return res
}
// console.log(countNumberOfOccurrences({
//     a: "moron",
//     b: "scumbag",
//     c: "moron",
//     d: "idiot",
//     e: "idiot"
// })); // ➞ { moron: 2, scumbag: 1, idiot: 2 }


// console.log(countNumberOfOccurrences({
//     a: "moron",
//     b: "moron",
//     c: "moron"
// })); // ➞ { moron: 3 }


// console.log(countNumberOfOccurrences({
//     a: "idiot",
//     b: "scumbag"
// })); // ➞ { idiot: 1, scumbag: 1 }


// 7 Map the Letters in a String
// Given a word, create an object that stores the indexes of each letter in an array.

// Make sure the letters are the keys.
// Make sure the letters are symbols.
// Make sure the indexes are stored in an array and those arrays are values.
// Examples
function mapLetters(str){
 let res = {};

 for(let i = 0; i<str.length; i++){
    let EmtyArr = [];

    for(let i = 0; i < str.length; i++) {
        let letter = str[i];

        if (res[letter] === undefined) {
            res[letter] = [i];
        } else {
            res[letter].push(i);
        }
}
 }
 

return res
}
// console.log(mapLetters("dodo")); // ➞ { d: [0, 2], o: [1, 3] }
// console.log(mapLetters("froggy")); // ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
// console.log(mapLetters("grapes")); // ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }
