// 16 => Hashes and Pluses
// Create a function that returns the number of hashes and pluses in a string.

function hashPlusCount(str) {
    let arr = str.split("");
    let res = [];
    let hashescount = 0;
    let plusescount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes("#")) {
            hashescount++;
        } else if ([i].includes("+")) {
            plusescount++;
        }

    }
    res.push(hashescount, plusescount);


    return res
}

// console.log(hashPlusCount("###+")); // [3, 1]
// console.log(hashPlusCount("##+++#")); // [3, 3]
// console.log(hashPlusCount("#+++#+#++#")); // [4, 6]
// console.log(hashPlusCount("")); // [0, 0]


// 17 => Secret Society
// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

// Create a function that takes in an array of names and returns the name of the secret society.

function societyName(arr) {
    let str = arr.join("");
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            res += str[i];
        }

    }
    return res.split("").sort().join("")
}

function societyName(arr) {
    let res = arr.map(name => name[0])
    return res.sort().join("");
}

// console.log(societyName(["Adam", "Sarah", "Malcolm"]));  //"AMS"
// console.log(societyName(["Harry", "Newt", "Luna", "Cho"])); //"CHLN"
// console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])); //"CJMPRR"

// 18 => Reverse the Case
// Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.

function reverseCase(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            res += str[i].toLowerCase();
        } else if (str[i] === str[i].toLowerCase()) {
            res += str[i].toUpperCase();
        }
    }
    return res
}


function reverseCase(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].includes(str[i].toUpperCase())) {
            res += str[i].toLowerCase();
        } else if (str[i].includes(str[i].toLowerCase())) {
            res += str[i].toUpperCase();
        }
    }
    return res
}

// console.log(reverseCase("Happy Birthday")); // "hAPPY bIRTHDAY"
// console.log(reverseCase("MANY THANKS")); // "many thanks"
// console.log(reverseCase("sPoNtAnEoUs")); // "SpOnTaNeOuS"

// 19 => Check If It's a Title String
// Check if a string title is a title string or not. A title string is one which has all the words in the string start with a upper case letter.

function checkTitle(str) {
    let arr = str.split(" ");
    if (arr[0] === arr[0].toUpperCase()) {
        return true
    }
    return false
}


function checkTitle(str) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            return true
        } else {
            return false
        }
    }
}

function checkTitle(str) {
    let arr = str.split(" ");
    if (arr.includes(arr[0].toUpperCase())) {
        return true
    } else {
        return false
    }
}

// console.log(checkTitle("A Mind Boggling Achievement")); // true 
// console.log(checkTitle("A Simple Java Script Program!")); // true 
// console.log(checkTitle("Water is transparent")); // false

// 20 => Valid Zip Code
// Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code. A valid zip code is as follows:

// Must only contain numbers (no non-digits allowed).
// Must not contain any spaces.
// Must not be greater than 5 digits in length.

function isValid(num){
    if(parseInt(num)  && num.length <= 5){
        return true
    }else {
        return false
    }
}

// console.log(isValid("59001") ); //true
// console.log(isValid("853a7") ); //false
// console.log(isValid("732 32")); // false
// console.log(isValid("393939")); // false
