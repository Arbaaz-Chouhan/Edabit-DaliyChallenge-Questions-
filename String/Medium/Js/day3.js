// 31 => Neatly Formatted Math
// Given a simple math expression as a string, neatly format it as an equation.

function formatMath(num) {
    return eval(num)
}

// console.log(formatMath("3 + 4")); // "3 + 4 = 7"
// console.log(formatMath("3 - 2")); // "3 - 2 = 1"
// console.log(formatMath("4 * 5")); // "4 x 5 = 20"
// console.log(formatMath("6 / 3")); // "6 / 3 = 2"

// 32 => Replace Vowel with Another Character
// Create a function that takes a string and replaces the vowels with another character.

function replaceVowel(str) {
    let res = "";

    let vowels = {
        a: "1",
        e: "2",
        i: "3",
        o: "4",
        u: "5",
    }

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (vowels[char]) {
            res += vowels[char];
        } else {
            res += char;
        }
    }
    return res
}
// console.log(replaceVowel("karachi")); // "k1r1ch3"
// console.log(replaceVowel("chembur")); // "ch2mb5r"
// console.log(replaceVowel("khandbari")); // "kh1ndb1r3"


// 33 => Remove Repeated Characters
// Create a function that will remove any repeated character(s) in a word passed to the function. Not just consecutive characters, but characters repeating anywhere in the input.

// Examples

function unrepeated(str) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        if (res.indexOf(str[i]) === -1) {
            res.push(str[i])
        }
    }
    return res.join("")
}
// console.log(unrepeated("hello")); // "helo"
// console.log(unrepeated("aaaaa")); // "a"
// console.log(unrepeated("WWE!!!")); // "WE!"
// console.log(unrepeated("call 911")); // "cal 91"

// 34 => Find the Second Occurrence of "zip" in a String
// Write a function that returns the position of the second occurrence of "zip" in a string, or -1 if it does not occur at least twice. Your code should be general enough to pass every possible case where "zip" can occur in a string.

function findZip(str) {

    let countzip = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].includes("zip")) {

            countzip++
        } else {
            return -1
        }
    }
    return countzip;
}
//  console.log(findZip("all zip files are zipped")); // 18
//  console.log(findZip("all zip files are compressed")); // -1


// 35 => Explosion Intensity
// Given a number, return a string of the word "Boom", which varies in the following ways:

// The string should include n number of "o"s, unless n is below 2 (in that case, return "boom").
// If n is evenly divisible by 2, add an exclamation mark to the end.
// If n is evenly divisible by 5, return the string in ALL CAPS.
// If n is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
// The example below should help clarify these instructions.

function boomIntensity(num) {
    let res = "B";
    for (let i = 0; i <= num; i++) {
        if (num <= 4) {
            res += "o";
        } else if (num <= 10) {
            res += "O"
        }
    }
    if (num <= 4) {
        res += "m";
    } else {
        res += "M"
    }
    return res
}

// console.log(boomIntensity(4));  // "Boooom!"
// // There are 4 "o"s and 4 is divisible by 2 (exclamation mark included)
// console.log(boomIntensity(1));  // "boom"
// // 1 is lower than 2, so we return "boom"
// console.log(boomIntensity(5));  // "BOOOOOM"
// // There are 5 "o"s and 5 is divisible by 5 (all caps)
// console.log(boomIntensity(10));  // "BOOOOOOOOOOM!"
// // There are 10 "o"s and 10 is divisible by 2 and 5 (all caps and exclamation mark included)


// 36 => Filter Repeating Character Strings
// Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).
function identicalFilter(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let isIdentical = true;
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] !== arr[i][0]) {
                isIdentical = false;
                break;
            }
        }
        if (isIdentical) {
            res.push(arr[i]);
        }
    }
    return res;
}

// console.log(identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"])); // ["aaaaaa", "d", "eeee"]
// console.log(identicalFilter(["88", "999", "22", "545", "133"])); // ["88", "999", "22"]
// console.log(identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"])); // []


// 37 => Adding Parity Bits
// Parity bits are used as a very simple checksum to ensure that binary data isn't corrupted during transit. Here's how they work:

// If a binary string has an odd number of 1's, the parity bit is a 1.
// If a binary string has an even number of 1's, the parity bit is a 0.
// The parity bit is appended to the end of the binary string.
// Create a function that adds the correct parity bit to a binary string.

function addParityBit(num) {
    let countOnes = 0;

    // Count the number of '1's in the binary string
    for (let i = 0; i < num.length; i++) {
        if (num[i] === '1') {
            countOnes++;
        }
    }

    // Determine the parity bit based on the count of '1's
    let parityBit = (countOnes % 2 === 1) ? '1' : '0';

    // Append the parity bit to the binary string
    return num + parityBit;
}

// console.log(addParityBit("1011011")); // "10110111"
// // There are five 1's.
// // Since five is odd, the parity bit should be a 1.
// // Add the parity bit to the end of the string.
// // Return the result.
// console.log(addParityBit("0110000")); // "01100000"
// console.log(addParityBit("0101101")); // "01011010"
// console.log(addParityBit("1111111")); // "11111111"



// 38 => Same ASCII?
// Return true if the sum of ASCII values of the first string is same as the sum of ASCII values of the second string, otherwise return false.

function sameAscii(s1, s2) {
    let s1sum = 0;
    let s2sum = 0;

    for (let i = 0; i < s1.length; i++) {
        let s1words = s1[i].charCodeAt();
        let s2words = s2[i].charCodeAt();
        s1sum += s1words;
        s2sum += s2words;

    }
    return s1sum === s2sum;
}

// console.log(sameAscii("a", "a")); // true
// console.log(sameAscii("AA", "B@")); // true
// console.log(sameAscii("EdAbIt", "EDABIT")); // false


// 39 => Fractions and Rounding
// Given a fraction frac (given in the format "1/2" for example) and n number of decimal places, return a sentence in the following format:

// "{fraction} rounded to {n} decimal places is {answer}"

function fracRound(strnum, num) {
    let total = eval(strnum);
    return `${strnum} rounded to ${num} decimal places is ${total.toFixed(num)}`
}


// console.log(fracRound("1/3", 5)); // "1/3 rounded to 5 decimal places is 0.33333"
// console.log(fracRound("2/8", 4)); // "2/8 rounded to 4 decimal places is 0.2500"
// console.log(fracRound("22/7", 2)); // "22/7 rounded to 2 decimal places is 3.14"

// 40 => Dashed Vowels
// Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

function dashed(str) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        res.push(str[i]);
    }
   
    
    return res.join("-");
}

// console.log(dashed("Edabit")); // "-E-d-a-b-i-t"
// console.log(dashed("Carpe Diem")); // "C-a-rp-e- D-i--e-m"
// console.log(dashed("Fight for your right to party!")); // "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!""