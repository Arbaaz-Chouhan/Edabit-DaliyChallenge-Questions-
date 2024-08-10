// 41 =>  String Slice-athon
// This challenge has five miniature exercises to help practice proficiency in string slicing. Check the examples below for a visual indicator of how to slice the strings. Good luck!

function challenge1(s) {
    return s.slice(0, 5);
}

function challenge2(s) {
    return s.slice(-5)
}

function challenge3(s) {
    let res = "";
    for (let i = s.length - 1; i >= 0; i--) {
        res += s[i];
    }
    return res
}

function challenge4(s) {
    let res = "";
    for (let i = s.length - 21; i >= 0; i--) {
        res += s[i];
    }
    return res
}

function challenge5(s) {
    let res = "";
    let last7char = s.slice(-7)
    for (let i = 0; i < last7char.length; i++) {
        if ((i + 1) % 2 === 1) {
            res += last7char[i];
        }
    }
    return res
}

// console.log(challenge1("abcdefghijklmnopqrstuvwxyz"
// )); // "abcde"
// // First 5 characters of the string."
// console.log(challenge2("abcdefghijklmnopqrstuvwxyz"
// )); // "vwxyz"
// // // Last 5 characters of the string."
// console.log(challenge3("abcdefghijklmnopqrstuvwxyz"
// )); // "zyxwvutsrqponmlkjihgfedcba"
// // // // All characters in the string from back."
// console.log(challenge4("abcdefghijklmnopqrstuvwxyz"
// )); // "fedcba"
// // // First 6 characters in the string (start with 6th character and go backwards)."
// console.log(challenge5("abcdefghijklmnopqrstuvwxyz"
// )); // "tvxz"
// // // Take last 7 characters and only return odd positioned ones.


// 42 => The Reverser!
// The "Reverser" takes a string as input and returns that string in reverse order, with the opposite case.

function reverse(str) {
    let words = str.split("");
    let res = "";
    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i] === words[i].toUpperCase()) {
            res += words[i].toLowerCase();
        } else if (words[i] === words[i].toLowerCase()) {
            res += words[i].toUpperCase();
        }

    }

    return res
}

//  console.log(reverse("Hello World"));  // "DLROw OLLEh"
//  console.log(reverse("ReVeRsE"));  // "eSrEvEr"
//  console.log(reverse("Radar"));  // "RADAr"


// 43 => Find Unique Character Strings
// Create a function that returns only strings with unique characters.

function filterUnique(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        let isUnique = true;

        for (let j = 0; j < str.length; j++) {
            if (str.indexOf(str[j]) !== str.lastIndexOf(str[j])) {
                isUnique = false;
                break;
            }
        }

        // If the string has all unique characters, add it to the result
        if (isUnique) {
            res.push(str);
        }
    }
    return res;
}



// console.log(filterUnique(["abb", "abc", "abcdb", "aea", "bbb"])); // ["abc"]
// // "b" occurs in "abb" more than once, "b" occurs in "abcdb" more than once, etc.
// console.log(filterUnique(["88", "999", "989", "9988", "9898"])); // []
// console.log(filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"])); // ["ABCDE", "BED", "BAC"]


// 44 => Syncopated Rhythm
// Syncopation means an emphasis on a weak beat of a bar of music; most commonly, beats 2 and 4 (and all other even-numbered beats if applicable).

// You will be given a string representing beats, where hashtags # represent emphasized beats. Create a function that returns true if the line of music contains any syncopation, and false otherwise.

function hasSyncopation(str) {

    if (str.length < 6) {
        return false
    }

    let fourthValue = str[3];
    let sixValue = str[5];

    return fourthValue === sixValue
}

// console.log(hasSyncopation(".#.#.#.#")); // true
// // There are Hash signs in the second, fourth, sixth and
// // eighth positions of the string.
// console.log(hasSyncopation("#.#...#.")); // false
// // There are no Hash signs in the second, fourth, sixth or
// // eighth positions of the string.
// console.log(hasSyncopation("#.#.###.")); // true
// // There is a Hash sign in the sixth position of the string.

// 45 => Measure the Depth of Emptiness
// In this challenge you will receive an input of the form:

// [[[[[[[[[[[]]]]]]]]]]]
// In other words, an array containing an array containing an array containing... an array containing nothing.

// Your goal is to measure the depth of this array, where [] has a depth 1, [[]] has depth of 2, [[[]]] has depth 3, etc.

function measureDepth(arr) {
    if (Array.isArray(arr) && arr.length > 0) {
        // Recursively find the depth of the first element and add 1 for the current level
        return 1 + measureDepth(arr[0]);
    } else {
        // Base case: if it's not an array or an empty array, depth is 1
        return 1;
    }
}
// console.log(measureDepth([])); // 1
// console.log(measureDepth([[]])); // 2
// console.log(measureDepth([[[]]])); // 3
// console.log(measureDepth([[[[[[[[[[[]]]]]]]]]]])); // 11


// 46 => Even or Odd: Which is Greater?
// Create a function to determine if the sum of all the individual even digits are greater than the sum of all the individual odd digits in a string of numbers.

// If the sum of odd numbers is greater than the sum of even numbers, return "Odd is greater than Even".
// If the sum of even numbers is greater than the odd numbers, return "Even is greater than Odd".
// If the sum of both even and odd numbers are equal, return "Even and Odd are the same".

function evenOrOdd(num) {
    let numarr = num.split("");
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < numarr.length; i++) {
        if (numarr[i] % 2 === 0) {
            evenSum += numarr[i];

        } else {
            oddSum += numarr[i];
        }
    }

    return evenSum === oddSum ? "Even and Odd are the same" : "Even is greater than Odd"
}

// console.log(evenOrOdd("22471")); // "Even and Odd are the same"
// console.log(evenOrOdd("213613")); // "Even and Odd are the same"
// console.log(evenOrOdd("23456")); // "Even is greater than Odd"


// 47 => Shhh Be Quiet Function
// Write a function that removes all capital letters from a sentence except the first letter, puts quotation marks around the sentence and adds ", whispered Edabit." at the end.


function shhh(str) {

    let words = str.split(" ");

    let firstWord = words[0].slice(0, 1).toUpperCase() + words[0].slice(1).toLowerCase();

    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].toLowerCase();
    }

    let sentence = [firstWord, ...words.slice(1)].join(" ");
    return `"${sentence}", whispered Edabit.`;
}

// console.log(shhh("HI THERE!")); // '"Hi there!", whispered Edabit.'
// console.log(shhh("tHaT'S Pretty awesOme")); // '"That's pretty awesome", whispered Edabit.'
// console.log(shhh("")); // '"", whispered Edabit.'}


// 48 => Clear the Fog
// Create a function which returns the word in the string, but with all the fog letters removed. However, if the string is clear from fog, return "It's a clear day!".

function clearFog(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (res.indexOf("fog") !== -1 || res.indexOf("Fog") !== -1) {
            res += str[i];
        } else {
            res = "It's a clear day!"
        }
    }
    return res
}

// console.log(clearFog("sky")); // "It's a clear day!"
// console.log(clearFog("fogfogFFfoooofftogffreogffesGgfOogfog")); // "trees"
// console.log(clearFog("fogFogFogffoObirdsanffodthebffoeffoesGGGfOgFog")); // "birdsandthebees"


// 49 => Vowel Sandwich
// Create a function which validates whether a 3 character string is a vowel sandwich. In order to have a valid sandwich, the string must satisfy the following rules:

// The first and last characters must be a consonant.
// The character in the middle must be a vowel.

function sVowelSandwich(str) {
    let vowels = "aioue";
    if (vowels.indexOf(str[0]) === -1 && vowels.indexOf(str[str.length - 1]) === -1) {
        return true
    } else {
        return false
    }
}

// console.log(sVowelSandwich("cat")); // true
// console.log(sVowelSandwich("ear")); // false
// console.log(sVowelSandwich("bake")); // false
// console.log(sVowelSandwich("try")); // false

// 50 => Back to Home?
// Mubashir has started his journey from home. Given a string of directions (N=North, W=West, S=South, E=East), he will walk for one minute in each direction. Determine whether a set of directions will lead him back to the starting position or not.

function backToHome(directions) {
    let North = 0;
    let South = 0;
    let East = 0;
    let West = 0;

    for (let direction of directions) {

        if (direction === "N") {
            North++;
        } else if (direction === "S") {
            South++;
        } else if (direction === "E") {
            East++;
        } else if (direction === "W") {
            West++;
        }
    }
    return North === South && East === West;
}

// console.log(backToHome("EEWE")); // false
// console.log(backToHome("NENESSWW")); // true
// console.log(backToHome("NEESSW")); // false




