// 81 => Vowel Replacer
// Create a function that replaces all the vowels in a string with a specified character.

function replaceVowels(s1, s2) {
    let vowels = "aioveu";
    let res = "";
    for (let i = 0; i < s1.length; i++) {
        if (vowels.includes(s1[i])) {
            res += s2;
        } else {
            res += s1[i]
        }

    }
    return res
}

// console.log(replaceVowels("the aardvark", "#")); // "th# ##rdv#rk"
// console.log(replaceVowels("minnie mouse", "?")); // "m?nn?? m??s?"
// console.log(replaceVowels("shakespeare", "*")); // "sh*k*sp**r*"



// 82 => Word Endings
// Create a function that adds a string ending to each member in an array.

function addEnding(arr, ending) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i] + ending);
    }
    return res
}

// console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly")); // ["cleverly", "meekly", "hurriedly", "nicely"]
// console.log(addEnding(["new", "pander", "scoop"], "er")); // ["newer", "panderer", "scooper"]
// console.log(addEnding(["bend", "sharpen", "mean"], "ing")); // ["bending", "sharpening", "meaning"]

// 83 =>  Return the Four Letter Strings
// Create a function that takes an array of strings and returns the words that are exactly four letters.

function isFourLetters(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 4) {
            res.push(arr[i])
        }
    }
    return res
}

// console.log(isFourLetters(["Tomato", "Potato", "Pair"])); // ["Pair"]
// console.log(isFourLetters(["Kangaroo", "Bear", "Fox"])); // ["Bear"]
// console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"])); // ["Ryan", "Matt"]


// 84 => Semantic Versioning
// In semantic versioning a piece of software can be represented in a format like this example: 6.1.9.

// The first number is the major version.
// The second number is the minor version.
// The third number is the patch (bug fixes).
// Write three separate functions, one to retrieve each element in the semantic versioning specification.

function retrieveMajor(num) {
    return num[0]
}

function retrieveMinor(num) {
    return num[2]
}

function retrievePatch(num) {
    return num[4]
}
// 6.1.9
// console.log(retrieveMajor("6.1.9")); // "6"
// console.log(retrieveMinor("6.1.9")); // "1"
// console.log(retrievePatch("6.1.9")); // "9"
// // 2.1.0
// console.log(retrieveMajor("2.1.0")); // "2"
// console.log(retrieveMinor("2.1.0")); // "1"
// console.log(retrievePatch("2.1.0")); // "0"


// 85 => Alphabet Soup
// Create a function that takes a string and returns a string with its letters in alphabetical order.

function AlphabetSoup(str) {
    return str.split("").sort().join("");
}

// console.log(AlphabetSoup("hello")); // "ehllo"
// console.log(AlphabetSoup("edabit")); // "abdeit"
// console.log(AlphabetSoup("hacker")); // "acehkr"
// console.log(AlphabetSoup("geek")); // "eegk"
// console.log(AlphabetSoup("javascript")); // "aacijprstv"

// 86 => Reverse the Order of a String
// Create a function that takes a string as its argument and returns the string in reversed order.

function reverse(str) {
    return str.split("").reverse().join("");

}


function reverse(str) {
    let arr = str.split("");
    let res = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        res.push(arr[i])

    }

    return res.join("")
}


// console.log(reverse("Hello World")); // "dlroW olleH"
// console.log(reverse("The quick brown fox.")); // ".xof nworb kciuq ehT
// console.log(reverse("Edabit is really helpful!")); // "!lufpleh yllaer si tibadE"

// 86 => Fix the Error: Vowel Edition
// Your friend is trying to write a function that removes all vowels from a string. They write:

// function  removeVowels(str) {
//   return str.replace(/[aeiou]/, "")
// }
// However, it seems that it doesn't work? Fix your friend's code so that it actually does remove all vowels.

function removeVowels(str) {
    let vowels = "aioue";
    let res = ""
    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i])) {
            res += str[i]
        }
    }
    return res
}

// console.log(removeVowels("candy")); // "cndy"
// console.log(removeVowels("hello")); // "hllo"
// // The "e" is removed, but the "o" is still there!
// console.log(removeVowels("apple")); // "pple"


// 87 => Smaller String Number
// Create a function that returns the smaller number.

function smallerNum(n1, n2) {
    // return Math.min(n1,n2)
}

// console.log(smallerNum("21", "44")); // "21"
// console.log(smallerNum("1500", "1")); // "1"
// console.log(smallerNum("5", "5")); // "5"


// 88 => Convert Number to String of Dashes
// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.


function Go(n) {
    let res = "";
    for (let i = 1; i <= n; i++) {
        res += "-";
    }
    return res
}


// console.log(Go(1)); // "-"
// console.log(Go(5)); // "-----"
// console.log(Go(3)); // "---"

// 89 => Reverse and Capitalize
// Create a function that takes a string of lowercase characters and returns that string reversed and in upper case.
function reverseCapitalize(str) {
    return str.toUpperCase()
}

// console.log(reverseCapitalize("abc")); // "CBA"
// console.log(reverseCapitalize("hellothere")); // "EREHTOLLEH"
// console.log(reverseCapitalize("input")); // "TUPNI"

// 90 => Little Dictionary
// Create a function that takes an initial word and extracts any words that start with the same letters as the initial word.

function dictionary(str, arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(str)) {
            res.push(arr[i]);
        }
    }
    return res
}

// console.log(dictionary("bu", ["button", "breakfast", "border"])); // ["button"]
// console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"])); // ["triplet", "tries", trip"]
// console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"])); // []

// 91 => Check if String Ending Matches Second String
// Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.

function checkEnding(str1, str2) {
    for (let i = 0; i < str2.length; i++) {
        if (str1.includes(str2[i])) {
            return true;
        } else {
            return false
        }
    }
}

// console.log(checkEnding("abc", "bc")); // true
// console.log(checkEnding("abc", "d")); // false
// console.log(checkEnding("samurai", "zi")); // false
// console.log(checkEnding("feminine", "nine")); // true
// console.log(checkEnding("convention", "tio")); // false

// 92 => Shuffle the Name
// Create a function that accepts a string (of a person's first and last name) and returns a string with the first and last name swapped.

function nameShuffle(str) {
    return str.split(" ").reverse()
}

// console.log(nameShuffle("Donald Trump")); // "Trump Donald"
// console.log(nameShuffle("Rosie O'Donnell")); // "O'Donnell Rosie"
// console.log(nameShuffle("Seymour Butts")); // "Butts Seymour"


// 93 => Check if the Same Case
// Create a function that returns true if an input string contains only uppercase or only lowercase letters.

function sameCase(str) {
    let allUpperCase = true;
    let allLowerCase = true;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i].toUpperCase()) {
            allUpperCase = false
        }else if( str[i] !== str[i].toLowerCase()){
            allLowerCase = false
        }
         
    
    }

    return allUpperCase || allLowerCase
    
}

// console.log(sameCase("hello")); // true
// console.log(sameCase("HELLO")); // true
// console.log(sameCase("Hello")); // false
// console.log(sameCase("ketcHUp")); // false

//94 => Is the String in Order?
// Create a function that takes a string and returns true or false, depending on whether the characters are in order or not.

function isInOrder(str){
    if(str === str.split("").sort().join("")){
        return true
    }else {
        return false
    }
}

// console.log(isInOrder("abc")); // true
// console.log(isInOrder("edabit")); // false
// console.log(isInOrder("123")); // true
// console.log(isInOrder("xyzz")); // true

// 95 => Is the String a Palindrome?
// A palindrome is a word that is identical forward and backwards.

// mom
// racecar
// kayak
// Given a word, create a function that checks whether it is a palindrome.

function checkPalindrome(str){
    let res  =  [];
    for(let i = str.length-1; i>= 0; i--){
        res += str[i];
    }
    return str ===res 
}

// console.log(checkPalindrome("mom")); // true
// console.log(checkPalindrome("scary")); // false
// console.log(checkPalindrome("reviver")); // true
// console.log(checkPalindrome("stressed")); // false

// 96 =>  Array from Comma-Delimited String
// Write a function that turns a comma-delimited list into an array of strings.

function toArray(str){
    let arr = str.split(" ");
    let res = [];
    for(let i = 0; i<arr.length; i++){
        res.push(arr[i]);
    }
    return res
}

// console.log(toArray("watermelon, raspberry, orange")); // ["watermelon", "raspberry", "orange"]
// console.log(toArray("x1, x2, x3, x4, x5")); // ["x1", "x2", "x3", "x4", "x5"]
// console.log(toArray("a, b, c, d")); // ["a", "b", "c", "d"]
// console.log(toArray("")); // []


// 98 =>  Edaaaaabit
// Write a function that takes an integer and returns a string with the given number of "a"s in Edabit.

function howManyTimes(n){
let res ="Ed";
for(let i = 0; i<=n; i++){
    res += "a";

}
return res + "bit";
}

// console.log(howManyTimes(5) ); //"Edaaaaabit"
// console.log(howManyTimes(0) ); //"Edbit"
// console.log(howManyTimes(12)); // "Edaaaaaaaaaaaabit"

// 99 => Repeating Letters N Times
// Create a function that repeats each character in a string n times.

function repeat(str,n){
    let res = "";
    for(let i = 0; i<str.length; i++){
    for(let j = 0; j<=n; j++){
        res += str[i]
    }
    }
    return res
}

// console.log(repeat("mice", 5) ); //"mmmmmiiiiiccccceeeee"
// console.log(repeat("hello", 3)); // "hhheeellllllooo"
// console.log(repeat("stop", 1) ); //"stop"

// 100 => The Full Length of a Google
// Google's logo can be stretched depending on how many pages it lets you skip forward to.

// Image of Goooooooooogle

// Let's say we wanted to change the number of pages that Google could skip to. Create a function where given a number of pages n, return the word "Google" but with the correct number of "o"s.

function googlify(n){
    let res = "G";
    for(let i = 0; i<=n; i++){
        res += "o";
    }

    return res +"gle"
}

// console.log(googlify(10)); // "Goooooooooogle"
// console.log(googlify(23)); // "Gooooooooooooooooooooooogle"
// console.log(googlify(2) ); //"Google"
// console.log(googlify(-2)); // "invalid"
