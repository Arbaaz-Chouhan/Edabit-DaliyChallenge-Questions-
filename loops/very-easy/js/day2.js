// 1 Filter Strings from Array
// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

function filterArray(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        const currentEle = parseInt(arr[i])
        if (Number.isNaN(currentEle) === false) {
            res.push(currentEle)
        }
    }
    return res
}
// console.log(filterArray([1, 2, 3, "a", "b", 4])); // ➞ [1, 2, 3, 4]
// console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ); //➞ [0, 1729]
// console.log(filterArray(["Nothing", "here"]) ); //➞ []

// 2 True Ones, False Zeros
// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

function integerBoolean(num) {
    let res = [];
    for (let i = 0; i < num.length; i++) {
        if (num[i] == 1) {
            res.push(true)
        } else if (num[i] == 0) {
            res.push(false)
        }
    }

    return res
}
// console.log(integerBoolean("100101")); // ➞ [true, false, false, true, false, true]
// console.log(integerBoolean("10")); // ➞ [true, false]
// console.log(integerBoolean("001"))// ➞ [false, false, true]

// 3 Burglary Series (11): Say What
// The insurance guy calls again. Apparently, they were informed by your spouse that some items were not stolen at all and you failed to mention this detail to them. This is a fraud attempt! You freeze and mumble something unintelligible. Find out what you said.

// Given an object, return a string that concatenates all the values and adds the 2nd key at the end. Make sure you keep an empty space between them but not at the beginning or end of the string. Look at the examples for a clearer picture.


function object(obj) {
    let res = "";

    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        const currentEle = keys[i];
        const currentVal = obj[currentEle];
        res = res + currentVal + " ";

    }
    res += obj[2]
    return res
}

// console.log(object({ 1: "Mommy", 2: "please", 3: "help" })); //➞ "Mommy please help please"
// console.log(object({ 1: "Me", 2: "innocent", 3: "is" }));  // ➞ "Me innocent is innocent"
// console.log(object({ 1: "Must", 2: "lawyer", 3: "call" })); //➞ "Must lawyer call lawyer"


// 4 Designing Rugs
// Write a function that accepts the width and height (m, n) and an optional proc s and generates an array with m elements. Each element is a string consisting of either:

// The default character (hash #) repeating n times (if no proc is given).
// The character passed in through the proc repeating n times.

function makeRug(m, n, s = "#") {
    let res = [];

    for (let i = 1; i <= n; i++) {
        let str = "";

        for (let j = 1; j <= n; j++) {

            str += s


        }

        res.push(str);


    }

    return res
}
// console.log(makeRug(3, 5 ) );//➞ [
// //   "#####",
// //   "#####",
// //   "#####"
// // ]

// console.log(makeRug(3, 5, '$'));//  ➞ [
// //   "$$$$$",
// //   "$$$$$",
// //   "$$$$$"
// // ]

// console.log(makeRug(2, 2, 'A')) ;//  ➞ [
//   "AA",
//   "AA"
// ]

// 5 N Tables + 1
// Create a function that takes a number n and returns the first 10 multiples of n with 1 added to it, separated by commas.

function nTablesPlusOne(n) {
    let res = [];

    for (let i = 1; i <= 10; i++) {
        res.push(n * i + 1)
    }
    return res
}
// console.log(nTablesPlusOne(7) ); //➞ "8,15,22,29,36,43,50,57,64,71"
// console.log(nTablesPlusOne(1) ); //➞ "2,3,4,5,6,7,8,9,10,11"
// console.log(nTablesPlusOne(3) ); //➞ "4,7,10,13,16,19,22,25,28,31"


// 6 YouTube Upload Count
// You are given an array of dates in the format Dec 11 and a monthin the format Dec as arguments. Each date represents a video that was uploaded on that day. Return the number of uploads for a given month.

function uploadCount(date, month) {
    let count = 0;


    for (let i = 0; i < date.length; i++) {
        const currentEle = date[i].split(" ");
        if (currentEle[0] === month) {
            count += 1;
        }

    }
    return count
}

// console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Sept")); //➞ 2
// console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Oct")); //➞ 1


// 7 The Forbidden Letter
// Given a letter and an array of words, return whether the letter does not appear in any of the words.


function forbiddenLetter(char, arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(char)) {
            return false;
        }
    }
    return true;

}
// console.log(forbiddenLetter("r", ["rock", "paper", "scissors"])); // ➞ false
// console.log(forbiddenLetter("a", ["spoon", "fork", "knife"])); // ➞ true
// console.log(forbiddenLetter("m", [])); // ➞ true

// 8 Sum of Minimums
// Create a function that takes a 2D array arr and returns the sum of the minimum value in each row.
 

function sumMinimums(arr) {
    let  sum = 0;

    for(let i = 0; i <arr.length; i++){
        let min = Infinity;

        for(let j = 0; i<arr[i].length; j++){
        const currentEle = arr[i][j];
        if(min > currentEle){
            min = currentEle
        }
        }
        sum += min;
    }
    
}

// console.log(sumMinimums([
//     [1, 2, 3, 4, 5],
//     [5, 6, 7, 8, 9],
//     [20, 21, 34, 56, 100]
// ]));//➞ 26

// minimum value of the first row is 1
// minimum value of the second row is 5
// minimum value of the third row is 20

// 9 Factors of a Given Number
// Create a function that finds each factor of a given number n. Your solution should return an array of the number(s) that meet this criteria.


function findFactors(n) {
    let res = [];

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            res.push(i);
        }

    }
    return res;
}
// console.log(findFactors(9) ); //➞ [1, 3, 9]
// 9 has three factors 1, 3 and 9

// console.log(findFactors(12)); // ➞ [1, 2, 3, 4, 6, 12]

// console.log(findFactors(20)); // ➞ [1, 2, 4, 5, 10, 20]

// console.log(findFactors(0) ); //➞ []
// 0 has no factors

// 10 Even and Odd Strings
// Given a one word lowercase string txt, return another string such that even-indexed and odd-indexed characters are grouped and groups are space-separated.


function evenOddString(txt) {
    let evenChars = "";
    let oddChars = "";

    for (let i = 0; i < txt.length; i++) {
        if (i % 2 === 0) {
            evenChars += txt[i];
        } else {
            oddChars += txt[i]
        }
    }
    return evenChars + " " + oddChars;
}
// console.log(evenOddString("mubashir")); // ➞ "mbsi uahr"
// // Letters at even indexes = "mbsi"
// // Letters at odd indexes = "uahr"
// // Join both strings with a space

// console.log(evenOddString("edabit") ); //➞ "eai dbt"
// console.log(evenOddString("airforce")); // ➞ "aroc ifre"


// 11 Find the Average of the Letters 📊
// Create a function that returns the average of a list composed of letters. First, find the number of the letter in the alphabet in order to find the average of the list.

// A = 1
// B = 2
// C = 3
// D = 4
// E = 5
// average = total sum of all numbers / number of item in the set
// Return the result rounded to two decimal points.


function averageIndex(list) {
    let sum = 0;
    for (let i = 1; i < list.length; i++) {
        sum += i + 1
    }
    return sum / list.length
}
// console.log(averageIndex(["a", "b", "c", "i"]) ); //➞ 3.75
// console.log(averageIndex(["e", "d", "a", "b", "i", "t"])); // ➞ 6.83
// console.log(averageIndex(["y", "o", "u", "a", "r", "e", "t", "h", "e", "b", "e", "s", "t"])); // ➞ 12.62

// 12 Extremely Over-Nested
// Create a function that returns the original value from a matrix with too many sub-arrays.


function deNest(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res += arr
    }
    return res
}
// console.log(deNest([[[[[[[[[[[[3]]]]]]]]]]]])); // ➞ 3
// console.log(deNest([[[[[[[true]]]]]]])) // ➞ true
// console.log(deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]])); // ➞ "edabit"

//13 Hot Pics of Danny DeVito!
// I'm trying to watch some lectures to study for my next exam but I keep getting distracted by meme compilations, vine compilations, anime, and more on my favorite video platform.

// Your job is to help me create a function that takes a string and checks to see if it contains the following words or phrases:


// "anime"
// "meme"
// "vines"
// "roasts"
// "Danny DeVito"
// If it does, return "NO!". Otherwise, return "Safe watching!".


function preventDistractions(str) {

    const forbiddenWords = ["anime", "meme", "vines", "roasts", "Danny DeVito"];

    for (let i = 0; i < forbiddenWords.length; i++) {
        if (str.includes(forbiddenWords[i])) {
            return "NO!"
        }

    }
    return "Safe watching!"

}
// console.log(preventDistractions("vines that butter my eggroll")); //➞ "NO!"
// console.log(preventDistractions("Hot pictures of Danny DeVito")); //➞ "NO!"
// console.log(preventDistractions("How to ace BC Calculus in 5 Easy Steps")); //➞ "Safe watching!"

//  14 Count the Capital Letters
// Given a string of letters, how many capital letters are there?


function capitalLetters(str) {
    let res = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.length === toUppperChase()) {
            res += i
        }

    }
    return res
}
// console.log(capitalLetters("fvLzpxmgXSDrobbgMVrc")); // ➞ 6
// console.log(capitalLetters("JMZWCneOTFLWYwBWxyFw")); // ➞ 14
// console.log(capitalLetters("mqeytbbjwqemcdrdsyvq")); // ➞ 0


