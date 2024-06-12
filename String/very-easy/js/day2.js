// 16  Name Greeting!
// Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.

const helloName = name => {
    return "Hello" + " " + name;
}

//  console.log(helloName("Gerald")); // "Hello Gerald!"
//  console.log(helloName("Tiffany")); // "Hello Tiffany!"
//  console.log(helloName("Ed")); // "Hello Ed!"



// 17 Convert an Array to a String
// Create a function that takes an array of numbers or letters and returns a string.

function arrayToString(arr) {
    return arr.join("");

}


// console.log(arrayToString([1, 2, 3, 4, 5, 6])); // "123456"
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"])); // "abcdef"
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"])); // "123asdAAAA"


// 18  Find the Index
// Create a function that takes an array and a string as arguments and returns the index of the string.


function findIndex(arr, item) {
    return arr.indexOf(item);
}

// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh")); // 2
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue")); // 1
// console.log(findIndex(["a", "g", "y", "d"], "d")); // 3
// console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")); // 0


// 19 Word Numbers!
// Create a function that returns a number, based on the string provided. Here is a list of all digits:
function word(str) {
    let number = {
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
        "zero": 0,


    }
    return number[str];
}

// console.log( word("one") ); //1
// console.log( word("two") ); //2
// console.log( word("nine")); // 9


// 20 Check String for Spaces
// Create a function that returns true if a string contains any spaces.

function hasSpaces(str) {
    return str.includes(" ")
}

// console.log(hasSpaces("hello")); // false
// console.log(hasSpaces("hello, world")); // true
// console.log(hasSpaces(" ")); // true
// console.log(hasSpaces("")); // false
// console.log(hasSpaces(",./!@#")); // fa


// 21 Is the Last Character an "N"?
// Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

function isLastCharacterN(str) {
    let isLastCharacterN = str.slice(-1);
    if (isLastCharacterN === "n") {
        return true;
    }
    else {
        return false
    }
}

// console.log(isLastCharacterN("Aiden"));  //  true
// console.log(isLastCharacterN("Piet"));  // false
// console.log(isLastCharacterN("Bert"));  // false
// console.log(isLastCharacterN("Dean"));  // true

// 22 Luke, I Am Your ...
// Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

// Person	Relation
// Darth Vader	father
// Leia	sister
// Han	brother in law
// R2D2	droid

function relationToLuke(str) {
    switch (str) {
        case "Darth Vader":
            return "Luke I am your father."

        case "Leia":
            return "Luke, I am your sister."

        case "Han":
            return "Luke, I am your brother in law."
    }
}


function relationToLuke(str) {
    if (str === "Darth Vader") {
        return "Luke, I am your father."
    }
    else if (str === "Leia") {
        return "Luke, I am your sister."
    }
    else if (str === "Han") {
        return "Luke, I am your brother in law."
    }

}
// console.log(relationToLuke("Darth Vader")); // "Luke, I am your father."
// console.log(relationToLuke("Leia")); //  "Luke, I am your sister."
// console.log(relationToLuke("Han")); //  "Luke, I am your brother in law."

//  23  Front 3 - Slice Check Repeat Concatenate
// Create a function that takes a string; we'll say that the front is the first three characters of the string. If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.

function frontThree(str) {
    let res = "";
    for (let i = 0; i < 3; i++) {
        res += str.slice(0, 3);
    }
    return res
}


// console.log(frontThree("Python")); // "PytPytPyt"
// console.log(frontThree("Cucumber")); // "CucCucCuc"
// console.log(frontThree("bioshock")); // "biobiobio"

// 24 Extract City Facts
// Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

// name
// population
// continent
// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

// function cityFacts(obj) {
//     return `Paris has a population of ${obj.population} and is  situated in  ${obj.continent}`
// }

// console.log(cityFacts({
//     name: "Paris",
//     population: "2,140,526",
//     continent: "Europe"
// }))  //  "Paris has a population of 2,140,526 and is situated in Europe"

// console.log(cityFacts({
//     name: "Tokyo",
//     population: "13,929,286",
//     continent: "Asia"
// })) ; // "Tokyo has a population of 13,929,286 and is situated in Asia"


// 25 Is the Word Singular or Plural?
// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

function isPlural(str) {
    let lastchar = str.slice(-1);
    if (lastchar === "s") {
        return true
    } else {
        return false
    }
}

// console.log(isPlural("changes")); // true
// console.log(isPlural("change")); // false
// console.log(isPlural("dudes")); // true
// console.log(isPlural("magic")); // false


// 25 Concatenating First and Last Character of a String
// Create a function that takes a string and returns the concatenated first and last character.

function sfirstLast(str) {
    let firstCharacter = str.slice(0, 1);
    let lastCharacter = str.slice(-1);
    return firstCharacter + lastCharacter
}


function sfirstLast(str) {
    return `${str.slice(0, 1)}${str.slice(-1)}`
}

// console.log(sfirstLast("ganesh")) ; // "gh"
// console.log(sfirstLast("kali")) ; // "ki"
// console.log(sfirstLast("shiva")) ; // "sa"
// console.log(sfirstLast("vishnu")) ; // "vu"
// console.log(sfirstLast("durga")) ; // "da"


// 26 Stuttering Function
// Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.

function stutter(str) {
    return `${str.slice(0, 3)}... ${str.slice(0, 3)}... ${str}`
}

// console.log(stutter("incredible")); // "in... in... incredible?"
// console.log(stutter("enthusiastic")); // "en... en... enthusiastic?"
// console.log(stutter("outstanding")); // "ou... ou... outstanding?" 


//  27 Fraction Greater Than One
// Given a fraction as a string, return whether or not it is greater than 1 when evaluated.

function greaterThanOne(fraction) {
    const [numerator, denominator] = fraction.split('/').map(Number);

    // Check if the fraction is greater than one
    return numerator / denominator > 1;
}

// console.log(greaterThanOne("1/2") ); // false
// console.log(greaterThanOne("7/4") ); // true
// console.log(greaterThanOne("10/10") ); // false


// 28 Array of Strings to Array of Numbers
// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// Example:

// ["1", "3", "3.6"]); // [1, 3, 3.6]

function toNumberArray(arr) {
    return arr.map(num => Number(num))
}


// console.log(toNumberArray(["9.4", "4.2"])); // [9.4, 4.2]
// console.log(toNumberArray(["91", "44"])); // [91, 44]
// console.log(toNumberArray(["9.5", "8.8"])); // [9.5, 8.8]


// 29 Default Mood
// Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".

function moodToday(s) {
    if (s === "happy") {
        return `Today, I am feeling ${s}`
    } else if (s === "sad") {
        return `Today, I am feeling ${s}`
    } else {
        return "Today, I am feeling neutral "
    }
}

// console.log(moodToday("happy")); // "Today, I am feeling happy"
// console.log(moodToday("sad")); // "Today, I am feeling sad"
// console.log(moodToday()); // "Today, I am feeling neutral"


// 30 Count the Syllables
// Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).

function countSyllables(str){
    let count = 0;
    for(let i = 0; i<str.length; i+= 2){
        // let match =  str[i].match(/str[i]/gi);
        if(str[i] === str[i]){
            count++
        }

    }
    return count
}

// console.log(countSyllables("Hehehehehehe")); // 6
// console.log(countSyllables("bobobobobobobobo")); // 8
// console.log(countSyllables("NANANA")); // 3


