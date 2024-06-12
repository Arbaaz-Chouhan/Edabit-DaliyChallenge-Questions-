// 1 Card Counting (BlackJack)
// In BlackJack, cards are counted with -1, 0, 1 values:

// 2, 3, 4, 5, 6 are counted as +1
// 7, 8, 9 are counted as 0
// 10, J, Q, K, A are counted as -1
// Create a function that counts the number and returns it from the array of cards provided.
// 

function count(cards) {

}
// console.log(count([5, 9, 10, 3, "J", "A", 4, 8, 5])); // ➞ 1
// console.log(count(["A", "A", "K", "Q", "Q", "J"])); // ➞ -6
// console.log(count(["A", 5, 5, 2, 6, 2, 3, 8, 9, 7])); // ➞ 5

// 2 The Collatz Conjecture
// Consider the following operation on an arbitrary positive integer:

// If n is even -> n / 2
// If n is odd -> n * 3 + 1
// Create a function to repeatedly evaluate these operations, until reaching 1. Return the number of steps it took.

// See the following example, using 10 as the input, with 6 steps:

// 10 is even - 10 / 2 = 5
// 5 is odd - 5 * 3 + 1 = 16
// 16 is even - 16 / 2 = 8
// 8 is even - 8 / 2 = 4
// 4 is even - 4 / 2 = 2
// 2 is even - 2 / 2 = 1 -> Reached 1, so return 6

function collatz(n) {

    for (let i = 1; i <= n; i++) {

        if (n % 2 === 0) {
            return n / 2
        } else {
            return n * 2 + 1
        }

    }
}
// console.log(collatz(2)); ///➞ 1
// console.log(collatz(3)); ///➞ 7
// console.log(collatz(10)); /// ➞ 6

// 3 Compounding Letters
// Create a function that takes a string and returns a new string with each new character accumulating by +1. Separate each set with a dash.


function accum(str) {
    let res = " ";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        res += str[i].toUpperCase();

        for (let j = 0; j < i; j++) {
            res += str[i];
        }

        if (i !== str.length - 1) {
            res += "-";
        }
    }
    return res
}
// console.log(accum("abcd")); //➞ "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); // ➞ "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt")); // ➞ "C-Ww-Aaa-Tttt"

//  4 Burglary Series (08): Remove an Entry
// Your spouse tells you that one of the items on the list wasn't stolen, it is in your castle in Transilvania. Given an object of the stolen items and an item name, return a copy without that item on the list.


function removeEntry(obj, item) {
    let newObj = {};
    let key = Object.keys(obj);
    for (let i = 0; i < key.length; i++) {
        let currentElement = key[i];
        if (currentElement !== item) {
            newObj[currentElement] = obj[currentElement]

        }
    }
    return newObj;
}
// console.log(removeEntry({ piano: 300, tv: 100, skate: 50 }, "skate")); // ➞ { piano: 300, tv: 100 }
// console.log(removeEntry({ mirror: 500, painting: 1 }, "mirror")); // ➞ { painting: 1 }


// 5 Intro to Nested Loops
// Imagine a school that kids attend for 6 years. In each year, there are five groups started, marked with the letters a, b, c, d, e. For the first year, the groups are 1a, 1b, 1c, 1d, 1e and for the last year, the groups are 6a, 6b, 6c, 6d, 6e.

// Write a function that returns the groups in the school by year (as a string), separated with a comma and a space in the form of "1a, 1b, 1c, 1d, 1e, 2a, 2b (....) 5d, 5e, 6a, 6b, 6c, 6d, 6e".


function printAllGroups() {
    let res = " ";
    for (let i = 0; i <= 6; i++) {

    }
    // No Solve
}
// console.log(printAllGroups()); //➞ "1a, 1b, 1c, 1d, 1e, 2a, 2b, 2c, 2d, 2e, 3a, 3b, 3c, 3d, 3e, 4a, 4b, 4c, 4d, 4e, 5a, 5b, 5c, 5d, 5e, 6a, 6b, 6c, 6d, 6e "


// 6 Longest Word
// Write a function that finds the longest word in a sentence and returns it. If two or more words are the biggest, return the word closest to the start of the sentence. Characters such as apostrophe, commas, periods, etc count as letters (e.g. O'Connor is 8 characters long).


function longestWord(str) {
    let words = str.split(" ");
    let longest = " ";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest += words[i];
        }
    }
    return longest
}

// console.log(longestWord("Hello darkness my old friend")); // ➞ "darkness"
// console.log(longestWord("Hello there mate") ); //➞ "Hello"
// console.log(longestWord("Kayla's toy is plastic")); // ➞ "Kayla's"

// 7 Hold Your Breath!
// You will be given an array of numbers which represent your character's altitude above sea level at regular intervals:

// Positive numbers represent height above the water.
// 0 is sea level.
// Negative numbers represent depth below the water's surface.
// Create a function which returns whether your character survives their unsupervised diving experience, given an array of integers.

// Your character starts with a breath meter of 10, which is the maximum. When diving underwater, your breath meter decreases by 2 per item in the array. Watch out! If your breath diminishes to 0, your character dies!

// To prevent this, you can replenish your breath by 4 (up to the maximum of 10) for each item in the array where you are at or above sea level.

// Your function should return true if your character survives, and false if not.

// Worked Example
// divingMinigame([-5, -15, -4, 0, 5]) ➞ true

// Breath meter starts at 10.
// -5 is below water, so breath meter decreases to 8.
// -15 is below water, so breath meter decreases to 6.
// -4 is below water, so breath meter decreases to 4.
// 0 is at sea level, so breath meter increases to 8.
// 5 is above sea level and breath meter is capped at 10 (would've been 12 otherwise).
// Character survives!

function divingMinigame(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) {
            return false;
        }
    }
    return true
}
// console.log(divingMinigame([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // ➞ true
// console.log(divingMinigame([-3, -6, -2, -6, -2])); // ➞ false
// console.log(divingMinigame([2, 1, 2, 1, -3, -4, -5, -3, -4])); // ➞ false


// 8 Doubled Pay
// An employee working at a very bizarre company earns one penny on their first day. However, for every day that passes, their base amount doubles, so they earn two pennies on the second day and four pennies on the third day (totalling 7 pennies). Given a number of days, return how many pennies the employee accumulates.


function doubledPay(n) {
    if (n === 1) {
        return 1
    } else {
        return doubledPay(n - 1) * 2 + 1

    }

}
// console.log(doubledPay(1)); //➞ 1
// console.log(doubledPay(2)); //➞ 3
// console.log(doubledPay(3)); //➞ 7

// 9 Bundle Up!
// Let's assume for the purposes of this challenge that for every layer of fabric you wear when it's cold outside (coats, cardigans, etc), the temperature increases by a tenth of the total.

// Given n number of layers and a given temperature, return the temperature inside of all those warm fuzzy layers. Round to the nearest tenth of a degree.

// console.log(calcBundledTemp(2, "10*C")); // ➞ "12.1*C"
// 10 * 1.1 = 11
// 11 * 1.1 = 12.1


function calcBundledTemp(n, temp) {

    for (let i = 0; i <= n; i++) {
        let num = temp.split(" ");
        let currentEle = parseInt(num);
        if (Number.isNaN(currentEle) === false) {
            return currentEle * 1.1;
        }
    }
    return res
}

// console.log(calcBundledTemp(1, "2*C") ); //➞ "2.2*C"
// console.log(calcBundledTemp(4, "6*C") ); //➞ "8.8*C"
// console.log(calcBundledTemp(20, "4*C")); // ➞ "26.9*C"


// 10 Identical Subarrays
// Create a function that takes in a two-dimensional array and returns the number of sub-arrays with only identical elements.


function countIdentical(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i]) {
            count++;
        }
    }

    return count
}

// console.log(countIdentical([
//     [1],
//     [2],
//     [3],
//     [4]
// ])); //➞ 4

// Single-item arrays still count as having identical elements.


// console.log(countIdentical([
//     [1, 2],
//     [2, 3],
//     [3, 4],
//     [4, 4]
// ])); //➞ 1


// console.log(countIdentical([
//     [33, 33],
//     [5],
//     ["a", "a"],
//     [2, 2, 2],
//     [1, 2, 2],
//     [3, 1]
// ])); // ➞ 4

// 4 arrays with identical elements: [33, 33], [5], ["a", "a"], and [2, 2, 2]


// console.log(countIdentical([
//     ["@", "@", "@", "@"],
//     [2, 3], [3, 4], [4, 4]
// ])); //➞ 2


// 11 Hidden Calculator Words
// At school, we used to play with our calculators and send each other secret messages. The trick was to enter a special number and turn the calculator upside-down. LOL ... I mean 707!

// Given a number, create a function that converts it into a word by turning the integer 180 degrees around.



function turnCalc(num) {

    let res = " ";
    const number = {
        1: "I",
        2: "Z",
        3: "E",
        4: "H",
        5: "S",
        6: "G",
        7: "L",
        8: "B",
        9: "-",
        0: "O",

    }
    let digit = num.toString();
    for (let i = 0; i < digit.length; i++) {
        let currentEle = digit[i];
        if (number.includes(digit[i]))
            res += number[currentEle];
    }
    return res
}

// console.log(turnCalc(707)); //➞ "LOL"
// console.log(turnCalc(5508)); // ➞ "BOSS"
// console.log(turnCalc(3045)); // ➞ "SHOE"


// 12 Burglary Series (06): Convert to Number
// You prepare a list to send to the insurance company. As you finish, you notice you misformatted it. Given an object with at least one key/value pair, convert all the values to numbers.


function convertToNumber(obj) {

    let keys = Object.keys(obj);
    let res = {};
    for (let i = 0; i < keys.length; i++) {
        let currentEle = keys[i];
        let currentVal = obj[keys[i]];
        res[currentEle] = parseInt(currentVal);

    }
    return res
}
// console.log(convertToNumber({ piano: "200" })); // ➞ { piano: 200 }
// console.log(convertToNumber({ piano: "200", tv: "300" })); // ➞ { piano: 200, tv: 300 }
// console.log(convertToNumber({ piano: "200", tv: "300", stereo: "400" })); // ➞ { piano: 200, tv: 300, stereo: 400 }


// 13 Pyramid Arrays
// Given a number n, return an array containing several arrays. Each array increments in size, from range 1 to n inclusive, contaning its length as the elements.


function pyramidArrays(n) {
    let res = [];
    for (let i = 1; i <= n; i++) {
        let EmptyArr = [];

        for (let j = 0; j < i; j++) {
            EmptyArr.push(i);
        }
        res.push(EmptyArr);
    }
    return res;
}
// console.log(pyramidArrays(1) ); //➞ [[1]]
// console.log(pyramidArrays(3) ); //➞ [[1], [2, 2], [3, 3, 3]]
// console.log(pyramidArrays(5) ); //➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]]


// 14 Cumulative Array Sum
// Create a function that takes an array of numbers and returns an array where each number is the sum of itself + all previous numbers in the array.


function cumulativeSum(arr) {
    let EmptyArr = [];
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
        EmptyArr.push(total)
    };

    return EmptyArr;
}
// console.log(cumulativeSum([1, 2, 3])); // ➞ [1, 3, 6]
// console.log(cumulativeSum([1, -2, 3])); // ➞ [1, -1, 2]
// console.log(cumulativeSum([3, 3, -2, 408, 3, 3])); // ➞ [3, 6, 4, 412, 415, 418]

//  15 Making a Sandwich
// Given an array of ingredients i and a string flavour f as input, create a function that returns the array but with the elements bread around the selected ingredient.


function makeSandwich(ingredients, flavour) {


    for (let i = 0; i < ingredients.length; i++) {
        return ingredients.map(e => {
            if (e === flavour) return ["bread", flavour, "bread"]
            else
                return e

        }).flat()
    }
}
// console.log(makeSandwich(["tuna", "ham", "tomato"], "ham")); // ➞ ["tuna", "bread", "ham", "bread", "tomato"]
// console.log(makeSandwich(["cheese", "lettuce"], "cheese")); // ➞ ["bread", "cheese", "bread", "lettuce"]
// console.log(makeSandwich(["ham", "ham"], "ham")); // ➞ ["bread", "ham", "bread", "bread", "ham", "bread"]

