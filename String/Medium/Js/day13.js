// 141 => New Word Builder
// Create a function that builds a word from the scrambled letters contained in the first array. Use the second array to establish each position of the letters in the first array. Return a string from the unscrambled letters (that made-up the word).

function wordBuilder(arr1, arr2) {
    let res = [];
    for (let i = 0; i < arr2.length; i++) {
        res.push(arr1[arr2[i]]);
    }
    return res.join("")
}

// console.log(wordBuilder(["g", "e", "o"], [1, 0, 2])); // "ego"
// console.log(wordBuilder(["e", "t", "s", "t"], [3, 0, 2, 1])); // "test"
// console.log(wordBuilder(["b", "e", "t", "i", "d", "a"], [1, 4, 5, 0, 3, 2])); // "edabit"


// 142 => Just Find the Vertex
// Today Juan learned to graph quadratic equations, so he chose to speed up the process and avoid having to write a lot of steps in his notebook to find the vertex. Just help him locate the vertex.

// Ok, I am going to give you some advantages. The first is that you will not have to perform so many steps. The equations will have an easy structure to avoid much complexity.

// Here I will leave you a shorter explanation of how we can find the vertex.

// We have the following equation:

// -5x ^ 2 + 50x -120
// Now we apply the formula to locate the vertex:

// -b / (2 * a)
// We divide our second term by 2 multiplied by the first term. Remember to use the negative sign in b. It would look like this:

// -50 / (2 * -5) = 5
// ... The third term will be insufficient in the challenge, but I wanted to add it to see if it complicates you.

// ... Remember to return the result rounded to zero decimals.

function findVertex(equation) {
    equation = equation.replace(/\s+/g, ''); // Remove all spaces

    const a = parseFloat(equation.split('x^2')[0]);
    const b = parseFloat(equation.split('x^2')[1].split('x')[0]);

    const vertexX = -b / (2 * a);

    return Math.round(vertexX);
}

// console.log(findVertex("-5x^2 + 50x -120")); // 5
// console.log(findVertex("-6x^2 + 36x -72")); // 3
// console.log(findVertex("7x^2 + 14x + 28")); // -1

// 143 =>  Is it a Valid Floating Numeric Character?
// Create a regular expression to check whether the given string is a valid floating numeric character or not.

function isFloatingCharacter(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i].includes(parseFloat(str[i]))) {
            return true
        } else {

        }
    }

    return false
}

// console.log(isFloatingCharacter("12.12")); // true
// console.log(isFloatingCharacter("12.")); // false
// console.log(isFloatingCharacter(".1")); // true
// console.log(isFloatingCharacter("-.1")); // true
// console.log(isFloatingCharacter("abc")); // false


// 144 => rder by Length First
// Graded lexicographic order (grlex order for short) is a way of ordering words that:

// First orders words by length.
// Then orders words of the same size by their dictionary order.
// For example, in grlex order:

// "tray" < "trapped" since "tray" has length 4 while "trapped" has length 7.
// "trap" < "tray" since both have length 4, but "trap" comes before "tray" in the dictionary.
// Given an array of words, return that array in grlex order.

function makeGrlex(arr) {
    return arr.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }

        return a.localeCompare(b);
    });
}
// console.log(makeGrlex(["small", "big"])); // ["big", "small"]
// console.log(makeGrlex(["cat", "ran", "for", "the", "rat"])); // ["cat", "for", "ran", "rat", "the"]
// console.log(makeGrlex(["this", "is", "a", "small", "test"])); // ["a", "is", "test", "this", "small"]


// 145 => Count Palindrome Numbers in a Range
// Create a function that returns the number of palindrome numbers in a specified range (inclusive).

// For example, between 8 and 34, there are 5 palindromes: 8, 9, 11, 22 and 33. Between 1550 and 1552 there is exactly one palindrome: 1551.

function countPalindromes(start, end) {
    let count = 0;

    for (let i = start; i <= end; i++) {
        if (isPalindrome(i)) {
            count++;
        }
    }

    return count;
}

function isPalindrome(num) {
    let str = num.toString();
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

// console.log(countPalindromes(1, 10)); // 9
// console.log(countPalindromes(555, 556)); // 1
// console.log(countPalindromes(878, 898)); // 3

// 146 => Construct and Deconstruct
// Given a string, create a function which outputs an array, building and deconstructing the string letter by letter. See the examples below for some helpful guidance.

function constructDeconstruct(str) {
    let res = [];
    let strres = "";
    for (let i = 1; i <= str.length; i++) {
        res.push(str.slice(0, i));
    }

    for (let j = str.length - 1; j >= 0; j--) {
        res.push(str.slice(0, j))
    }


    return res
}


// console.log(constructDeconstruct("Hello")); // [
//   "H",
//   "He",
//   "Hel",
//   "Hell",
//   "Hello",
//   "Hell",
//   "Hel",
//   "He",
//   "H"
// ]

// console.log(constructDeconstruct("edabit")); // [
//   "e",
//   "ed",
//   "eda",
//   "edab",
//   "edabi",
//   "edabit",
//   "edabi",
//   "edab",
//   "eda",
//   "ed",
//   "e"
// ]

// console.log(constructDeconstruct("the sun")); // [
//   "t",
//   "th",
//   "the",
//   "the ",
//   "the s",
//   "the su",
//   "the sun",
//   "the su",
//   "the s",
//   "the ",
//   "the",
//   "th",
//   "t"
// ]


// 146 => Count the Number of Duplicate Characters
// Create a function that takes a string and returns the number of alphanumeric characters that occur more than once.

function duplicateCount(str) {
    let res = [];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (res.indexOf(str[i]) === -1 && str.indexOf(str[i], i + 1) !== -1) {
            res.push(str[i]);
            count++;
        }
    }

    return count;
}

// console.log(duplicateCount("abcde")); // 0
// console.log(duplicateCount("aabbcde")); // 2
// console.log(duplicateCount("Indivisibilities")); // 2
// console.log(duplicateCount("Aa")); // 0


//147 =>  Is the Sum of Letters Even or Odd?
// Create a function that takes a string and returns true if the sum of the position of every letter in the alphabet is even and false if the sum is odd.

function isAlpha(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let sum = 0;

    for (let char of str.toLowerCase()) {
        let index = alphabet.indexOf(char) + 1;
        if (index > 0) {
            sum += index;
        }
    }

    return sum % 2 === 0;
}


// console.log(isAlpha("i'am king") ); // true
// // 9 + 1 + 13 + 11 + 9 + 14 + 7 = 64 (even)

// console.log(isAlpha("True")); // true
// // 20 + 18 + 21 + 5= 64 (even)

// console.log(isAlpha("alexa")); // false
// // 1 + 12 + 5 + 24 + 1= 43 (odd)

// 148 => Find the Unique Letters
// Create a function that takes a string and returns an array of the letters that occur only once.

function findLetters(str) {
    let res = [];

    for (let i = 0; i < str.length; i++) {

        if (res.indexOf(str[i]) === -1){
            res.push(str[i]);
        } 

    }
    return res
}

// console.log(findLetters("monopoly")); // ["m", "n", "p", "l", "y"]
// console.log(findLetters("balloon"));  // ["b", "a", "n"]
// console.log(findLetters("analysis")); // ["n", "l", "y", "i"]


// 149 =>  Reverse Coding Challenge #1
// This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.

// Your task is to create a function that, when fed the inputs below, produce the sample outputs shown.

function mysteryFunc(str) {

	let res = "";

    for(let i = 0; i<str.length; i++){
   
        if(isNaN(str[i]) === true){
            var char  = str[i];
        } 
    else if(isNaN(str[i]) === false){
       let repeatCount =  str[i];
   
       res += char.repeat(repeatCount);
    } 
   
    
    }

    return res
}

// console.log(mysteryFunc("A4B5C2"));  // "AAAABBBBBCC"
// console.log(mysteryFunc("C2F1E5"));  // "CCFEEEEE"
// console.log(mysteryFunc("T4S2V2"));  // "TTTTSSVV"
// console.log(mysteryFunc("A1B2C3D4"));  // "ABBCCCDDDD"


//150 => Words that Start with a Vowel
// Write a function that retrieves all words that begin with a vowel.

function retrieve(str){
    let words = str.toLowerCase().split(' ');
    let vowel = "aioue";
    let res = [];
        for(let i = 0; i<words.length; i++){
        let startVowel =  words[i].slice(0,1);
        if(vowel.includes(startVowel)){
            res.push(words[i]);
        }
    }

    return res
}

// console.log(retrieve("A simple life is a happy life for me.")); // ["a", "is", "a"]
// console.log(retrieve("Exercising is a healthy way to burn off energy.")); // ["exercising", "is", "a", "off", "energy"]
// console.log(retrieve("The poor ostrich was ostracized.")); // ["ostrich", "ostracized"]
// console.log(retrieve("")); // []