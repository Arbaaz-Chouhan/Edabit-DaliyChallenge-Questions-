// 101 => Making a Countdown 
//Create a function where given the number n to count down from, and some words str, return a console.log(countdown sequence as a string leading up to the words at the end.

// Put a full stop after each number and uppercase and add an exclamation mark to the word. See the examples below for clarification!

function countdown(num, str) {
    let res = [];
    for (let i = 1; i <= num; i++) {
        res.push(i)
    }

    return res.reverse().join(".") + " . " + str.toUpperCase();
}

// console.log(countdown(10, "Blast Off")); // "10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BLAST OFF!"
// console.log(countdown(3, "go")); // "3. 2. 1. GO!"
// console.log(countdown(5, "FIRE")); // "5. 4. 3. 2. 1. FIRE!"

// 102 => Are Letters in the Second String Present in the First?
// Create a function that accepts an array of two strings and checks if all of the letters in the second string are present in the first string.

function letterCheck(arr) {
    const [str1, str2] = arr.map(str => str.toLowerCase());


    for (let char of str2) {
        if (!str1.includes(char)) {
            return false;
        }
    }
    return true
}

// console.log(letterCheck(["trances", "nectar"])); // true
// console.log(letterCheck(["compadres", "DRAPES"])); // true
// console.log(letterCheck(["parses", "parsecs"])); // false

// 103 => Tidy Title and Author Strings
// You have an array of strings, each consisting of a book title and an author's name.

// To illustrate:

// [
//   ["   Death of a Salesman - Arthur Miller    "],
//   ["   Macbeth - William Shakespeare    "],
//   ["    A Separate Peace - John Knowles     "],
//   [" Lord of the Flies - William Golding"],
//   ["A Tale of Two Cities - Charles Dickens"]
// ]
// Create a function that takes an array like the one above and transforms it into the same format as the one below:

// [
//   ["Death of a Salesman", "Arthur Miller"],
//   ["Macbeth", "William Shakespeare"],
//   ["A Separate Peace", "John Knowles"],
//   ["Lord of the Flies", "William Golding"],
//   ["A Tale of Two Cities", "Charles Dickens"]
// ]

function tidyBooks(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes("-")) {
            let [little, author] = arr[i].split("-")
            res.push(little.trim(), author.trim())
        }
    }

    return res
}

// console.log(tidyBooks([
//     "     The Catcher in the Rye - J. D. Salinger    ",
//     "    Brave New World - Aldous Huxley   ",
//     "    Of Mice and Men - John Steinbeck    "
// ]));  //); // [
//   "The Catchr in the Rye", "J. D. Salinger",
//   "Brave New World", "Aldous Huley",
//   "Of Mice and Men", "John Steinbeck"
// ]


// 104 => Hidden Calculator Words
// At school, we used to play with our calculators and send each other console.log(xsecret messages. The trick was to enter a special number and turn the calculator upside-down. LOL ... I mean 707!

// Given a number, create a function that converts it into a word by turning the integer 180 degrees around.

function turnCalc(num) {

    let letter = {
        "1": "I",
        "2": "Z",
        "3": "E",
        "4": "H",
        "5": "S",
        "6": "G",
        "7": "L",
        "8": "B",
        "9": "-",
        "0": "O",

    }
    let result = num.toString().split('').reverse().map(digit => letter[digit]).join('');

    return result;

}

// console.log(turnCalc(707)); //"LOL"
// console.log(turnCalc(5508)); // "BOSS"
// console.log(turnCalc(3045)); // "SHOE"

// 105 => Fruit Juices
// A fruit juice company tags their fruit juices by concatenating the first three letters of the words in a flavor's name and its capacity.

// Create a function that creates the product IDs for the variety of fruit juices.

function getDrinkID(str, ml) {

    let words = str.split(" ");

    let res = str.slice(0, 3).toUpperCase() + ml.slice(0, -2)


    return res
}

// console.log(getDrinkID("apple", "500ml")); // "APP500"
// console.log(getDrinkID("pineapple", "45ml")); // "PIN45"
// console.log(getDrinkID("passion fruit", "750ml")); // "PASFRU750"


// 106 => Find the True Equations
// In this challenge you will be given an array containing equations, with each equation written as a string. Here's an example:

// ["1+1=2", "2+2=3", "5*5=10", "3/3=1"]
// If you do the math, you'll see that the equations "1+1=2" and "3/3=1" are actually true while "2+2=3" and "5*5=10" are false nonsense.

// Write a function which, given an array of equations as above, returns only the true equations. For instance, for the example above the output should be:

// ["1+1=2", "3/3=1"]


function trueEquations(arr) {
    let result = [];

    for (let equation of arr) {
        let [left, right] = equation.split('=');

        let evaluatedLeft = eval(left);

        let rightNumber = Number(right);


        if (evaluatedLeft === rightNumber) {
            result.push(equation);
        }
    }

    return result;
}

// console.log(trueEquations(["2*2=4"])); // ["2*2=4"]
// console.log(trueEquations(["1+1=3", "3-1=1"])); // []
// console.log(trueEquations(["1+1=2", "2+2=3", "5*5=10", "3/3=1"])); //["1+1=2", "3/3=1"]



// 107 => Secret Function 4.0
// Create a function based on the input and output. Look at the examples, there is a pattern.

function xsecret(str) {
    return `<${str.slice(0, 1)} class="${str.slice(2)}"></p>`
}

// console.log(xsecret("p.one.two.three"));// `<p class="one two three"></p>`
// console.log(xsecret("p.one"));// `<p class="one"></p>`
// console.log(xsecret("p.four.five"));// `<p class="four five"></p>`


// 108 => Remove Repeated Letters
// Create a function that replaces all consecutively repeated letters in a word with single letters.

function removeRepeats(str) {
    let res = [];
    let words = str.split("");
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== words[i + 1]) {
            res.push(words[i])
        }
    }
    return res.join("")
}

// console.log(removeRepeats("aaabbbccc")); // "abc"
// console.log(removeRepeats("bookkeeper")); // "bokeper"
// console.log(removeRepeats("nananana")); // "nananana"


// 109 => CAPS LOCK DAY is over!
// October 22nd is CAPS LOCK DAY. Apart from that day, every sentence should be lowercase, so write a function to console.log(normalize a sentence.

// Create a function that takes a string. If the string is all uppercase characters, convert it to lowercase and add an exclamation mark at the end.

function normalize(str) {
    let words = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();

    return words
}

// console.log(normalize("CAPS LOCK DAY IS OVER")); // "Caps lock day is over!"
// console.log(normalize("Today is not caps lock day.")); // "Today is not caps lock day."
// console.log(normalize("Let us stay calm, no need to panic.")); // "Let us stay calm, no need to panic.


// 110 => Recursion: Count Vowels
// Write a function that recursively returns the number of vowels in a string.

function countVowels(str) {
    if (str.length === 0) {
        return 0;
    }

    let vowels = "aioueAUOIE";
    let firstChar = str[0];
    let count = vowels.includes(firstChar) ? 1 : 0;

    return count + countVowels(str.slice(1))

}

// console.log(countVowels("apple")); // 2
// console.log(countVowels("cheesecake")); // 5
// console.log(countVowels("bbb")); // 0
// console.log(countVowels("")); // 0


// 111 => Back and Forth
// In a board game, a player may pick up a card with several left or right facing arrows, with the number of arrows indicating the number of tiles to move. The player should move either left or right, depending on the arrow's direction.

// Given an array of the arrows contained on a player's cards, return a singular string of arrowheads that are equivalent to all of the arrowheads.

// Worked Example
//   console.log(calculateArrowhead([">>", "<<", "<<<"])); // "<<<"
// >> means to move 2 places right
// << means to move 2 places left (cancelling out >>)
// <<< means to move a further 3 places left
// overall, the movement can be written as <<<

function calculateArrowhead(arr) {
    let left = 0;
    let right = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let char of arr[i]) {
            if (char === '>') {
                right++;
            } else if (char === '<') {
                left++;
            }
        }
    }

    if (right > left) {
        return '>'.repeat(right - left);
    } else if (left > right) {
        return '<'.repeat(left - right);
    } else {
        return '';
    }
}

// console.log(calculateArrowhead([">>>>", "<", "<", "<"])); // ">"
// console.log(calculateArrowhead([">", "<", ">>", "<", "<<<"])); // "<<"
// console.log(calculateArrowhead([">>>", "<<<"])); // ""


// 112 => Stretched Words
// Write a function that takes a string, and returns a new string with any duplicate consecutive letters removed.

function unstretch(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (res.indexOf(str[i]) === -1) {
            res += str[i];
        }
    }

    return res
}

// console.log(unstretch("ppoeemm")); // "poem"
// console.log(unstretch("wiiiinnnnd")); // "wind"
// console.log(unstretch("ttiiitllleeee")); // "title"
// console.log(unstretch("cccccaaarrrbbonnnnn")); // "carbon"

// 113 => Replace Letters With Position In Alphabet
// Create a function that takes a string and replaces each letter with its appropriate position in the alphabet. "a" is 1, "b" is 2, "c" is 3, etc, etc.

function alphabetIndex(str) {

    let alphabet = {
        "a": "1",
        "b": "2",
        "c": "3",
        "d": "4",
        "e": "5",
        "f": "6",
        "g": "7",
        "h": "8",
        "i": "9",
        "j": "10",
        "k": "11",
        "u": "21",
        "v": "22",
        "w": "23",
        "l": "12",
        "m": "13",
        "n": "14",
        "o": "15",
        "p": "16",
        "q": "17",
        "r": "18",
        "s": "19",
        "t": "20",
        "x": "24",
        "y": "25",
        "z": "26",
    }
    let res = [];

    for (let char of str.toLowerCase()) {
        if (alphabet[char]) {
            res.push(alphabet[char])
        }
    }
    return res.join(" ")
}

// console.log(alphabetIndex("Wow, does that work?")); // "23 15 23 4 15 5 19 20 8 1 20 23 15 18 11"
// console.log(alphabetIndex("The river stole the gods.")); // "20 8 5 18 9 22 5 18 19 20 15 12 5 20 8 5 7 15 4 19"
// console.log(alphabetIndex("We have a lot of rain in June.")); // "23 5 8 1 22 5 1 12 15 20 15 6 18 1 9 14 9 14 10 21 14 5"


// 114 => ASCII Charts (Part 1: Progress Bar)
// Given a character and a value between 0 and 100, return a string that represents a simple progress bar.

// The value represents a percentage.
// The bar should begin and end with "|"
// Repeat the character to fill the bar, with each character equivalent to 10%
// Use spaces to pad the bar to a length of 10 characters.
// A single space comes after the bar, then a message with the % of completion (e.g. "Progress: 60%")
// If the value is 100, the message should be "Completed!".

function progressBar(bar, progress) {
    let value = Math.floor(progress / 10);
    let char = bar.repeat(value);
    let res = `|${char} | Progress : ${progress}%`;
    if (progress === 100) {
        return ` |${char} | Completed!`
    }

    return res
}

// console.log(progressBar("#", 0)); // "|          | Progress: 0%"
// console.log(progressBar("=", 40)); // "|====      | Progress: 40%"
// console.log(progressBar("#", 60)); // "|######    | Progress: 60%"
// console.log(progressBar(">", 100)); // "|>>>>>>>>>>| Completed!"


// 115 => Count the Number of Duplicate Characters
// Create a function that returns the amount of duplicate characters in a string. It will be case sensitive and spaces are included. If there are no  duplicates, return 0.

function duplicates(str) {
    let count = 0;
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (res.indexOf(str[i]) === -1) {
            res += str[i];
        }
        else {
            count++;
        }
    }

    return count
} 

// console.log(duplicates("Hello World!")); // ➞ 3
// // "o" = 2, "l" = 3.
// // "o" is duplicated 1 extra time and "l" is duplicated 2 extra times.
// // Hence 1 + 2 = 3
// console.log(duplicates("foobar")); // ➞ 1
// console.log(duplicates("helicopter"));  // ➞ 1
// console.log(duplicates("birthday")); // ➞ 0
// // If there are no  duplicates, return 0