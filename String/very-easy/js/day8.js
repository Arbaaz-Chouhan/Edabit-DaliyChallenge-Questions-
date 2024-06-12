// 101 =>  Get the File Extension
// Write a function that maps files to their extension names.

function getExtension(arr) {

    return arr.map((item) => item.split(".").pop())
}

// console.log(getExtension(["code.html", "code.css"])); // ["html", "css"]
// console.log(getExtension(["project1.jpg", "project1.pdf", "project1.mp3"])); // ["jpg", "pdf", "mp3"]
// console.log(getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"])); // ["rb", "cpp", "py", "js"]


// 102 => Check if a String Contains only Identical Characters
// Write a function that returns true if all characters in a string are identical and false otherwise.

function isIdentical(str) {
    let arr = str.split("")
    for (let i = 0; i < arr.length; i++) {
        if (arr[0] === arr[1]) {
            return true
        }

    }
    return false
}

// no solve 

// console.log(isIdentical("aaaaaa")); // true
// console.log(isIdentical("aabaaa")); // false
// console.log(isIdentical("ccccca")); // false
// console.log(isIdentical("kk")); // true

// 103 =>  Letters Only
// Write a function that removes any non-letters from a string, returning a well-known film title.

function lettersOnly(str) {
    let arr = str.split(" ");
    let words = "abcdefghiklmnopqrsuvxyz";
    let res = "";
    for (let i = 0; i < arr.length; i++) {
        if (words.includes(arr[i].toUpperCase()) || words.includes(arr[i].toLowerCase())) {
            res += arr[i]
        }
        return res
    }
}
// no  solve 

// console.log(lettersOnly("R!=:~0o0./c&}9k`60=y")); // "Rocky"
// console.log(lettersOnly("^,]%4B|@56a![0{2m>b1&4i4")); // "Bambi"
// console.log(lettersOnly("^U)6$22>8p).")); // "Up"


// 104 => Recursion: Reverse a String
// Write a function that reverses a string. Make your function recursive.

function reverse(str) {
    return str.split("").reverse().join("")
}

function reverse(str) {
    let arr = str.split("");
    let res = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        res += str[i]
    }
    return res
}

// console.log(reverse("hello")); // "olleh"
// console.log(reverse("world")); // "dlrow"
// console.log(reverse("a")); // "a"
// console.log(reverse("")); // ""

// 105  => Total Number of Unique Characters
// Given two strings, create a function that returns the total number of unique characters from the combined string.

function countUnique(s1, s2) {
    let str = s1 + s2;;
    let arr = str.split("");
    let res = [];
    let count = 0;;
    for (let i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i])
            count++;
        }
    }
    return count
}

// console.log(countUnique("apple", "play")); // 5
// // "appleplay" has 5 unique characters:
// // "a", "e", "l", "p", "y"
// console.log(countUnique("sore", "zebra")); // 7
// // "sorezebra" has 7 unique characters:
// // "a", "b", "e", "o", "r", "s", "z"
// console.log(countUnique("a", "soup")); // 5


// 106 => Say Hello to Guests
// In this exercise you will have to:

// Take a list of names.
// Add "Hello" to every name.
// Make one big string with all greetings.
// The solution should be one string with a comma in between every "Hello (Name)".

function greetPeople(str) {
    let res = [];
    str.forEach((str) => {
        res.push("Helllo" + " " + str);
    })
    return res.join(", ")
}


function greetPeople(str) {
    return str.map((name) => {
        return "Hello " + name
    }).join(", ")
}

function greetPeople(str) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        res.push("Hello " + str[i])
    }
    return res.join(", ")
}

// console.log(greetPeople(["Joe"])); // "Hello Joe"
// console.log(greetPeople(["Angela", "Joe"])); // "Hello Angela, Hello Joe"
// console.log(greetPeople(["Frank", "Angela", "Joe"])); // "Hello Frank, Hello Angela, Hello Joe"


//  107 => Lexicographically First and Last
// Write a function that returns the lexicographically first and lexicographically last rearrangements of a lowercase string. Output the results in the following manner:

// firstAndLast(string)  [first, last]

function firstAndLast(str) {
    let res = [];
    let sort = str.split("").sort().join("");
    let reverse = sort.split("").reverse().join("");
    res.push(sort, reverse);

    return res
}


// console.log(firstAndLast("marmite")); // ["aeimmrt", "trmmiea"]
// console.log(firstAndLast("bench")); // ["bcehn", "nhecb"]
// console.log(firstAndLast("scoop")); // ["coops", "spooc"]


// 108 => Re-Form the Word
// A word has been split into a left part and a right part. Re-form the word by adding both halves together, changing the first character to an uppercase letter.

function getWord(str1, str2) {
    return str1.slice(0, 1).toUpperCase() + str1.slice(1) + str2
}


function getWord(str1, str2) {
    return str1[str1.length - 4].toUpperCase() + str1.slice(1) + str2
}

// console.log(getWord("seas", "onal")); //"Seasonal"
// console.log(getWord("comp", "lete")); //"Complete"
// console.log(getWord("lang", "uage")); //"Language"