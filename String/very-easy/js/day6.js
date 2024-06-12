// // 61 => Simple Letters
// Create a function that takes two lowercase strings str1 and str2 of letters from a to z and returns the sorted and longest string containing distinct letters.

// Examples
// str1 = "mubashir"
// str2 = "edabit"

// longestString(str1, str2)); // "abdehimrstu"
// // Contains sorted and distinct letters of the given strings.

// str1 = "abcdefghijklmnopqrstuvwxyz"
// str2 = "abcdefghijklmnopqrstuvwxyz"

// longestString(str1, str2)); // "abcdefghijklmnopqrstuvwxyz"
// // Contains sorted and distinct letters of the given strings.


// 62 => Characters in Shapes
// Create a function to calculate how many characters in total are needed to make up the shape. You will be given an array of strings which make up a shape in the compiler (i.e. a square, a rectangle or a line).

function countCharacters(arr) {

    let coountWord = 0;
    for (let i = 0; i < arr.length; i++) {
        coountWord += arr[i].length;

    }
    return coountWord;
}

// console.log(countCharacters([
//   "###",
//   "###",
//   "###"
// ])); // 9

// console.log(countCharacters([
//   "22222222",
//   "22222222",
// ])); // 16

// console.log(countCharacters([
//   "------------------"
// ])); // 18

// console.log(countCharacters([])); // 0

// console.log(countCharacters(["", ""])); // 0


//  63 => Western Showdown
// Wild Roger is participating in a Western Showdown, meaning he has to draw (pull out and shoot) his gun faster than his opponent in a gun standoff.

// Given two strings,p1 and p2, return which person drew their gun the fastest. If both are drawn at the same time, return "tie".


function showdown(p1, p2) {
    // Count leading spaces in p1
    let p1Time = p1.search(/\S/);
    // Count leading spaces in p2
    let p2Time = p2.search(/\S/);

    // Determine who drew first
    if (p1Time < p2Time) {
        return "p1";
    } else if (p2Time < p1Time) {
        return "p2";
    } else {
        return "tie";
    }
}

//   console.log(showdown("   Bang!        ", "        Bang!   ")); // "p1"
//   console.log(showdown("               Bang! ", "             Bang!   ")); // "p2"
//   console.log(showdown("     Bang!   ", "     Bang!   ")); // "tie"


//  64 => Formatting Text on Edabit
// Edabit allows for markdown formatting, meaning that it's possible to format words by surrounding text with special characters. For example, to get bold text, you surround the text with double asterisks, like this **bold**.

// Here is a list of the possible formatting options in Edabit and how to apply them:

// **bold**
// _italics_
// `inline code`
// ~~strikethrough~~
// Challenge
// Given a string and a style character, return the newly formatted string. Style characters are single letters that represent the different types of formatting.

// For the purposes of this challenge, the style characters are as follows:

// "b" is for bold
// "i" is for italics
// "c" is for inline code
// "s" is for strikethrough

function mdFormat(s1, s2) {

    for (let i = 0; i < s2.length; i++) {
        if (s2[i].includes("b")) {
            return `**${s1}**`
        } else if (s2[i].includes("i")) {
            return `_${s1}_`
        } else if (s2[i].includes("c")) {
            return `"${s1}"`
        } else if (s2[i].includes("s")) {
            return `" ~~${s1}~~"`
        }
    }

}

// console.log(mdFormat("Bold", "b")); // "**Bold**"
// console.log(mdFormat("leaning text", "i")); // "_leaning text_"
// console.log(mdFormat("Edabit", "c")); // "`Edabit`"
// console.log(mdFormat("That's a strike!", "s")); // "~~That's a strike!~~"


// 66 => Stupid Addition
// Create a function that takes two parameters and, if both parameters are strings, add them as if they were integers or if the two parameters are integers, concatenate them.


function stupidAddition(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return `${num1}${num2}`;
    } else if (typeof num1 === "string" && typeof num2 === "string") {
        return Number(num1) + Number(num2);
    } else {
        return null;
    }
}

// console.log(stupidAddition(1, 2)); // "12"
// console.log(stupidAddition("1", "2")); // 3
// console.log(stupidAddition("1", 2)); // null


// 67 => Owofied a Sentence
// Create a function that takes a sentence and turns every "i" into "wi" and "e" into "we", and add "owo" at the end.

// function owofied(str) {
//     let res = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].includes("i")) {
//             res += str[i] + "wi";
//         } else if (str[i].includes("e")) {
//             res += str[i] + "we";
//         }else{
//             res  += str[i]
//         }
//     }
//     return res = res +" "  +"owo"
// }


function owofied(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "i") {

            res += str[i] + "wi";
        } else if (str[i] === "e") {
            res += str[i] + "we";
        } else {
            res += str[i]
        }
    }
    return res = res + " " + "owo"
}

// console.log(owofied("I'm gonna ride 'til I can't no more")); //I'm gonna rwidwe 'twil I can't no morwe owo"
// console.log(owofied("Do you ever feel like a plastic bag")); //Do you wevwer fwewel lwikwe a plastwic bag owo"
// console.log(owofied("Cause baby you're a firework")); //Causwe baby you'rwe a fwirwework owo"

// 67 => Profit Margin
// Create a function that calculates the profit margin given costPrice and salesPrice. Return the result as a percentage formatted string, and rounded to one decimal. To calculate profit margin you subtract the cost from the sales price, then divide by sales price.

function profitMargin(costPrice, salesPrice) {
    let profit = salesPrice - costPrice;
    let margin = (profit / salesPrice) * 100;
    return margin.toFixed(1) + "%";
}

// console.log(profitMargin(50, 50));  //"0.0%"
// console.log(profitMargin(28, 39));  //"28.2%"
// console.log(profitMargin(33, 84));  //"60.7%"


// 68 => Get Word Count
// Create a function that takes a string and returns the word count. The string will be a sentence.

function countWords(str) {
    let arr = str.split(" ")
    let countWords = 0;
    for (let i = 0; i < arr.length; i++) {
        countWords++
    }
    return countWords
}

// console.log(countWords("Just an example here move along")); // 6
// console.log(countWords("This is a test")); // 4
// console.log(countWords("What an easy task, right")); // 5

// 69 => String Pairs
// Create a function that takes a string str and returns an array of two-paired characters. If the string has an odd number of characters, add an asterisk * in the final pair.

// See the below examples for a better understanding:

function stringPairs(str) {
    let res = [];
    for (let i = 0; i < str.length; i += 2) {
        let pair = str[i];
        if (i + 1 < str.length) {
            pair += str[i + 1];
        } else {
            pair += '*';
        }
        res.push(pair);
    }
    return res;
}
// console.log(stringPairs("mubashir")); // ["mu", "ba", "sh", "ir"]
// console.log(stringPairs("edabit")); // ["ed", "ab", "it"]
// console.log(stringPairs("airforces")); // ["ai", "rf", "or", "ce", "s*"]

// 70 => CMS Selector Based on a Given String
// Write a function that takes an array of strings and a pattern (string) and returns the strings that contain the pattern in alphabetical order. If the pattern is an empty string, return all the strings passed in the input array.

function cmsSelector(arr, str) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(str.toUpperCase()) || arr[i].includes(str.toLowerCase())) {
            res.push(arr[i]);
        }
    }
    return res
}

// console.log(cmsSelector(["WordPress", "Joomla", "Drupal"], "w")); // ["WordPress"]
// console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "ru")); // ["Drupal"]
// console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "")); // ["Drupal", "Joomla", "Magento", "WordPress"]

// 71 => Hot Pics of Danny DeVito!
// I'm trying to watch some lectures to study for my next exam but I keep getting distracted by meme compilations, vine compilations, anime, and more on my favorite video platform.

// Your job is to help me create a function that takes a string and checks to see if it contains the following words or phrases:

// "anime"
// "meme"
// "vines"
// "roasts"
// "Danny DeVito"
// If it does, return "NO!". Otherwise, return "Safe watching!".

function preventDistractions(str) {
    let words = ["anime", "meme", "vines", "roasts", "Danny DeVito"];
    for (let i = 0; i < str.length; i++) {
        if (str.includes(words[i])) {
            return "No!"
        }
    }
    return "Safe watching!"
}

// console.log(preventDistractions("vines that butter my eggroll")); // "NO!"
// console.log(preventDistractions("Hot pictures of Danny DeVito")); // "NO!"
// console.log(preventDistractions("How to ace BC Calculus in 5 Easy Steps")); // "Safe watching!"

// 72 => Filter a String
// Mubashir needs your help to count uppercase letters, lowercase letters, numbers and special characters in a given string.

// Create a function which takes a string txt and returns a list of numbers with count of uppercase letters, lowercase letters, numbers and special characters.
function filterString(str) {
    let upperCount = 0;
    let lowerCount = 0;
    let numCount = 0;
    let specialCount = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char >= 'A' && char <= 'Z') {
            upperCount++;
        } else if (char >= 'a' && char <= 'z') {
            lowerCount++;
        } else if (char >= '0' && char <= '9') {
            numCount++;
        } else {
            specialCount++;
        }
    }

    return [upperCount, lowerCount, numCount, specialCount];
}

// console.log(filterString("*$(#Mu12bas43hiR%@*!")); // [2, 6, 4, 8]
// // 2 uppercase letters
// // 6 lowercase letters
// // 4 numbers
// // 8 special characters

// console.log(filterString("^^Edabit^^%$#12379")); // [1, 5, 5, 7]

// console.log(filterString("**Airforce1**")); // [1, 7, 1, 4]

// 73 => Count the Capital Letters
// Given a string of letters, how many capital letters are there?

function capitalLetters(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].includes(str[i].toUpperCase())) {
            count++;
        }
    }
    return count
}

function capitalLetters(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            count++;
        }
    }
    return count
}

// console.log(capitalLetters("fvLzpxmgXSDrobbgMVrc"));  // 6
// console.log(capitalLetters("JMZWCneOTFLWYwBWxyFw"));  // 14
// console.log(capitalLetters("mqeytbbjwqemcdrdsyvq"));  // 0


// 74 => Count Syllables
// Create a function that counts the number of syllables a word has. Each syllable is separated with a dash -.

function numberSyllables(str) {
    let arr = str.split("-");
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count++
    }
    return count
}

// console.log(numberSyllables("buf-fet")); // 2
// console.log(numberSyllables("beau-ti-ful")); // 3
// console.log(numberSyllables("mon-u-men-tal")); // 4
// console.log(numberSyllables("on-o-mat-o-poe-ia")); // 

// 75 => Hamming Distance
// Hamming distance is the number of characters that differ between two strings.

// To illustrate:

// String1: "abcbba"
// String2: "abcbda"

// Hamming Distance: 1 - "b" vs. "d" is the only difference.
// Create a function that computes the hamming distance between two strings.

function hammingDistance(s1, s2) {
    let count = 0;
    for (let i = 0; i < s2.length; i++) {
        if (s1[i] !== s2[i]) {
            count++;

        }
    }
    return count
}

// console.log(hammingDistance("abcde", "bcdef")); // 5
// console.log(hammingDistance("abcde", "abcde")); // 0
// console.log(hammingDistance("strong", "strung")); // 1
// 76 => Remove the First and Last Characters
// Create a function that removes the first and last characters from a string.

function removeFirstLast(str) {
    let arr = str.split('');
    arr.shift(1);
    arr.pop();

    return arr.join("")
}


// console.log(removeFirstLast("hello")); // "ell"
// console.log(removeFirstLast("maybe")); // "ayb"
// console.log(removeFirstLast("benefit")); // "enefi"
// console.log(removeFirstLast(" a")); // "a"


// 77 => Retrieve the Subreddit
// Create a function to extract the name of the subreddit from its URL.

function subReddit(str) {
    let arr = str.split("/");
    return arr[arr.length - 2]


}

// console.log(subReddit("https://www.reddit.com/r/funny/")); // "funny"
// console.log(subReddit("https://www.reddit.com/r/relationships/")); // "relationships"
// console.log(subReddit("https://www.reddit.com/r/mildlyinteresting/")); // "mildlyinteresting"


//  78 => Broken Bridge
//  Create a function which validates whether a bridge is safe to walk on (i.e. has no gaps in it to fall through).

function isSafeBridge(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i].includes(" ")) {
            return false;
        }
    }
    return true
}


function isSafeBridge(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            return false;
        }
    }
    return true
}

// console.log(isSafeBridge("####")); // true
// console.log(isSafeBridge("## ####")); // false
// console.log(isSafeBridge("#")); // true

// 79 => Between Words
// Write a function that takes three string arguments (first, last, and word) and returns true if word is found between first and last in the dictionary, otherwise false.
function isBetween(first, last, word) {
    return first < word && word < last;
}

// console.log(isBetween("apple", "banana", "azure")); // true
// console.log(isBetween("monk", "monument", "monkey")); // true
// console.log(isBetween("bookend", "boolean", "boost")); // false

// 80 => Regex Series: String Contains at Least One Digit
// Write a regular expression that matches a string if it contains at least one digit.

function containsDigit(str) {
    if (!isNaN(str[str.length - 1])) {
        return true
    } else {
        return false
    }

}
// console.log(containsDigit("c8")); // true
// console.log(containsDigit("23cc4")); // true
// console.log(containsDigit("abwekz")); // false
// console.log(containsDigit("sdfkxi")); // false