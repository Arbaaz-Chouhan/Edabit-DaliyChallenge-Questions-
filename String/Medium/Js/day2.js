// 21 => Finish the Sentence You're On!
// POV: You are in an exam and time has just run out. While the teacher's back is turned, you hastily take the opportunity to finish scribbling down the last few words of the conclusion.

// For this challenge, it takes 0.5 seconds to write a character (not including spaces). Given the full sentence and the unfinished sentence as inputs, return the time it takes to finish writing in seconds.

// Worked Example
// console.log(timeToFinish(
//   "And so brings my conclusion to its conclusion.",
//   "And so brings my conclusion to"
// )); // 7

// // "its" has 3 characters
// // "conclusion." has 11 characters, including punctuation.
// // 11 + 3 = 14
// // 14 x 0.5 = 7
// // Remember not to include spaces.

function timeToFinish(str1, str2) {
    let count = 0;

    for (let i = 1; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            count++;
        }
    }
    return count * 0.5
}

// console.log(timeToFinish(
//     "And so brings my conclusion to its conclusion.",
//     "And so brings my conclusion to its conclus"
// )); // 2

// console.log(timeToFinish(
//     "As a result, my point is still valid.",
//     "As a result, my"
// )); // 9

// console.log(timeToFinish(
//     "Thank you for reading my essay.",
//     "T"
// )); // 12.5


// 22 => Maskify the String
// Usually when you sign up for an account to buy something, your credit card number, phone number or answer to a secret question is partially obscured in some way. Since someone could look over your shoulder, you don't want that shown on your screen. Hence, the website masks these strings.

// Your task is to create a function that takes a string, transforms all but the last four characters into "#" and returns the new masked string.

function maskify(num) {
    let res = "";
    for (let i = 0; i < num.length - 4; i++) {
        res += "#";
    }

    return res + num.slice(-4)
}

// console.log(maskify("4556364607935616")); // "############5616"
// console.log(maskify("64607935616")); // "#######5616"
// console.log(maskify("1")); // "1"
// console.log(maskify("")); // ""

// 23 => Basic E-Mail Validation
// Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation.

// The string must contain an @ character.
// The string must contain a . character.
// The @ must have at least one character in front of it.
// e.g. "e@edabit.com" is valid while "@edabit.com" is invalid.
// The . and the @ must be in the appropriate places.
// e.g. "hello.email@com" is invalid while "john.smith@email.com" is valid.
// If the string passes these tests, it's considered a valid email address.
function validateEmail(str) {

    let parts = str.split("@");


    if (parts.length !== 2) {
        return false;
    }

    let domain = parts[1];

    if (domain.includes(".")) {
        return true;
    } else {
        return false;
    }
}


// console.log(validateEmail("@gmail.com")); // false
// console.log(validateEmail("hello.gmail@com")); // false
// console.log(validateEmail("gmail")); // false
// console.log(validateEmail("hello@gmail")); // false
// console.log(validateEmail("hello@edabit.com")); // true


// 24 => Parity Bit Validation
// Parity bits are used as very simple checksum to ensure that binary data isn't corrupted during transit. Here's how they work:

// If a binary string has an odd number of 1's, the parity bit is a 1.
// If a binary string has an even number of 1's, the parity bit is a 0.
// The parity bit is appended to the end of the binary string.
// Create a function that validates whether a binary string is valid, using parity bits.

// Worked Example
//  console.log(validateBinary("10110010")); // true
// The last digit is the parity bit.
// 0 is the last digit.
// 0 means that there should be an even number of 1's.
// There are four 1's.
// Return true.

function validateBinary(str) {
    let oneCount = 0;
    let zeroCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "1") {
            oneCount++;
        } else if (str[i] === "0") {
            zeroCount++;
        }
    }
    return oneCount === zeroCount
}

// console.log(validateBinary("00101101")); // true
// console.log(validateBinary("11000000")); // true
// console.log(validateBinary("11000001")); // false


// 25 => Neutralisation
// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.
// Worked Example
// neutralise("+-+", "+--")); // "+-0"
// Compare the first characters
// of each string, then the next in turn.
// "+" against a "+" returns another "+".
// "-" against a "-" returns another "-".
// "+" against a "-" returns "0".
// Return the string of characters.


function neutralise(str1, str2) {
    let result = "";
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === '+' && str2[i] === '+') {
            result += '+';
        } else if (str1[i] === '-' && str2[i] === '-') {
            result += '-';
        } else {
            result += '0';
        }
    }
    return result;
}

// console.log(neutralise("+-+", "+--")); // "+-0"
// console.log(neutralise("--++--", "++--++")); // "000000"
// console.log(neutralise("-+-+-+", "-+-+-+")); // "-+-+-+"
// console.log(neutralise("-++-", "-+-+")); // "-+00"


// 26 =>  Reverse the Order of Words with Five Letters or More
// Write a function that takes a string of one or more words as an argument and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


function reverse(str) {
    let words = str.split(" ");
    let res = [];
    for (let i = 0; i < words.length; i++) {

        if (words[i].length >= 5) {
            res.push(words[i].split("").reverse().join(""))
        } else {
            res.push(words[i])
        }

    }
    return res.join(" ")
}
// console.log(reverse("Reverse")); // "esreveR"
// console.log(reverse("This is a typical sentence.")); // "This is a lacipyt .ecnetnes"
// console.log(reverse("The dog is big.")); // "The dog is big."

//27 => Harshad Number
// A number is said to be Harshad if it's exactly divisible by the sum of its digits. Create a function that determines whether a number is a Harshad or not.


function isHarshad(num) {
    let giveNumber = num.toString()
    let digit = num.toString()
    let sum = 0;
    for (let i = 0; i < digit.length; i++) {
        sum += parseInt(digit[i]);

    }

    return giveNumber % sum === 0 ? true : false
}
// console.log(isHarshad(75)); // false
// // 7 + 5 = 12
// // 75 is not exactly divisible by 12
// console.log(isHarshad(171)); // true
// // 1 + 7 + 1 = 9
// // 9 exactly divides 171
// console.log(isHarshad(481)); // true
// console.log(isHarshad(89)); // false
// console.log(isHarshad(516)); // true
// console.log(isHarshad(200)); // true


// 28 => Transform Upvotes
// Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.

function transformUpvotes(str) {
    let numbers = str.split(" ");
    let res = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i].includes("k")) {
            res.push(parseFloat(numbers[i].replace("k", "")) * 1000);
        }
        else {
            res.push(parseFloat(numbers[i]));
        }
    }
    return res
}

// console.log(transformUpvotes("6.8k 13.5k")); // [6800, 13500]
// console.log(transformUpvotes("5.5k 8.9k 32")); // [5500, 8900, 32]
// console.log(transformUpvotes("20.3k 3.8k 7.7k 992")); // [20300, 3800, 7700, 992]


// 29 => Check for Anagrams
// Create a function that takes two strings and returns either true or false depending on whether they're anagrams or not.

function is_anagram(s1, s2) {
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            return true
        }
        return false
    }

}

// console.log(is_anagram("cristian", "Cristina")); // true
// console.log(is_anagram("Dave Barry", "Ray Adverb")); // true
// console.log(is_anagram("Nope", "Note")); // false

// 30 => Remove the Special Characters from a String
// Create a function that takes a string, removes all "special" characters (e.g. ., !, @, #, $, %, ^, &, \, *, (, )) and returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.

function removeSpecialCharacters(str) {
    let alphanumeric = "., !, @, #, $, %, ^, &, \, *, (, ))"
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            res += str[i]
        }
        else if (!alphanumeric.includes(str[i])) {
            res += str[i];
        }
    }
    return res;
}

// console.log(removeSpecialCharacters("The quick brown fox!")); // "The quick brown fox"
// console.log(removeSpecialCharacters("%fd76$fd(-)6GvKlO.")); // "fd76fd-6GvKlO"
// console.log(removeSpecialCharacters("D0n$c sed 0di0 du1")); // "D0nc sed 0di0 du1