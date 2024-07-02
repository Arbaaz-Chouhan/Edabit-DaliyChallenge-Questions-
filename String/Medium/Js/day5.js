// 51  => Is the Phone Number Formatted Correctly?
// Create a function that accepts a string and returns true if it's in the format of a proper phone number and false if it's not. Assume any number between 0-9 (in the appropriate spots) will produce a valid phone number.

// This is what a valid phone number looks like:

// (123) 456-7890

function isValidPhoneNumber(str) {

    for (let char of str) {
        if (char.includes("-")) {
            return true;
        } else {
            return false
        }
    }

}

// console.log(isValidPhoneNumber("(123) 456-7890")); // true
// console.log(isValidPhoneNumber("1111)555 2345")); // false
// console.log(isValidPhoneNumber("098) 123 4567")); // false


// 52  => Length of Worm
// Given a string worm create a function that takes the length of the worm and converts it into millimeters. Each - represents one centimeter.

function wormLength(str) {
    if (str == "") {
        return "invalid"
    }

    for (let cher of str) {
        if (cher !== "-") {
            return "invalid"
        }
    }
    let wormLength = str.length * 10;
    return `${wormLength} mm.`
}

// console.log(wormLength("----------")); // "100 mm."
// console.log(wormLength("")); // "invalid"
// console.log(wormLength("---_-___---_")); // "invalid"


//  53 => Upper or Lower Case
// Return the smallest number of steps it takes to convert a string entirely into uppercase or entirely into lower case, whichever takes the fewest number of steps. A step consists of changing one character from lower to upper case, or vice versa.

function stepsToConvert(str) {
    let uppercase = 0;
    let lowercase = 0;
    for (let words of str) {
        if (words === words.toUpperCase()) {
            uppercase++;
        } else {
            lowercase++;
        }
    }

    return Math.min(uppercase, lowercase)
}

// console.log(stepsToConvert("abC")); // 1
// // "abC" converted to "abc" in 1 step
// console.log(stepsToConvert("abCBA")); // 2
// // "abCBA" converted to "ABCBA" in 2 steps
// console.log(stepsToConvert("aba")); // 0
// console.log(stepsToConvert("abaCCC")); // 3


// 54 => Joining Digits Together
// Create a function which takes in a number n as input and returns all numbers up to and including n joined together in a string. Separate each digit from each other with the character "-".

function joinDigits(num) {
    let res = "";
    for (let i = 1; i <= num; i++) {
        res += i;
    }

    return res.split("").join("-")
}

// console.log(joinDigits(4)); // "1-2-3-4"
// console.log(joinDigits(11)); // "1-2-3-4-5-6-7-8-9-1-0-1-1"
// console.log(joinDigits(15)); //"1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5"


// 55 => The Million Dollar Fence
// Your task is to create a fence worth $1 million. You are given the price of the material (per character), meaning the length of the fence will change depending on the cost of the material.

// Create a function which constructs this pricey pricey fence, using the letter "H" to build.

// console.log(constructFence("$50,000")); // "HHHHHHHHHHHHHHHHHHHHHHHHHHHH"
// 20 fence posts were set up ($1,000,000 / $50,000 = 20)

function constructFence(str) {
    let pricePerChar = parseInt(str.replace(/[$,]/g, ""));

    let numofH = Math.floor(1000000 / pricePerChar);

    let res = "";

    for (let i = 0; i < numofH; i++) {
        res += "H";
    }
    return res
}



// console.log(constructFence("$50,000")); // "HHHHHHHHHHHHHHHHHHHHHHHHHHHH"
// console.log(constructFence("$100,000")); // "HHHHHHHHHH"
// console.log(constructFence("$1,000,000")); // "H"


// 56 => Compare by ASCII Codes
// Create a function that compares two words based on the sum of their ASCII codes and returns the word with the smaller ASCII sum.

function asciiSort(s1, s2) {
    // Calculate the sum of ASCII codes for each word
    let sumS1 = 0;
    let sumS2 = 0;


    for (let i = 0; i < s1.length; i++) {
        sumS1 += s1.charCodeAt(i);
    }

    for (let i = 0; i < s2.length; i++) {
        sumS2 += s2.charCodeAt(i);
    }
    if (sumS1 < sumS2) {
        return s1;
    } else {
        return s2;
    }
}


// console.log(asciiSort("hey", "man"));       // "man"
// console.log(asciiSort("majorly", "then")); // "then"
// console.log(asciiSort("victory", "careless")); // "victory"



// 57 => Reverse Titling
// Your stereotypical titleCase() function in JavaScript might capitalize the first letter of every word in a given sentence, leaving all the other letters as lowercase.

// The goal of this challenge, however, is to create a  reverseTitle() function, which achieves the complete opposite! Make the first letter of every word lowercase, and the rest uppercase!

function reverseTitle(str) {
    let words = str.split(" ");
    let res = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        res.push(word[0].toLowerCase() + word.slice(1).toUpperCase())

    }
    return res
}

// console.log(reverseTitle("this is a title")); // "tHIS iS a tITLE"
// console.log(reverseTitle("BOLD AND BRASH!")); // "bOLD aND bRASH!"
// console.log(reverseTitle("Elephants dance about bravely in Thailand")); // "eLEPHANTS dANCE aBOUT bRAVELY iN tHAILAND"

// 58 =>Numbered Alphabet
// Create a function that converts a string of letters to their respective number in the alphabet.


function alphNum(str) {

    let alphabet = {
        A: "0",
        B: "1",
        C: "2",
        D: "3",
        E: "4",
        F: "5",
        G: "6",
        H: "7",
        I: "8",
        J: "9",
        K: "10",
        L: "11",
        M: "12",
        N: "13",
        O: "14",
        P: "15",
        Q: "16",
        R: "17",
        S: "18",
        T: "19:",
        U: "20",
        V: "21",
        W: "22",
        X: "23",
        Y: "24",
        Z: "25",

    }
    let res = [];
    for (let char of str) {
        if (alphabet.hasOwnProperty(char)) {
            res.push(alphabet[char])
        }

    }
    return res.join(" ")
}

// console.log(alphNum("XYZ")); // "23 24 25"
// console.log(alphNum("ABCDEF")); // "0 1 2 3 4 5"
// console.log(alphNum("JAVASCRIPT")); // "9 0 21 0 18 2 17 8 15 19"


// 59 => Fix the Spacing
// Additional spaces have been added to a sentence. Return the correct sentence by removing them. All words should be separated by one space, and there should be no spaces at the beginning or end of the sentence.

// function correctSpacing(str) {
//     let res = "";
//     for (let i = 0; i < str.length; i++) {
// if(str[i] !==  " "){
//  res += str[i]
// }
// }
//     return  res
// }

function correctSpacing(str) {

    let words = str.split(" ");

    let filteredWords = words.filter(word => word !== "");


    let result = filteredWords.join(" ");

    return result;
}

// console.log(correctSpacing("The film   starts       at      midnight. ")); // "The film starts at midnight."
// console.log(correctSpacing("The     waves were crashing  on the     shore.   ")); // "The waves were crashing on the shore."
// console.log(correctSpacing(" Always look on    the bright   side of  life.")); // "Always look on the bright side of life."


// 60 => Cycling Through Strings
// Given two strings, repeatedly cycle through all of the letters in the first string until it is the same length as the second string.

function stringCycling(str1, str2) {
    let res = "";

    for (let i = 0; i < str2.length; i++) {
        res += str1[i % str1.length];
    }

    return res
}

// console.log(stringCycling("abc", "hello")); // "abcab"
// console.log(stringCycling("programming", "edabit")); // "progra"
// console.log(stringCycling("the world in me evolves in hers", "i love Tesh, so much so")); // "the world in me evolves"
// console.log(stringCycling("a thing of beauty is a joy forever", "indulge me surely")); // "a thing of beauty"
// console.log(stringCycling("to", "hide")); // "toto"
// console.log(stringCycling("such a feeling coming over me", "top of the world")); // "such a feeling c"