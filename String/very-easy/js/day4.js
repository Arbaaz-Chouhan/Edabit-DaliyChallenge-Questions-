// 47 => City School Creating IDS
// Many IDS (for emails or Google ID) are created using the person's name.

// Create a function that will return a four-character ID using the person's first name and last name. The first character will be the first letter of the first name but in lowercase. The next three characters will be the first three characters of the last name, but the first letter will be capitalized and the other two will be in lower case.

function createID(s1, s2) {
    return s1[0].toLowerCase() + s2[0].toUpperCase() + s2[1].toLowerCase() + s2[2].toLowerCase();

}

// console.log(createID("mary", "lamb")); // "mLam"
// console.log(createID("John", "SMITH")); // "jSmi"
// console.log(createID("mary", "smith")); // "mSmi"

// 48  => The Study of Wumbology
// Create a function that flips M's to W's (all uppercase).

function wumbo(str) {
    return str.replace("M", "W")
}

// console.log(wumbo("I LOVE MAKING CHALLENGES")); // "I LOVE WAKING CHALLENGES"
// console.log(wumbo("MEET ME IN WARSAW")); // "WEET WE IN WARSAW"
// console.log(wumbo("WUMBOLOGY")); // "WUWBOLOGY"

// 48 =>  Scottish Screaming
// A strong Scottish accent makes every vowel similar to an "e", so you should replace every vowel with an "e". Additionally, it is being screamed, so it should be in block capitals.

// Create a function that takes a string and returns a string.

function toScottishScreaming(str) {
    return str.toUpperCase();
}

// console.log(toScottishScreaming("hello world")); // "HELLE WERLD"
// console.log(toScottishScreaming("Mr. Fox was very naughty")); // "MR. FEX WES VERY NEEGHTY"
// console.log(toScottishScreaming("Butterflies are beautiful!")); // "BETTERFLEES ERE BEEETEFEL!"

// 49 => Is the Water Boiling?
// Create a function that determines if the temp of the water is considered boiling or not. temp will be measured in Fahrenheit and Celsius.


// console.log(isBoiling("212F")); // true
// console.log(isBoiling("100C")); // true
// console.log(isBoiling("0F")); // false

// 50 =>  Filter Strings from Array
// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

function filterArray(arr) {
    return arr.filter(num => Number(num));
}

function filterArray(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res
}

// console.log(filterArray([1, 2, 3, "a", "b", 4])); // [1, 2, 3, 4]
// console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"])); // [0, 1729]
// console.log(filterArray(["Nothing", "here"])); // []


// 51 => Height of an Equilateral Triangle
// Create a function that takes the length of the side of an equilateral triangle in centimeters and returns the  height of the triangle in millimeters.


//  console.log(height(2)); // 17.3 mm
//  console.log(height(5)); // 43.3 mm
//  console.log(height(6.2)); // 53.7 mm


// 52 => Buggy Code (Part 6)
// Mubashir wants to remove numbers from a given string!

// Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

function removeNumbers(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (!parseInt(str[i])) {
            res += str[i];
        }
    }
    return res
}

// console.log(removeNumbers("mubashir1")); // "mubashir"
// console.log(removeNumbers("12ma23tt")); // "matt"
// console.log(removeNumbers("e1d2a3b4i5t6")); // "edabit"

// 53 => True Ones, False Zeros
// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

function integerBoolean(str) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "1") {
            res.push(true);
        } else if (str[i] === "0") {
            res.push(false);

        }

    }
    return res
}

// console.log(integerBoolean("100101")); // [true, false, false, true, false, true]
// console.log(integerBoolean("10")); // [true, false]
// console.log(integerBoolean("001")); // [false, false, true]


// 54 => YouTube Upload Count
// You are given an array of dates in the format Dec 11 and a monthin the format Dec as arguments. Each date represents a video that was uploaded on that day. Return the number of uploads for a given month.


function uploadCount(data, month) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].includes(month)) {
            count++;
        }
    }
    return count;
}

function uploadCount(data, month) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].startsWith(month)) {
            count++;
        }
    }
    return count;
}

// console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Sept")); // 2
// console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Oct")); //1


// 55 => The Forbidden Letter
// Given a letter and an array of words, return whether the letter does not appear in any of the words.

function forbiddenLetter(str, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].includes(str)) {
            return true;
        } else {
            return false
        }
    }

    return true
}

// console.log(forbiddenLetter("r", ["rock", "paper", "scissors"])); // false
// console.log(forbiddenLetter("a", ["spoon", "fork", "knife"])); // true
// console.log(forbiddenLetter("m", [])); // true

