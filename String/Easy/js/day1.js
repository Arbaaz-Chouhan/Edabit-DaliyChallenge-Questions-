// 1 => What's Hiding Amongst the Crowd?
// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

function detectWord(str) {
    let arr = str.split("");
    let res = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toLowerCase()) {
            res += arr[i];
        }

    }
    return res
}


// console.log(detectWord("UcUNFYGaFYFYGtNUH")); // "cat"
// console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr")); // "burglar"
// console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")); // "embezzlement"



// 2 => Find the Amount of Potatoes
// Create a function to return the amount of console.log(potatoes there are in a string.

function potatoes(str) {
    let checkword = "potato";
    let count = 0;
    for (let i = 0; i <= str.length - checkword.length; i++) {
        if (str.slice(i, i + checkword.length) === checkword) {
            count++;
        }
    }
    return count
}

// console.log(potatoes("potato")); // 1
// console.log(potatoes("potatopotato")); // 2
// console.log(potatoes("potatoapple")); // 


// 3 => Count Instances of a Character in a String
// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

function charCount(s1, s2) {
    let count = 0;
    for (let i = 0; i < s2.length; i++) {
        if (s1.includes(s2[i])) {
            count++;
        }
    }
    return count
}


function charCount(s1, s2) {
    let count = 0;
    for (let i = 0; i < s2.length; i++) {
        if (s1 === s2[i]) {
            count++;
        }
    }
    return count
}


// console.log(charCount("a", "edabit")); // 1
// console.log(charCount("c", "Chamber of secrets")); // 1
// console.log(charCount("b", "big fat bubble")); // 

// 4 => Incorrect Import Statement
// When importing objects from a module in Python, the syntax usually is as follows:

// from module_name import object
// Given a string of an incorrect import statement, return the fixed string. All import statements will be the wrong way round.

function fixImport(str) {
    let arr = str.split(" ");
    let res = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes("from")) {
            res += arr.slice(i) + " " + arr.slice(0, i)
        }
    }
    return res
}

// console.log(fixImport("import object from module_name")); // "from module_name import object"
// console.log(fixImport("import randint from random")); // "from random import randint"
// console.log(fixImport("import pi from math")); // "from math import pi


// 5 => Error Messages
// Create a function that takes a number as an argument and returns the appropriate error message. You should do this without using the switch or if statements.

// The input error will be 1 to 5:

// 1 >> "Check the fan: e1"
// 2 >> "Emergency stop: e2"
// 3 >> "Pump Error: e3"
// 4 >> "c: e4"
// 5 >> "Temperature Sensor Error: e5"
// For any other value, return 101 (you can use an if statement here).

// function error(n) {
//     switch (n) {
//         case 1:
//           return "Check the fan: e1";
//             break
//         case 2:
//           return  "Emergency stop: e2";
//             break
//         case 3:
//             return "Pump Error: e3";
//             break
//     }
// }

function error(n) {
    if (n === 1) {
        return "Check the fan: e1";
    }
    else if (n === 2) {
        return "Emergency stop: e2";
    }
    else if (n === 3) {
        return "Pump Error: e3";
    }
}

// console.log(error(1)); // "Check the fan: e1"
// console.log(error(2)); // "Emergency stop: e2"
// console.log(error(3)); // "Pump Error: e3"

//  6 => Repeating Letters
// Create a function that takes a string and returns a string in which each character is repeated once.

function doubleChar(str) {
    let arr = str.split("");
    let res = "";
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < 2; j++) {
            res += str[i]
        }
    }
    return res
}

// console.log(doubleChar("String")); // "SSttrriinngg"
// console.log(doubleChar("Hello World!")); // "HHeelllloo  WWoorrlldd!!"
// console.log(doubleChar("1234!_ ")); // "11223344!!__  "


// 7 => Emotify the Sentence
// Create a function that changes specific words into emoticons. Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.

// word	emoticon
// smile	:D
// grin	:)
// sad	:(
// mad	:P

function emotify(str) {
    let arr = str.split(" ");
    let words = ["smile", "grin", "sad", "mad"];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === words[0]) {
            return "Make me :D"
        }
        else if (arr[i] === words[1]) {
            return "Make me :)"
        }
        else if (arr[i] === words[2]) {
            return "Make me :("
        }
    }

}

function emotify(str) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes("smile")) {
            return arr[i].replace("smile", ":D");
        } else if (arr[i].includes("grin")) {
            return arr[i].replace("grin", ":)");
        } else if (arr[i].includes("sad")) {
            return arr[i].replace("sad", ":(")
        }
    }
}

// console.log(emotify("Make me smile")); // "Make me :D"
// console.log(emotify("Make me grin")); // "Make me :)"
// console.log(emotify("Make me sad")); // "Make me :("


// 8 => How Many Vowels?
// Create a function that takes a string and returns the number (count) of vowels contained within it.

function countVowels(str) {
    let vowels = "aioev";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count
}


// console.log(countVowels("Celebration")); // 5
// console.log(countVowels("Palm")); // 1
// console.log(countVowels("Prediction")); // 4

//  9 => Recursion to Repeat a String n Number of Times
// Create a recursive function that takes two parameters and repeats the string n number of times. The first parameter txt is the string to be repeated and the second parameter is the number of times the string is to be repeated.

// String.prototype.repeat() is not allowed

function repetition(text, n) {
    if (n === 0) {
        return " ";
    }
    return text + repetition(text, n - 1)
}

// console.log(repetition("ab", 3)); // "ababab"
// console.log(repetition("kiwi", 1)); // "kiwi"
// console.log(repetition("cherry", 2)); // "cherrycherry"

// 10 => Find the Bomb
// Create a function that finds the word " bomb" in the given string (not case sensitive). If found, return "Duck!!!", otherwise return "There is no  bomb, relax.".

function bomb(str) {
    let arr = str.split(" ");
    let res = " ";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes("bomb")) {
            res += "Duck!!";

        } else if (arr[i].includes("!!!")) {
            res += "There is no  bomb, relax."
        }

    }
    return res
}


function bomb(str) {
    let arr = str.split(" ");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes("bomb.")) {
            return arr[i].replace("bomb.", "Duck!!!")

        } else if (arr[i].includes("bomb?")) {
            return arr[i].replace("bomb?", "Duck!!!")
        }
        else if (arr[i].includes("!!")) {
            return "There is no  bomb, relax."
        }

    }

}

// console.log(bomb("There is a  bomb.")); // "Duck!!!"
// console.log(bomb("Hey, did you think there is a  bomb?")); // "Duck!!!"
// console.log(bomb("This goes boom!!!")); // "There is no  bomb, relax."


// 11 => Remove Every Vowel from a String
// Create a function that takes a string and returns a new string with all vowels removed.

function removeVowels(str){
// let arr =  str.split(" ");
    let vowelslLowercase = "aioueAIOUE";
    let res  = "";
    for(let i = 0; i<str.length; i++){
        if(!vowelslLowercase.includes(str[i]) ){
            
            res +=  str[i]
       
        }
    }
    return res
}


// console.log(removeVowels("I have never seen a thin person drinking Diet Coke.")); // " hv nvr sn  thn prsn drnkng Dt Ck."
// console.log(removeVowels("We're gonna build a wall!")); // "W'r gnn bld  wll!"
// console.log(removeVowels("Happy Thanksgiving to all--even the haters and losers!")); // "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"

