// 91 => String Match by Two Letters
// Create a function that takes two strings, a and b. Return the number of times the two strings contain the same two letters at the same index. The two letters must appear at consecutive indices.

// For example, if a = "bboiizz" and b = "bbuiiz", your function should return 3, since the "bb", "ii", and "iz" appear at the same place in both strings.

function strMatchBy2char(str1, str2) {
    let count = 0;
    let minLength = Math.min(str1.length, str2.length);
    for (let i = 0; i < minLength; i++) {
        if (str1[i] === str2[i]) {
            count++;
        }
    }

    return count
}

// console.log(strMatchBy2char("yytaazz", "yyjaaz")); // 3
// console.log(strMatchBy2char("edabit", "ed")); // 1
// console.log(strMatchBy2char("", "")); // 0


// 92 => Extend the Vowels
// Create a function that takes a word and extends all vowels by a number num.

function extendVowels(str, num) {
    let vowels = "aioeu";
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            res += str[i].repeat(num + 1)
        } else {
            res += str[i]
        }
    }
    return res
}



function extendVowels(str, num) {
    let vowels = "aioeu";
    let res = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (vowels.includes(char.toLowerCase())) {
            for (let j = 0; j <= num; j++) {
                res += char;
            }
        } else {

            res += char;
        }
    }

    return res
}
// console.log(extendVowels("Hello", 5)); //"Heeeeeelloooooo"
// console.log(extendVowels("Edabit", 3)); // "EEEEdaaaabiiiit"
// console.log(extendVowels("Extend", 0)); // "Extend"


// 93 => How Good is Your Name?
// Create a function that takes a string of name and checks how much good is the given name. A preloaded dictionary of alphabet scores is available in the Code tab. Add up the letters of your name to get the total score.


// score <= 60:   "NOT TOO GOOD"

// 61 <= score <= 300:  "PRETTY GOOD"

// 301 <= score <= 599:  "VERY GOOD"

// score >= 600:  "THE BEST"

function nameScore(str) {
    const scores = {
        "A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
        "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
        "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
        "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23
    }
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i].toUpperCase(); // Convert to uppercase to match the keys
        if (scores[char] !== undefined) { // Check if the character has a defined score
            sum += scores[char];
        }
    }

    if (sum <= 60) {
        return "NOT TOO GOOD";
    } else if (sum > 60 && sum <= 300) {
        return "PRETTY GOOD";
    } else if (sum > 300 && sum <= 599) {
        return "VERY GOOD";
    } else if (sum >= 600) {
        return "THE BEST";
    }
}

// console.log(nameScore("MUBASHIR")); // "THE BEST"
// console.log(nameScore("YOU")); // "VERY GOOD"
// console.log(nameScore("MATT")); // "THE BEST"
// console.log(nameScore("PUBG")); // "NOT TOO GOOD"


// 94  => Reformatting the Date
// Create a function that converts dates from one of five string formats:

// "January 9, 2019" (MM D, YYYY)
// "Jan 9, 2019" (MM D, YYYY)
// "01/09/2019" (MM/DD/YYYY)
// "01-09-2019" (MM-DD-YYYY)
// "01.09.2019" (MM.DD.YYYY)
// The return value will be an array formatted like: [MM, DD, YYYY], where MM, DD, and YYYY are all integers. Using the examples above:

function convertDate(str) {
    let dates = str.split("/");
    let res = [];
    for (let i = 0; i < dates.length; i++) {
        if (dates[0] === "January") {
            res.push(1);
        } else if (dates[0] === '1') {
            res.push(1);
        } else {
            res.push(dates[i])
        }
    }

    return res
}

// console.log(convertDate("January 9, 2019")); // [1, 9, 2019]
// console.log(convertDate("Jan 9, 2019")); // [1, 9, 2019]
// console.log(convertDate("01/09/2019")); // [1, 9, 2019]
// console.log(convertDate("01-09-2019")); // [1, 9, 2019]
// console.log(convertDate("01.09.2019")); // [1, 9, 2019]


// 95 =>  Longest Word
// Write a function that finds the longest word in a sentence and returns it. If two or more words are the biggest, return the word closest to the start of the sentence. Characters such as apostrophe, commas, periods, etc count as letters (e.g. O'Connor is 8 characters long).
function longestWord(str) {
    let words = str.split(" ");
    let longest = "";

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}


// console.log(longestWord("Hello darkness my old friend")); // "darkness"
// console.log(longestWord("Hello there mate")); // "Hello"
// console.log(longestWord("Kayla's toy is plastic")); // "Kayla's"


// 96 => Box Completely Filled?
// Create a function that checks if the box is completely filled with the asterisk symbol *.

function completelyFilled(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i - 1] === arr[i + 1]) {
            return true
        }

    }
    return false
}

// console.log(completelyFilled([
//   "#####",
//   "#***#",
//   "#***#",
//   "#***#",
//   "#####"
// ])); // true

// console.log(completelyFilled([
//   "#####",
//   "#* *#",
//   "#***#",
//   "#***#",
//   "#####"
// ])); // false

// console.log(completelyFilled([
//   "###",
//   "#*#",
//   "###"
// ])); // true

// console.log(completelyFilled([
//   "##",
//   "##"
// ])); // true


// 97 => Recursion: String Palindromes
// Write a function that recursively determines if a string is a palindrome.

function isPalindrome(str) {

    if (str.length <= 1) return true;

    if (str[0] !== str[str.length - 1]) {
        return false
    }

    return isPalindrome(str.slice(1, str.length - 1));
}


// console.log(isPalindrome("abcba")); // true
// console.log(isPalindrome("b")); // true
// console.log(isPalindrome("")); // true
// console.log(isPalindrome("ad")); // false


// 98 => Count the Towers
// Create a function that counts the number of towers.

function count_towers(towers) {
 
    return (String(towers[towers.length - 1]).match(/##/g) || []).length;
}

// console.log(count_towers([
//     ["     ##         "],
//     ["##   ##        ##"],
//     ["##   ##   ##   ##"],
//     ["##   ##   ##   ##"]
// ])); // 4

// console.log(count_towers([
//     ["                         ##"],
//     ["##             ##   ##   ##"],
//     ["##        ##   ##   ##   ##"],
//     ["##   ##   ##   ##   ##   ##"]
// ])); // 6

// console.log(count_towers([
//     ["##"],
//     ["##"]
// ])); // 1


// 99 => In the Centre?
// Given a string containing mostly spaces and one non-space character, return whether the character is positioned in the very centre of the string. This means the number of spaces on both sides should be the same.

function isCentral(str){
let trimmed = str.trim();
if(trimmed.length !== 1){
    return false

}
let index = str.indexOf(trimmed);
return index === str.length-index -1

 }

console.log(isCentral("  #  ")); // true
console.log(isCentral(" 2    ")); // false
console.log(isCentral("@")); // true