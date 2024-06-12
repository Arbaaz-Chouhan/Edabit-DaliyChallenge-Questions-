// 1 Fruit Juices
// A fruit juice company tags their fruit juices by concatenating the first three letters of the str in a flavor's name and its capacity.

// Create a function that creates the product IDs for the variety of fruit juices.

function getDrinkID(flavor, ml) {
    let res = " ";
    for (let i = 0; i < flavor.length; i++) {

        res = flavor.slice(0, 3);
        let currentEle = parseInt(ml)

        if (Number.isNaN(currentEle) === false) {
            res += currentEle;
        }
    }

    return res.toUpperCase()
}
// console.log(getDrinkID("apple", "500ml")); // ➞ "APP500"
// console.log(getDrinkID("pineapple", "45ml")); // ➞ "PIN45"
// console.log(getDrinkID("passion fruit", "750ml")); // ➞ "PASFRU750"

// 2 Fibonacci Sequence
// The Fibonacci Sequence is the sequence of numbers (Fibonacci Numbers) whose sum is the two preceding numbers (e.g. 0, 1, 1, 2, 3, etc). Using 0 and 1 as the starting values, create a function that returns an array containing all of the Fibonacci numbers less than 255.

// On generating a Fibonacci number where input is the two preceding values starting from 0 and 1 [0, 1, ...].
function fibonacciSequence(a, b) {
    return a + b
}

// console.log(fibonacciSequence(0, 1)); // ➞ 1
// console.log(fibonacciSequence(1, 1)); // ➞ 2
// console.log(fibonacciSequence(1, 2)); // ➞ 3

// 3 Hall Monitor
// A floor plan is arranged as follows:

// Four rooms, which all lead into the hallway.
// It's impossible to move between rooms without first going into the hallway.
// Room

// Create a function which validates whether the path between rooms is possible. The hallway will be given as the letter 'H'.

function possiblePath(arr) {
    let countH = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "H") {
            countH++;
        }

    }
    return countH >= 2
}
// console.log(possiblePath([1, "H", 2, "H", 3, "H", 4])); // ➞ true
// console.log(possiblePath(["H", 3, "H"])); // ➞ true
// console.log(possiblePath([1, 2, "H", 3])); // ➞ false


// 4 Remove Repeated Letters
// Create a function that replaces all consecutively repeated letters in a word with single letters.

function removeRepeats(str) {
    let res = "";

    for (let i = 0; i < str.length; i++) {
        if (res.indexOf(str[i]) === -1) {
            res += str[i];
        }
    }
    return res
}

// console.log(removeRepeats("aaabbbccc") ); //➞ "abc"
// console.log(removeRepeats("bookkeeper")); // ➞ "bokeper"
// console.log(removeRepeats("nananana")); // ➞) "nananana"


// 5 Burglary Series (02): Most Valuable Item
// You call your spouse to inform his/her most precious item is gone! Given an object of stolen items, return the most expensive item on the list.


function mostExpensiveItem(obj) {

}
// console.log(mostExpensiveItem({
//   piano: 2000,
// })); // ➞ "piano"

// console.log(mostExpensiveItem({
//   tv: 30,
//   skate: 20,
// })); // ➞ "tv"

// console.log(mostExpensiveItem({
//   tv: 30,
//   skate: 20,
//   stereo: 50,
// })); // ➞ "stereo"


// 6 Musical Cadences
// In music, cadences act as punctuation in musical phrases, and help to mark the end of phrases. Cadences are the two chords at the end of a phrase. The different cadences are as follows:

// V followed by I is a Perfect Cadence
// IV followed by I is a Plagal Cadence
// V followed by Any chord other than I is an Interrupted Cadence
// Any chord followed by V is an Imperfect Cadence
// Create a function where given a chord progression as an array, return the type of cadence the phrase ends on.

function findCadence(chords) {
    let res = " ";
    for (let i = 0; i < chords.length; i++) {
        if (chords[i] === "I" && chords[i + 1] === "IV") {
            res = "imperfect"
        } else if (chords[i] === "ii" && chords[i + 1] === "V") {
            res = "perfect"
        } else if (chords[i] === "I" && chords[i + 1] === "V") {
            res = "interrupted"
        }
    }
    return res.trim()
}
// console.log(findCadence(["I", "IV", "V"])); // ➞ "imperfect"
// console.log(findCadence(["ii", "V", "I"])); // ➞ "perfect"
// console.log(findCadence(["I", "IV", "I", "V", "vi"])); // ➞ "interrupted"

// 7 Stretched Words
// Write a function that takes a string, and returns a new string with any duplicate consecutive letters removed.

function xunstretch(str) {
    let res = " ";
    for (let i = 0; i < str.length; i++) {

        if (res.indexOf(str[i]) === -1) {
            res += str[i];

        }
    }
    return res;
}
// console.log(xunstretch("ppoeemm")); //➞ "poem"
// console.log(xunstretch("wiiiinnnnd")); // ➞ "wind"
// console.log(xunstretch("ttiiitllleeee")); // ➞ "title"
// console.log(xunstretch("cccccaaarrrbbonnnnn")); // ➞ "carbon"

// 8 Sum of Digits Between Two Numbers
// Create a function that sums the total number of digits between two numbers, inclusive. For example, between the numbers 19 and 22 we have:

// 19, 20, 21, 22
// (1 + 9) + (2 + 0) + (2 + 1) + (2 + 2) = 19
function sumDigits(start, end) {

    return start + end
}
// console.log(sumDigits(7, 8) );  // ➞ 15
// console.log(sumDigits(17, 20));  //  ➞ 29
// console.log(sumDigits(10, 12));  //  ➞ 6

// 9 Counting Adverbs
// Create a function that counts the number of adverbs in a sentence. An adverb is a word that ends with ly.

function countAdverbs(sentence) {
    let words = sentence.split(" ");
    let countWords = 0;
    for (let i = 0; i < words.length; i++) {

        if (words[i].includes("ly")) {
            countWords++;
        }
    }
    return countWords
}
// console.log(countAdverbs("She ran hurriedly towards the stadium.")); // ➞ 1
// console.log(countAdverbs("She ate the lasagna heartily and noisily.")); // ➞ 2
// console.log(countAdverbs("He hates potatoes.")); // ➞ 0
// console.log(countAdverbs("He was happily, crazily, foolishly over the moon.")); // ➞ 3

// 10 Mumbling Challenge
// Create a function that takes a string str and modifies the given string as per the below examples:

function mumbling(str) {
    let res = " ";
    for (let i = 0; i < str.length; i++) {
        res += str[i].toUpperCase();
        for (let j = 1; j <= i; j++) {
            res += str[i].toLowerCase();
        }

        if (i < str.length - 1) {
            res += "-"
        }
    }

    return res
}
// console.log(mumbling("MubAshIr")); // ➞ "M-Uu-Bbb-Aaaa-Sssss-Hhhhhh-Iiiiiii-Rrrrrrrr"
// console.log(mumbling("maTT")); // ➞ "M-Aa-Ttt-Tttt"
// console.log(mumbling("EdaBit")); // ➞ "E-Dd-Aaa-Bbbb-Iiiii-Tttttt"

// 11 Count the Number of Duplicate Characters
// Create a function that returns the amount of duplicate characters in a string. It will be case sensitive and spaces are included. If there are no console.log(duplicates, return 0.

function duplicates(str) {
    let seenChars = [];
    let count = 0;
   
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seenChars.indexOf(char) === -1) {
            seenChars.push(char);
        } else {
            count++;
        }
    }
  
    return count;
}
// console.log(duplicates("Hello World!")); // ➞ 3
// // "o" = 2, "l" = 3.
// // "o" is duplicated 1 extra time and "l" is duplicated 2 extra times.
// // Hence 1 + 2 = 3
// console.log(duplicates("foobar")); // ➞ 1
// console.log(duplicates("helicopter")); // ➞ 1
// console.log(duplicates("birthday")); // ➞ 0
// // If there are no console.log(duplicates, return 0


// 12 Reversible Inclusive List Ranges
// Write a function that, given the start and end values, returns an array containing all the numbers inclusive to that range. See examples below.

function reversibleInclusiveList(start, end) {
    let res = [];
    for (let i = start; i <= end; i++) {
        res.push(i);
    }
    for (let j = start; j >= end; j--) {
        res.push(j)
    }

    return res

}
// console.log(reversibleInclusiveList(1, 5));// ➞ [1, 2, 3, 4, 5]
// console.log(reversibleInclusiveList(2, 8));// ➞ [2, 3, 4, 5, 6, 7, 8]
// console.log(reversibleInclusiveList(10, 20));// ➞[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// console.log(reversibleInclusiveList(24, 17));// ➞[24, 23, 22, 21, 20, 19, 18, 17]

// 13 Accumulating Array
// Create a function that takes in an array and returns an array of the accumulating sum.

function accumulatingArray(arr) {
    let res = 0;
    let countNumber = [];
    for (let i = 0; i < arr.length; i++) {
        res += arr[i]
        countNumber.push(res)

    }
    return countNumber
}
// console.log(accumulatingArray([1, 2, 3, 4])); // ➞ [1, 3, 6, 10]
// // [1, 3, 6, 10] can be written as  [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4]
// console.log(accumulatingArray([1, 5, 7])); // ➞ [1, 6, 13]
// console.log(accumulatingArray([1, 0, 1, 0, 1]) ); //➞ [1, 1, 2, 2, 3]
// console.log(accumulatingArray([])); // ➞ []

// 14 Product of All Other Numbers
// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
// Create a function that takes an array of integers and returns an array of the products.

function getProducts(arr) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        res[i] = 1;
        for (var j = 0; j < arr.length; j++) {
            if (i !== j) {
                res[i] *= arr[j];
            }
        }
    }
    return res;
}
// console.log(getProducts([1, 7, 3, 4]) ); // ➞[84, 12, 28, 21]
// console.log(getProducts([1, 2, 6, 5, 9])); //➞ [540, 270, 90, 108, 60]
// console.log(getProducts([1, 2, 3, 0, 5])); //➞ [0, 0, 0, 30, 0]


// 15 Merge Two Arrays
// Create a function that takes two arrays and combines them by alternatingly taking elements from each array in turn.

// The arrays may be of different lengths, with at least one character / digit.
// The first array will contain string characters (lowercase, a-z).
// The second array will contain integers (all positive).
function mergeArrays(arr1, arr2) {
    let res = [];
    let max = Math.max(arr1.length, arr2.length)
    for (let i = arr1; i < max; i++) {
        if (i < arr1.length) {
            res.push(arr1[i]);
        }
        if (i < arr2.length) {
            res.push(arr2[i]);
        }
    }
    return res
}
// console.log(mergeArrays(["f", "d", "w", "t"], [5, 3, 7, 8]));
// //➞ ["f", 5, "d", 3, "w", 7, "t", 8]
// console.log(mergeArrays([1, 2, 3], ["a", "b", "c", "d", "e", "f"]));
// //➞ [1, "a", 2, "b", 3, "c", "d", "e", "f"]
// console.log(mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]));
//➞ ["a", 1, "b", 2, "c", 3, "d", 4, "e", 5]
