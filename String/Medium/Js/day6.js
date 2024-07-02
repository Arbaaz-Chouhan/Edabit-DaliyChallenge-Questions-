// 61  => Enharmonic Equivalents
// In music, notes can be written out in multiple ways (especially for notes on the black keys). Although these notes are spelled out differently, they still are the same note physically.

// C# = Db, D# = Eb, F# = Gb, G# = Ab, A# = Bb

// Given a musical note, create a function that returns its enharmonic equivalent. The examples below should make this clear.


function getEquivalent(str) {
    if (str === "D#") {
        return "Eb"
    }
    else if (str === "Gb") {
        return "F#";
    }
    else if (str === "Bb") {
        return "A#"
    }
}


function getEquivalent(str) {
    switch (str) {
        case "D#":
            return "Eb"

        case "Gb":
            return "F#"

        case "Bb":
            return "A#"

    }
}

// console.log(getEquivalent("D#")); "Eb"
// console.log(getEquivalent("Gb")); "F#"
// console.log(getEquivalent("Bb")); "A#"


// 62 => Switcharoo
// Create a function that takes a string and returns a new string with its first and last characters swapped, except under three conditions:

// If the length of the string is less than two, return "Incompatible.".
// If the argument is not a string, return "Incompatible.".
// If the first and last characters are the same, return "Two's a pair.".

function flipEndChars(str) {

    if (typeof str !== "string") {
        return "Incomplatible"
    }

    if (str.length < 2) {
        return "Incomplatible"

    }

    if (str[0] === str[str.length - 1]) {
        return "Two's a pair."
    }

    return str[str.length - 1] + str.slice(1, -1) + str[0]
}

// console.log(flipEndChars("Cat, dog, and mouse.")); // ".at, dog, and mouseC"

// console.log(flipEndChars("ada")); // "Two's a pair."
// console.log(flipEndChars("Ada")); // "adA"
// console.log(flipEndChars("z")); // "Incompatible."
// console.log(flipEndChars([1, 2, 3])); // "Incompatible."


// 63 => Capital Split
// Create a function which adds spaces before every capital in a word. Uncapitalize the whole string afterwards.

function capSpace(str) {
    let res = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            res += " " + str[i].toLowerCase()

        } else {
            res += str[i]
        }
    }

    return res
}

// console.log(capSpace("helloWorld")); // "hello world"
// console.log(capSpace("iLoveMyTeapot")); // "i love my teapot"
// console.log(capSpace("stayIndoors")); // "stay indoors"

// 64 => Apples and Bananas
// Write a function, .vreplace() that extends the String prototype by replacing all vowels in a string with a specified vowel.


// Adding the vreplace method to String prototype
String.prototype.vreplace = function (vowel) {
    // Regular expression to match all vowels
    const vowelRegex = /[aeiou]/g;
    // Replace all vowels in the string with the specified vowel
    return this.replace(vowelRegex, vowel);
};


// console.log("apples and bananas".vreplace("u")); // "upplus und bununus"
// console.log("cheese casserole".vreplace("o")); // "chooso cossorolo"
// console.log("stuffed jalapeno poppers".vreplace("e")); // "steffed jelepene peppers"


// 65 =>Split Item Codes
// You have an array of item codes with the following format: "[letters][digits]"

// Create a function that splits these strings into their alphabetic and numeric parts.

function splitCode(str) {

    let letter = "";
    let digit = "";
    for (let i = 0; i < str.length; i++) {

        if (isNaN(str[i]) === true) {
            letter += str[i];
        }
        else if (isNaN(str[i]) === false) {
            digit += str[i];
        }

    }
    return [letter, parseInt(digit)]
}

// console.log(splitCode("TEWA8392")); // ["TEWA", 8392]
// console.log(splitCode("MMU778")); // ["MMU", 778]
// console.log(splitCode("SRPE5532")); // ["SRPE", 5532]

// // 66 => Fruit Salad 🍇🍓🍎
// Fruit salads are served best when the fruits are sliced and diced into small chunks!

// For this challenge, slice each fruit in half and sort the chunks alphabetically. This recipe tastes best when the chunks are joined together to make a string.

// Worked Example
// console.log(fruitSalad(["apple", "pear", "grapes"])); // "apargrapepesple"

// Chunks: ["ap", "ple", "pe", "ar", "gra", "pes"]
// Sorted chunks: ["ap", "ar", "gra", "pe", "pes", "ple"]
// Final string: "apargrapepesple"


function fruitSalad(arr) {
    let chunks = [];
    for (let i = 0; i < arr.length; i++) {
        let fruit = arr[i];
        let mid = Math.ceil(fruit.length / 2);
        chunks.push(fruit.slice(0, mid));
        chunks.push(fruit.slice(mid));
    }

    chunks.sort()
    return chunks.join("")
}

// console.log(fruitSalad(["apple", "pear", "grapes"])); // "apargrapepesple"
// console.log(fruitSalad(["raspberries", "mango"])); // "erriesmangoraspb"
// console.log(fruitSalad(["banana"]))  // "anaban";


// 67 => Alternating Ones and Zeroes
// Write a function that returns true if the binary string can be rearranged to form a string of alternating 0s and 1s.

function canAlternate(num) {
    let count0 = 0;
    let count1 = 0;

    for (let i = 0; i < num.length; i++) {
        if (num[i] === "0") {
            count0++;
        } else if (num[i] === "1") {
            count1++;
        }
    }
    return [count0 - count1] <= 1
}

// console.log(canAlternate("0001111")); // true
// // Can make: "1010101"
// console.log(canAlternate("01001")); // true
// // Can make: "01010"
// console.log(canAlternate("010001")); // false
// console.log(canAlternate("1111")); // false



// 68 => Censor Words Longer Than Four Characters
// Create a function that takes a string and censors words over four characters with *.

function censor(str) {
    let words = str.split(" ");
    let res = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 4) {
            let lettter = words[i].length;
            res.push("*".repeat(lettter));
        } else {
            res.push(words[i])
        }
    }

    return res.join(" ")
}

// console.log(censor("The code is fourty")); // "The code is ******"
// console.log(censor("Two plus three is five")); // "Two plus ***** is five"
// console.log(censor("aaaa aaaaa 1234 12345")); // "aaaa ***** 1234 *****"


// 69 => Check if a String is a Mathematical Expression
// Create a function that takes an input (e.g. "5 + 4") and returns true if it's a mathematical expression or false if not.

function mathExpr(numStr) {

    return typeof eval(numStr) === "number"
}

// console.log(mathExpr("4 + 5")); // true
// console.log(mathExpr("4*6")); // true
// console.log(mathExpr("4*no")); // false


// 70 => Scoring System
// Andy, Ben and Charlotte are playing a board game. The three of them decided to come up with a new scoring system. A player's first initial ("A", "B" or "C") denotes that player scoring a single point. Given a string of capital letters, return an array of the players' scores.

// For instance, if ABBACCCCAC is written when the game is over, then Andy scored 3 points, Ben scored 2 points, and Charlotte scored 5 points, since there are 3 instances of letter A, 2 instances of letter B, and 5 instances of letter C. So the array [3, 2, 5] should be returned.

function calculateScores(str) {
    let countA = 0;
    let countB = 0;
    let countC = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "A") {
            countA++;
        } else if (str[i] === "B") {
            countB++;
        } else if (str[i] === "C") {
            countC++;
        }
    }
    return [countA, countB, countC];
}



// console.log(calculateScores("A")); // [1, 0, 0]
// console.log(calculateScores("ABC")); // [1, 1, 1]
// console.log(calculateScores("ABCBACC")); // [2, 2, 3]


// 71 => Stripping a Sentence Down
// Create a function which takes in a sentence str and a string of characters chars and return the sentence but with all the specified characters removed.

function stripSentence(str, char) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (!char.includes(str[i])) {
            res += str[i];
        }
    }
    return res
}


// console.log(stripSentence("the quick brown fox jumps over the lazy dog", "aeiou")); // "th qck brwn fx jmps vr th lzy dg"
// console.log(stripSentence("the hissing snakes sinisterly slither across the rustling leaves", "s")); // "the hiing nake initerly lither acro the rutling leave"
// console.log(stripSentence("gone, reduced to atoms", "go, muscat nerd")); // ""


// 72 =>  Return the Index of All Capital Letters
// Create a function that takes a single string as argument and returns an ordered array containing the indices of all capital letters in the string.

function indexOfCaps(str) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            res.push(i);
        }
    }
    return res
}

// console.log(indexOfCaps("eDaBiT")); // [1, 3, 5]
// console.log(indexOfCaps("eQuINoX")); // [1, 3, 4, 6]
// console.log(indexOfCaps("determine")); // []
// console.log(indexOfCaps("STRIKE")); // [0, 1, 2, 3, 4, 5]
// console.log(indexOfCaps("sUn")); // [1]


// 73 => Grab the Numbers
// Given a string including a bunch of characters and numbers, return the sum of all the numbers in the string. Note that multiple digits next to each other are counted as a whole number rather than separate digits.


function grabNumberSum(str) {
    let sum = 0;
    let currentNumber = '';

    for (let char of str) {
        if (!isNaN(parseInt(char))) {

            currentNumber += char;
        } else {

            if (currentNumber !== '') {
                sum += parseInt(currentNumber);
                currentNumber = '';
            }
        }
    }

    if (currentNumber !== '') {
        sum += parseInt(currentNumber);
    }

    return sum;
}
// console.log(grabNumberSum("aeiou250abc10")); // 260
// console.log(grabNumberSum("one1two2twenty20")); // 23
// console.log(grabNumberSum("900uwu50uwuuwuuwu25uwu25")); // 1000


// 74 => First N Vowels
// Write a function that returns the first n vowels of a string.

function firstNVowels(str, n) {
    let res = "";
    let vowels = "aioue";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            res += str[i];
            count++;

            if (count === n) {
                break;
            }
        }
    }
    return count === n ? res : "invalid"
}

// console.log(firstNVowels("sharpening skills", 3)); // "aei"
// console.log(firstNVowels("major league", 5)); // "aoeau"
// console.log(firstNVowels("hostess", 5)); // "invalid"



// 75  => Longest Sequence of Consecutive Zeroes
// Write a function that returns the longest sequence of consecutive zeroes in a binary string.

function longestZero(numStr) {
    let res = "";

    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i - 1] !== numStr[i + 1]) {
            res += numStr[i];
        }
    }

    return res
}
function longestZero(numStr) {

    const matches = numStr.match(/0+/g);
    if (!matches) return '';


    let longest = matches[0];
    for (let match of matches) {
        if (match.length > longest.length) {
            longest = match;
        }
    }


    return longest;
}


// console.log(longestZero("01100001011000")); // "0000"
// console.log(longestZero("100100100")); // "00"
// console.log(longestZero("11111")); // ""

// 76 =>  Harshad Numbers
// A number n is a Harshad (also called Niven) number if it is divisible by the sum of its digits. For example, 666 is divisible by 6 + 6 + 6, so it is a Harshad number.

// Write a function to determine whether the given number is a Harshad number.

function isHarshad(num) {
    let numStr = num.toString();
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        sum += parseInt(numStr[i])
    }
    return num % sum === 0
}

function isHarshad(num) {
    let sum = num.toString().split("").reduce((acc, digit) => acc + parseInt(digit), 0);
    return num % sum === 0

}


// console.log(isHarshad(209)); // true
// console.log(isHarshad(41)); // false
// console.log(isHarshad(12255)); // true


// 78 => Simple Encoder
// Create a function that takes a string str and performs simple encoding as per the following method:

// Replace all single occurrence characters with [
// Replace all characters with two or more occurrences with ]
// Return the final string after modification.

function simpleEncoder(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i + 1]) {
            res += "["
        } else if (str[i] === str[i + 1]) {
            res += "]]"
        } else if (str[i] === " ") {
            res += "]"
        }
    }

    return res
}

// console.log(simpleEncoder("Mubashir")); // "[[[[[[[["
// // '[' for each character
// console.log(simpleEncoder("Matt")); // "[[]]"
// // ']' for both 't'
// console.log(simpleEncoder("eD  aBiT")); // "[[]][[[["
// // Two spaces in between


// 79 =>  First Before Second Letter
// You are given three inputs: a string, one letter, and a second letter.

// Write a function that returns true if every instance of the first letter occurs before every instance of the second letter.

function firstBeforeSecond(str, first, second) {
    // Convert string to lowercase to handle case insensitivity
    str = str.toLowerCase();
    first = first.toLowerCase();
    second = second.toLowerCase();

    let firstMaxIndex = -1;
    let secondMinIndex = str.length;


    for (let i = 0; i < str.length; i++) {
        if (str[i] === first) {
            firstMaxIndex = i;
        }
        if (str[i] === second && secondMinIndex === str.length) {
            secondMinIndex = i;
        }
    }

    return firstMaxIndex < secondMinIndex;
}

// console.log(firstBeforeSecond("a rabbit jumps joyfully", "a", "j"));  // true
// console.log(firstBeforeSecond("knaves knew about waterfalls", "k", "w"));  // true
// console.log(firstBeforeSecond("happy birthday", "a", "y"));  // false
// console.log(firstBeforeSecond("precarious kangaroos", "k", "a"));  // false


// 80 =>  Check if the String is a Palindrome
// A palindrome is a word, phrase, number or other sequence of characters which reads the same backward or forward, such as madam or kayak.

// Write a function that takes a string and determines whether it's a palindrome or not. The function should return a boolean (true or false value).

function isPalindrome(str) {
    let words = str.toLowerCase();

    for (let i = 0; i < words.length; i++) {
        if (words[0] !== words[words.length - 1]) {
            return false
        }

    }
    return true

}

// console.log(isPalindrome("Neuquen")); // true
// console.log(isPalindrome("Not a palindrome")); // false
// console.log(isPalindrome("A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!")); // true