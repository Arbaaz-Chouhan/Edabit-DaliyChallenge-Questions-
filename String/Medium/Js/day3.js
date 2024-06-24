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