// 81 => Functioninator 8000
// Create a function that takes a single word string and does the following:

// Concatenates inator to the end if the word ends with a consonant otherwise, concatenate -inator instead.

// Adds the word length of the original word to the end, supplied with '000'.

// The examples should make this clear.

function inatorInator(str) {

    const vowels = "aeiouAEIOU";
    const lastChar = str[str.length - 1];

    if (vowels.includes(lastChar)) {
        str += "-inator" + " " + str.length + "000";

    } else {
        str += "inator" + " " + str.length + "000";


    }


    return str;
}

// console.log(inatorInator("Shrink")); "Shrinkinator 6000"
// console.log(inatorInator("Doom")); "Doominator 4000"
// console.log(inatorInator("EvilClone")); "EvilClone-inator 9000"

// 82 => Valid Variable Names
// When creating variables, the variable name must always start with a letter and cannot contain spaces, though numbers and underscores are allowed to be contained in it also.

// Create a function which returns true if a given variable name is valid, otherwise return false.

function variableValid(str) {
    if (!((str[0] >= 'a' && str[0] <= 'z') || (str[0] >= 'A' && str[0] <= 'Z'))) {
        return false;
    }
    for (let i = 1; i < str.length; i++) {
        if (!((str[i] >= 'a' && str[i] <= 'z') ||
            (str[i] >= 'A' && str[i] <= 'Z') ||
            (str[i] >= '0' && str[i] <= '9') ||
            str[i] === '_')) {
            return false;
        }
    }

    return true;
}

// console.log(variableValid("result")); // true
// console.log(variableValid("odd_nums")); // true
// console.log(variableValid("2TimesN")); // false

// 83  => Capitalize the Last Letter
// Create a function that capitalizes the last letter of every word.

function capLast(str) {
    let words = str.split(" ");
    let res = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        res.push(word.slice(0, -1) + word[word.length - 1].toUpperCase());

    }

    return res.join(" ");
}

// console.log(capLast("hello")); // "hellO"
// console.log(capLast("My Name Is Edabit")); // "MY NamE IS EdabiT"
// console.log(capLast("HELp THe LASt LETTERs CAPITALISe")); // "HELP THE LAST LETTERS CAPITALISE"

// 84  => Change Every Letter to the Next Letter
// Write a function that changes every letter to the next letter:

// "a" becomes "b"
// "b" becomes "c"
// "d" becomes "e"
// and so on ...

function move(str) {
    let res = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];


        if (char >= 'a' && char <= 'z') {
            if (char === 'z') {
                res += 'a'; // Wrap around to 'a'

            } else {
                res += String.fromCharCode(char.charCodeAt(0) + 1);

            }
        }

        else if (char >= 'A' && char <= 'Z') {
            if (char === 'Z') {
                res += 'A'; // Wrap around to 'A'
            } else {
                res += String.fromCharCode(char.charCodeAt(0) + 1);
            }
        }

        else {
            res += char;
        }
    }

    return res;
}

// console.log(move("hello")); // "ifmmp"
// console.log(move("bye")); // "czf"
// console.log(move("welcome")); // "xfmdpnf"



//  85  => Calculate the Shortest Distance Between Two Points
//  Create a function that takes a string of four numbers. These numbers represent two separate points on a graph known as the x-axis (horizontal axis) and y-axis (vertical axis).

//  The order of coordinates in the string corresponds as follows:

//  "x1,y1,x2,y2"
//  Calculate the distance between x and y.

function shortestDistance(num) {
    let numbers = num.split(',').map(Number);

    // Extract coordinates
    let x1 = numbers[0];
    let y1 = numbers[1];
    let x2 = numbers[2];
    let y2 = numbers[3];


    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    return distance.toFixed(0);
}


// console.log(shortestDistance("1,1,2,1")); // 1
// console.log(shortestDistance("1,1,3,1")); // 2
// console.log(shortestDistance("-5,1,3,1")); // 8
// console.log(shortestDistance("-5,2,3,1")); // 8.06


// 86 => Single Occurrence
// Create a function that, given a string str, finds a letter that has a single occurrence. Return the letter in uppercase. If the input is empty, return an empty string "".

function singleOccurrence(str) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (res[char] === -1) {
            res.push(char.toUpperCase())
        }
    }

    return res
}

// console.log(singleOccurrence("EFFEAABbc")); // "C"
// console.log(singleOccurrence("AAAAVNNNNSS")); // "V"
// console.log(singleOccurrence("S")); // "S"


// 87 => Word Nests
// A word nest is created by taking a starting word, and generating a new string by placing the word inside itself. This process is then repeated.

// Nesting 3 times with the word "incredible":

// start  = incredible
// first  = incre|incredible|dible
// second = increin|incredible|credibledible
// third  = increinincr|incredible|ediblecredibledible
// The final nest is "increinincrincredibleediblecredibledible" (depth = 3).

// Given a starting word and the final word nest, return the depth of the word nest.

function wordNest(startWord, finalWord) {
    let depth = 0;
    let index = finalWord.indexOf(startWord);

    while (index !== -1) {

        finalWord = finalWord.slice(0, index) + finalWord.slice(index + startWord.length);
        depth++;

        index = finalWord.indexOf(startWord);
    }

    return depth - 1
}

// console.log(wordNest("floor", "floor")); // 0
// console.log(wordNest("code", "cocodccococodededeodeede")); // 5
// console.log(wordNest("incredible", "increinincrincredibleediblecredibledible")); // 3


// 88 => Abbreviating a Sentence
// Create a function which takes a sentence and returns its abbreviation. Get all of the words over or equal to n characters in length and return the first letter of each, capitalised and overall returned as a single string.

function abbreviate(str, n = 4) {
    let words = str.split(" ");
    let res = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= n) {
            res += words[i][0].toUpperCase()
        }


    }

    return res
}

//  console.log(abbreviate("do it yourself",2 )); // "DIY"
//  console.log(abbreviate("do it yourself", 2)); // "DIY"
// // "do" and "it" are included because the second parameter specified that word lengths 2 are allowed.
//  console.log(abbreviate("attention AND deficit OR hyperactivity THE disorder")); // "ADHD"
// // Words below the default 4 characters are not included in the abbreviation.
//  console.log(abbreviate("the acronym of long word lengths", 5)); // "AL"
// // "acronym" and "lengths" have 5 or more characters.


// 89 => Compounding Letters
// Create a function that takes a string and returns a new string with each new character accumulating by +1. Separate each set with a dash.

function accum(str) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        res.push(str[i].toUpperCase() + str[i].repeat(i).toLowerCase());


    }
    return res.join("-")
}

// console.log(accum("abcd")); // "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt")); // "C-Ww-Aaa-Tttt"


// 90 => Numbers to Objects
// Mubashir needs your help in a simple task.

// Given an array of numbers arr:

// Create an object for each given number.
// The object key will be the number converted to a string.
// The value will be the corresponding character code converted to a string (check ASCII table).
// Return an array of the resulting objects.

function numObj(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];
        let AscllCode = String.fromCharCode(arr[i]);
        let obj = {};
        obj[number] = AscllCode;
        res.push(obj)
    }

    return res
}

// console.log(numObj([118, 117, 120])); // [{'118':'v'}, {'117':'u'}, {'120':'x'}]
// console.log(numObj([101, 121, 110, 113, 103])); // [{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'103':'g'}]
// console.log(numObj([118, 103, 110])); // [{"118":"v"}, {"103":"g"}, {"110":"n"}]


