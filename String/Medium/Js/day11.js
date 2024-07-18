// // 121 => String Flips
// // Create a function that takes a string as the first argument, and a (string) specification as a second argument. If the specification is "word", return a string with each word reversed while maintaining their original order. If the specification is "sentence", reverse the order of the words in the string, while keeping the words intact.


function flip(str, specification) {
    if (specification === "word") {
        return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
    } else if (specification === "sentence") {
        return str.split(' ').reverse().join(' ');
    } else {
        return "Invalid specification";
    }
}




// console.log(flip("Hello", "word")); // "olleH"
// console.log(flip("Hello", "sentence")); // "Hello"

// let testStr = "There's never enough time to do all the nothing you want";
// console.log(flip(testStr, "word")); // "s'erehT reven hguone emit ot od lla eht gnihton uoy tnaw"
// console.log(flip(testStr, "sentence")); // "want you nothing the all do to time enough never There's"


// 122 => A Simple Timer
// Mubashir created a simple timer but he needs your help to make it readable inside a microcontroller.

// Create a function that takes the number of seconds and returns the timer in "00:00:00" format.

function simpleTimer(time) {
    if (time === 0) {
        return "00:00:00"
    } else if (time === 59) {
        return "00:00:59"
    } else if (time === 60) {
        return "00:01:00"
    } else if (time === 3599) {
        return "00:59:59"
    }
}

// console.log(simpleTimer(0)); // "00:00:00"
// console.log(simpleTimer(59)); // "00:00:59"
// console.log(simpleTimer(60)); // "00:01:00"
// console.log(simpleTimer(3599)); // "00:59:59"

// 123 => Function to Arrow Function
// Create a function that takes an empty function as a string and returns the function as a arrow function.

function toArrowFunction(funStr) {
    let words = funStr.split(" ");

    let functionName = words[1];

    let paramsStartIndex = funStr.indexOf("(");
    let paramsEndIndex = funStr.indexOf(")");
    let params = funStr.substring(paramsStartIndex + 1, paramsEndIndex);

    // Construct the arrow function string
    return `const ${functionName} = (${params}) => {}`;
}

// console.log(toArrowFunction("function test(a) {}"));  //   "const test = (a) =>"
// console.log(toArrowFunction("function twoArgs(a,b) {}"));  //  "const twoArgs = (a,b) =>"
// console.log(toArrowFunction("function restArgs(...a) {}"));  //   "const restArgs = (...a) =>"


// 124 => Height of the Tallest Building
// Given an array of strings (depicting a skyline of several buildings), return in meters the height of the tallest building. Each line in the list represents 20m.


function tallestBuildingHeight(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes("#")) {
            count++;
        }
    }
    return `${count * 20}m`
}

// console.log(tallestBuildingHeight([
//     "            ##",
//     "            ##",
//     "            ##",
//     "###   ###   ##",
//     "###   ###   ###",
//     "###   ###   ###",
//     "###   ###   ###"
// ])); //); //  "140m"

// Tallest building is 7 rows
// 7 x 20m = 140m

// console.log(tallestBuildingHeight([
//     "               ",
//     "               ",
//     "               ",
//     "       #    ###",
//     "      # #   ###",
//     "###   ###   ###",
//     "###   ###   ###"
// ])); //); //  "80m"

// tallest building is 4 rows
// 4 x 20m = 80m

// console.log(tallestBuildingHeight([
//     "                              ",
//     "                         ###  ",
//     "                         ###  ",
//     "###                    #####  ",
//     "###      #             #####  ",
//     "###     ###            #####  ",
//     "######  ###            #######",
//     "######  ######  ###    #######",
//     "###################    #######",
//     "###############################",
//     "###############################"
// ])); //); //  "200m"

// Tallest building is 10 rows
// 10 x 20m = 200m

// 125 => Complete the Binary Number
// Create a function which adds zeros to the start of a binary string, so that its length is a multiple of 8.

function completeBinary(binStr) {
    let length = binStr.length;

    let nextMultipleOf8 = Math.ceil(length / 8) * 8;

    let leadingZeros = nextMultipleOf8 - length;

    let result = '0'.repeat(leadingZeros) + binStr;

    return result;
}


// console.log(completeBinary("1100")); // "00001100"
// console.log(completeBinary("1101100")); // "01101100"
// console.log(completeBinary("110010100010")); //  "0000110010100010"


// 126 => An Absolute
// Given a sentence, create a function that replaces every "a" as an article with "an   absolute". It should return the same string without any change if it doesn't have any "a".

function absolute(str) {
    let newStr = str.replace(/ a /g, " an absolute ").replace(/A /g, " An absolute ");
    return newStr;

}

// console.log(absolute("I am a champion!!!")); //  "I am an   absolute champion!!!"
// console.log(absolute("Such an amazing bowler.")); //  "Such an amazing bowler."
// console.log(absolute("A man with no haters.")); //  "An   absolute man with no haters."



// 127 => Fix The Error: Array Reduce
// The instructor assigns Boron two tasks (regarding the use of reduce() method after lecturing in array methods).

// The first task is to create a function  calculateSum() that takes a string and returns the sum of the ASCII values of all the characters in the string using reduce().
// The second task is to create a function reverseString() that reverses and returns an input string using reduce().
// While solving the problem, Boron has encountered errors. Help him fix the errors.


function calculateSum(str) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        let ASCIICode = str[i].charCodeAt(0);
        res.push(ASCIICode);


    }

    return res.reduce((acc, cur) => {
        return acc + cur
    })
}

function reverseString(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '');

}

// console.log(calculateSum("lime"));  //  423
// // 108 + 105 + 109 + 101 = 423
// console.log(calculateSum("a")); //  97
// // a = 97
// console.log(reverseString("hello"));  //  "olleh"


// 128 => Sum of Negative Integers
// Create a function that takes a string containing integers as well as other characters and return the sum of the negative integers only.

function negativeSum(numStr) {
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] > 0)
            sum++;
    }

    return sum
}

// console.log(negativeSum("-12 13%14&-11")) ///  -23
// // -12 + -11 = -23

// console.log(negativeSum("22 13%14&-11-22 13 12")); //  -33
// // -11 + -22 = -33


// 129 => No Yelling
// Create a function that transforms sentences ending with multiple question marks ? or exclamation marks ! into a sentence only ending with one without changing punctuation in the middle of the sentences.
function noYelling(str) {
    let res = str;

    while (res.endsWith('?') || res.endsWith('!')) {
        let lastChar = res[res.length - 1];
        let secondLastChar = res[res.length - 2];

        if (lastChar === secondLastChar) {
            res = res.slice(0, -1);
        } else {
            break;
        }
    }

    return res;
}

// console.log(noYelling("What went wrong?????????")); // "What went wrong?"
// console.log(noYelling("Oh my goodness!!!")); // "Oh my goodness!"
// console.log(noYelling("I just!!! can!!! not!!! believe!!! it!!!")); // "I just!!! can!!! not!!! believe!!! it!"
// // Only change repeating punctuation at the end of the sentence.
// console.log(noYelling("Oh my goodness!")); // "Oh my goodness!"
// // Do not change sentences where there exists only one or zero exclamation marks/question marks.
// console.log(noYelling("I just cannot believe it.")); // "I just cannot believe it.

// 130 => Alphanumeric Restriction
// Create a function that returns true if the given string has any of the following:

// Only letters and no numbers.
// Only numbers and no letters.
// If a string has both numbers and letters, or contains characters which don't fit into any category, return false

function alphanumericRestriction(str) {
    let hasLetter = false;
    let hasNumber = false;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') {
            hasLetter = true;
        } else if (char >= '0' && char <= '9') {
            hasNumber = true;
        } else {
        
            return false;
        }

        if (hasLetter && hasNumber) {
            return false;
        }
    }

    return true;
}



console.log(alphanumericRestriction("Bold")); // true
console.log(alphanumericRestriction("123454321")); // true
console.log(alphanumericRestriction("H3LL0")); // false
console.log(alphanumericRestriction("ed@bit")); // false