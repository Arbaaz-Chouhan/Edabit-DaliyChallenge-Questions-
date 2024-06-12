// 1 Factor Chain
// A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:

// [3, 6, 12, 36]

// // 3 is a factor of 6
// // 6 is a factor of 12
// // 12 is a factor of 36
// Create a function that determines whether or not an array is a factor chain.

function factorChain(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr.length % arr[i] === 0) {
            return true;
        } else {
            return false;
        }
    }

}
// console.log(factorChain([1, 2, 4, 8, 16, 32]));// ➞ true
// console.log(factorChain([1, 1, 1, 1, 1, 1])) // ➞ true
// console.log(factorChain([2, 4, 6, 7, 12]));// ➞ false
// console.log(factorChain([10, 1]) );//➞ false

// 2 Check if All Values Are True
// Create a function that returns true if all parameters are truthy, and false otherwise.

function allTruthy(...args) {
    return args.every(value => Boolean(value))

}
// console.log(allTruthy(true, true, true) ); //➞ true
// console.log(allTruthy(true, false, true)); // ➞ false
// console.log(allTruthy(5, 4, 3, 2, 1, 0) ); //➞ false

// 3 Is Johnny Making Progress?
// To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he arr this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.

// Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.

function progressDays(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            res += 1
        }

    }
    return res
}
// console.log(progressDays([3, 4, 1, 2])); // ➞ 2
// // There are two progress days, (3->4) and (1->2)
// console.log(progressDays([10, 11, 12, 9, 10]) ); //➞ 3
// console.log(progressDays([6, 5, 4, 3, 2, 9])); // ➞ 1
// console.log(progressDays([9, 9]) );// ➞ 0

// 4 Purge and Organize
// Given an array of numbers, write a function that returns an array that...

// Has all duplicate elements removed.
// Is sorted from least to greatest value.
function uniqueSort(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {

        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i])
        }

        res.sort();
    }
    return res
}
// console.log(uniqueSort([1, 2, 4, 3])); // ➞ [1, 2, 3, 4]
// console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2])); // ➞ [1, 2, 3, 4]
// console.log(uniqueSort([6, 7, 3, 2, 1])); // ➞ [1, 2, 3, 6, 7]

// 5 Find the Mean of All Digits
// Create a function that returns the mean of all digits.


// console.log(mean(42) );//➞ 3
// console.log(mean(12345));// ➞ 3
// console.log(mean(666) );//➞ 6


// 6 Something in the Box?
// Create a function that returns true if an asterisk * is inside a box.


function inBox(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i].includes("*")) {
            return true
        }
    }
    return false
}
// console.log(inBox([
//   "###",
//   "#*#",
//   "###"
// ]) );//➞ true

// console.log(inBox([
//   "####",
//   "#* #",
//   "#  #",
//   "####"
// ]));// ➞ true

// console.log(inBox([
//   "*####",
//   "# #",
//   "#  #*",
//   "####"
// ]));// ➞ false

// console.log(inBox([
//   "#####",
//   "#   #",
//   "#   #",
//   "#   #",
//   "#####"
// ]));// ➞ false


// 7 Capitalize the First Letter of Each Word
// Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.


function makeTitle(str) {
    let words = str.split(" ")
    let res = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            res.push(str[i][0].toUpperCase() + words[i].slice(1).toLowerCase());
        }
    }
    return res.join(" ")
}
// console.log(makeTitle("This is a title")); // ➞ "This Is A Title"
// console.log(makeTitle("capitalize every word")); // ➞ "Capitalize Every Word"
// console.log(makeTitle("I Like Pizza")); // ➞ "I Like Pizza"
// console.log(makeTitle("PIZZA PIZZA PIZZA") ); //➞ "PIZZA PIZZA PIZZA"

// 8Capitalize the Names
// Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.

function capMe(names) {
    let res = [];
    for (let i = 0; i < names.length; i++) {
        res.push(names[i][0].toUpperCase() + names[i].slice(1).toLowerCase());
    }
    return res
}
// console.log(capMe(["mavis", "senaida", "letty"])); // ➞ ["Mavis", "Senaida", "Letty"]
// console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"])); // ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]
// console.log(capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"])); // ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]

//9 Factorize a Number
// Create a function that takes a number as its argument and returns an array of all its factors.

function factorize(n) {
    let res = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            res.push(i)
        }
    }
    return res
}
// console.log(factorize(12)); // ➞ [1, 2, 3, 4, 6, 12]
// console.log(factorize(4) ); //➞ [1, 2, 4]
// console.log(factorize(17)); // ➞ [1, 17]


// 10 Emphasise the Words
// Create a function that returns a capitalized version of the string passed. The first letter of each word in the string should be capitalized while the rest of each word should be lowercase.

function emphasise(str) {
    let words = str.split(" ");
    let res = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            res.push(words[i][0].toUpperCase() + words[i].slice(1).toLowerCase())
        }
    }
    return res.join(" ")
}
// console.log(emphasise("hello world")); // ➞ "Hello World"
// console.log(emphasise("GOOD MORNING")); // ➞ "Good Morning"
// console.log(emphasise("99 red balloons!")); // ➞ "99 Red Balloons!"


// 11Is the Word an Isogram?
// An isogram is a word that has no duplicate letters. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".

function isIsogram(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.includes("is")) {
            return true;
        }
    }
    return false
}
// console.log(isIsogram("Algorism")); // ➞ true
// console.log(isIsogram("PasSword")); // ➞ false
// // Not case sensitive.
// console.log(isIsogram("Consecutive")); // ➞ false

// 12 Remove the Letters ABC
// Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.


function removeABC(str) {
    if (str.length == 0) {
        return "";
    }

    let words = str.split(" ");
    let res = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            res.push(words[i].replace(/[abc]/gi, ""));
        }
    }

    return res.join(" ");
}

// console.log(removeABC("This might be a bit hard")); //➞ "This might e  it hrd"
// console.log(removeABC("hello world!")); //➞ null
// console.log(removeABC("")); //➞ null


