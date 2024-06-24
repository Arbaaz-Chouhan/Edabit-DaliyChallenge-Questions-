// 1 => Get the Area of a Country
// Create a function that takes a country's name and its area as arguments and returns the area of the country's proportion of the total world's landmass.

function areaOfCountry(str, num) {
    let totalLandmass = 148940000;
    let percentage = (num / totalLandmass) * 100;
    return `${str} is ${percentage.toFixed(2)}% of the total world's landmass`;
}

// console.log(areaOfCountry("Russia", 17098242)); /// "Russia is 11.48% of the total world's landmass"
// console.log(areaOfCountry("USA", 9372610)); // "USA is 6.29% of the total world's landmass"
// console.log(areaOfCountry("Iran", 1648195)); /// "Iran is 1.11% of the total world's landmass"

// 2 => Hitting the Jackpot
// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

function testJackpot(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return false
        }
    }
    return true
}

// console.log(testJackpot(["@", "@", "@", "@"])); // true
// console.log(testJackpot(["abc", "abc", "abc", "abc"])); // true
// console.log(testJackpot(["SS", "SS", "SS", "SS"])); // true
// console.log(testJackpot(["&&", "&", "&&&", "&&&&"])); // false
// console.log(testJackpot(["SS", "SS", "SS", "Ss"])); // false


function findNemo(sentence) {
    let words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (words[i] === "Nemo") {
            return `I found Nemo at ${i + 1}!`;
        }
    }

    return "I can't find Nemo :(";
}

// console.log(findNemo("I am finding Nemo !")); // "I found Nemo at 4!"
// console.log(findNemo("Nemo is me")); // "I found Nemo at 1!"
// console.log(findNemo("I Nemo am")); // "I found Nemo at 2!"


// 3 => Move Capital Letters to the Front
// Create a function that moves all capital letters to the front of a word.

function capToFront(str) {
    let words = str.split("");
    let CapitalWords = "";
    let smallWords = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i] === words[i].toUpperCase()) {
            CapitalWords += words[i];
        }
        else {
            smallWords += words[i];
        }
    }
    return CapitalWords + smallWords
}

// console.log(capToFront("hApPy")); // "APhpy"
// console.log(capToFront("moveMENT")); // "MENTmove"
// console.log(capToFront("shOrtCAKE")); // "OCAKEshrt"


// 4 =>  Reverse Words in a String
// Given an input string, reverse the string word by word, the first word will be the last, and so on.

// function reverseWords(str) {
//     let words = str.split(" ");
//     let res = [];
//     for (let i = words.length - 1; i >= 0; i--) {
//         res.push(words[i]);
//     }
//     return res.join(" ").trim()
// }

function reverseWords(str) {
    let words = str.split(" ");

    return words.reverse().join(" ").trim()

}

// console.log(reverseWords(" the sky is blue")); // "blue is sky the"
// console.log(reverseWords("hello   world!  ")); // "world! hello"
// console.log(reverseWords("a good example")); // "example good a"


// 5 => Match the Last Item
// Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.

function matchLastItem(arr) {
    let concatenated = "";
    for (let i = 0; i < arr.length - 1; i++) {
        concatenated += arr[i]
    }

    return concatenated === arr[arr.length - 1]
}



// console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"])); // true
// // The last item is the rest joined
// console.log(matchLastItem([1, 1, 1, "11"])); // false
// // The last item should be "111"
// console.log(matchLastItem([8, "thunder", true, "8thundertrue"])); // true


// 6 => Remove Duplicates from an Array
// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

function removeDups(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i]);
        }
    }
    return res
}

// console.log(removeDups([1, 0, 1, 0])); // [1, 0]
// console.log(removeDups(["The", "big", "cat"])); // ["The", "big", "cat"]
// console.log(removeDups(["John", "Taylor", "John"])); // ["John", "Taylor"]


// 7 =>  ReverseAndNot
// Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.

// To illustrate:

// 123
// We reverse 123 to get 321 and then add 123 to the end, resulting in 321123.

function reverseAndNot(num) {
    let numStr = num.toString();
    let res = "";
    for (let i = numStr.length - 1; i >= 0; i--) {
        res += numStr[i];
    }
    return res + numStr
}

function reverseAndNot(num) {
    let numStr = num.toString();
    let result = numStr.split("").reverse().join("");
    return result + numStr;
}

// console.log(reverseAndNot(123));  // 321123
// console.log(reverseAndNot(152));  // 251152
// console.log(reverseAndNot(123456789));  // 987654321123456789


// 8 => Multiplying Numbers in a String
// Given a string of numbers separated by a comma and space, return the product of the numbers.

function multiplyNums(num) {
    let numbers = num.split(", ");
    let res = 1;
    for (let i = 0; i < numbers.length; i++) {
        res *= numbers[i]
    }
    return res
}

function multiplyNums(num) {
    let numbers = num.split(", ");

    for (let i = 0; i < numbers.length; i++) {
        return numbers.reduce((acc, curr) => acc * curr)
    }
    return res
}

// console.log(multiplyNums("2, 3")); // 6
// console.log(multiplyNums("1, 2, 3, 4")); // 24
// console.log(multiplyNums("54, 75, 453, 0")); // 0
// console.log(multiplyNums("10, -2")); // -20

// 9 => Xs and Os, Nobody Knows
// Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.

// Return a boolean value (true or false).
// Return true if the amount of x's and o's are the same.
// Return false if they aren't the same amount.
// The string can contain any character.
// When "x" and "o" are not in the string, return true.

function XO(str) {
    let lowerStr = str.toLowerCase();
    let xCount = 0;
    let oCount = 0;
    for (let char of lowerStr) {
        if (char === "x") {
            xCount++;
        } else if (char === "o") {
            oCount++;
        }

    }
    return xCount === oCount
}


function XO(str) {
    let lowerStr = str.toLowerCase();
    let xCount = 0;
    let oCount = 0;
    for (let i = 0; i < lowerStr.length; i++) {
        if (lowerStr[i] === "x") {
            xCount++;
        } else if (lowerStr[i] === "o") {
            oCount++;
        }

    }
    return xCount === oCount
}

// console.log(XO("ooxx"));  // true
// console.log(XO("xooxx"));  // false
// console.log(XO("ooxXm"));  // true
// // Case insensitive
// console.log(XO("zpzpzpp"));  // true
// // Returns true if no x and o
// console.log(XO("zzoo"));  // false


// 10 => Capitalize the First Letter of Each Word
// Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.

// function xmakeTitle(str) {
//     let words = str.split(" ");
//     let res =  words.map(char => char.slice(0,1).toUpperCase() + char.slice(1));
//     return res.join(" ");
// }


function xmakeTitle(str) {
    let words = str.split(" ");
    let res = [];
    for (let i = 0; i < words.length; i++) {
        res.push(words[i].slice(0, 1).toUpperCase() + words[i].slice(1));

    }
    return res.join(" ")
}

// console.log(xmakeTitle("This is a title")); // "This Is A Title"
// console.log(xmakeTitle("capitalize every word")); // "Capitalize Every Word"
// console.log(xmakeTitle("I Like Pizza")); // "I Like Pizza"
// console.log(xmakeTitle("PIZZA PIZZA PIZZA")); // "PIZZA PIZZA PIZZA"


// 11 => Reverse Words Starting With a Particular Letter
// Write a function that reverses all the words in a sentence that start with a particular letter.

function specialReverse(s1, s2) {
    let words = s1.split(" ");
    let res = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(s2)) {
            res += words[i].split("").reverse().join("") + " ";
        } else {
            res += words[i] + " ";
        }

    }
    return res
}

// console.log(specialReverse("word searches are super fun", "s")); // "word sehcraes are repus fun"
// console.log(specialReverse("first man to walk on the moon", "m")); // "first nam to walk on the noom"
// console.log(specialReverse("peter piper picked pickled peppers", "p")); // "retep repip dekcip delkcip sreppep"


// 12 => Find the Characters Counterpart Char Code
// Create a function that takes a single character as an argument and returns the char code of its lowercased / uppercased counterpart.


// Given that:
//   - "A" char code is: 65
//   - "a" char code is: 97

function counterpartCharCode(str) {
    if (str >= "A" && str <= "Z") {
        return str.charCodeAt(0) + 32;

    } else if (str >= "a" && str <= "z") {
        return str.charCodeAt(0) - 32;
    }

}

// console.log(counterpartCharCode("A"));  // 97
// console.log(counterpartCharCode("a"));  // 65

// 13 => The DECIMATOR
// Write a DECIMATOR function which takes a string and decimates it (i.e. it removes the last 1/10 of the characters).

// Always round up: if the string has 21 characters, 1/10 of the characters would be 2.1 characters, hence the DECIMATOR removes 3 characters. The DECIMATOR shows no mercy!

function DECIMATOR(str) {
    const charsToRemove = Math.ceil(str.length / 10);
    const decimatedStr = str.slice(0, -charsToRemove);

    return decimatedStr;
}

// console.log(DECIMATOR("1234567890"));  // Output: "123456789"
// console.log(DECIMATOR("1234567890AB"));  // Output: "1234567890"
// console.log(DECIMATOR("123"));  // Output: "12"
// console.log(DECIMATOR("123456789012345678901"));  // Output: "123456789012345678"


// 14 => Return the Middle Character(s) of a String
// Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.

function getMiddle(str) {
    let middleIndex = Math.floor(str.length / 2);

    if (str.length % 2 === 1) {
        // Odd length: return one middle character
        return str[middleIndex];
    } else {
        // Even length: return two middle characters
        return str[middleIndex - 1] + str[middleIndex];
    }
}

// console.log(getMiddle("test")); // "es"
// console.log(getMiddle("testing")); // "t"
// console.log(getMiddle("middle")); // "dd"
// console.log(getMiddle("A")); // "A"


// 15 => Remove the Letters ABC
// Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.

function removeABC(str) {
    if (str === "") {
        return null
    }
    let checkAbcWords = "abc";
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (!checkAbcWords.includes(str[i])) {
            res += str[i];
        }

    }

    return res
}

// console.log(removeABC("This might be a bit hard")); // "This might e  it hrd"
// console.log(removeABC("hello world!")); // null
// console.log(removeABC("")); // null

// 16 => Emphasise the Words
// Create a function that returns a capitalized version of the string passed. The first letter of each word in the string should be capitalized while the rest of each word should be lowercase.

function emphasise(str) {
    let words = str.split(" ");
    let res = "";
    for (let i = 0; i < words.length; i++) {
        res += words[i].slice(0, 1).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
    }
    return res
}

// console.log(emphasise("hello world")); // "Hello World"
// console.log(emphasise("GOOD MORNING")); // "Good Morning"
// console.log(emphasise("99 red balloons!")); // "99 Red Balloons!"

// 17 => Is the Word an Isogram?
// An isogram is a word that has no duplicate letters. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".

function isIsogram(str) {
    str = str.toLowerCase();

    let charSet = new Set();

    for (let char of str) {

        if (charSet.has(char)) {
            return false;
        }

        charSet.add(char);
    }

    return true;
}

// console.log(isIsogram("Algorism")); // true
// console.log(isIsogram("PasSword")); // false
// // Not case sensitive.
// console.log(isIsogram("Consecutive")); // false


// 18 => Format Number with Comma(s) Separating Thousands
// Create a function that takes a number as an argument and returns a string formatted to separate thousands.

function formatNum(num) {
    let numStr = num.toString().split("");
    let res = [];
    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] === 4) {
            res.push(numStr.slice(0, 1) + "," + numStr[i].slice(1));
        }
    }
    return res
}

// console.log(formatNum(1000)); // "1,000"
// console.log(formatNum(100000)); // "100,000"
// console.log(formatNum(20)); // "20"


// 19 => Double Letters
// Create a function that takes a word and returns true if the word has two consecutive identical letters.

function doubleLetters(str) {
    let words = str.split("");
    let res = [];
    for (let i = 0; i < words.length - 1; i++) {
        if (words[i] === words[i + 1]) {
            return true;
        }
    }

    return false
}

// console.log(doubleLetters("loop")); // true
// console.log(doubleLetters("yummy")); // true
// console.log(doubleLetters("orange")); // false
// console.log(doubleLetters("munchkin")); // false


// 20 => Who's in First Place?
// Create a function that takes a string road and returns the car that's in first place. The road will be made of "=", and cars will be represented by letters in the alphabet.

function firstPlace(str) {
    let alphabet = "Al"; // Assuming cars are represented by all letters

    for (let i = 0; i < str.length; i++) {

        if (alphabet.includes(str[i])) {
            return str[i]
        }
    }

    return ""; // Return an empty string if no valid car (letter) is found
}

// console.log(firstPlace("====b===O===e===U=A==")); // "A"
// console.log(firstPlace("e==B=Fe")); // "e"
// console.log(firstPlace("proeNeoOJGnfl")); // "l"

