// 31 Char-to-ASCII
// Create a function that returns the ASCII value of the passed in character.

// Examples

function ctoa(char) {
    return char.charCodeAt(0)
}
// console.log(ctoa("A") ); // 65
// console.log(ctoa("m") ); // 109
// console.log(ctoa("[") ); // 91
// console.log(ctoa("\\")); //; // 92

// 32 Reverse Psychology
// For this challenge, you will NOT be given a string. Your task isn't to console.log(add "Do not" before the given string. If there is no given string, you will not return "Do not do anything." Do not check the examples to know how to do this challenge.

function reversePsychology(str) {
    let addCharacter = "Do not" + " ";
    return addCharacter.concat(str)

}

function reversePsychology(str) {
    let addCharacter = "Do not";
    return addCharacter + " " + str
}

// console.log(reversePsychology("wash the dishes")); // "Do not wash the dishes."

// console.log(reversePsychology("eat your lunch")); // "Do not eat your lunch."

// console.log(reversePsychology("go to school")); // "Do not go to school."

// 33 Case Insensitive Comparison
// Write a function that validates whether two strings are identical. Make it case insensitive.

function match(str1, str2) {

    return str1.toLowerCase() === str2.toLowerCase();
}

// console.log(match("hello", "hELLo")); // true
// console.log(match("motive", "emotive")); // false
// console.log(match("venom", "VENOM")); // true
// console.log(match("mask", "mAskinG")); // false


// 34 Repeat String
// Create a function that takes a string txt and a number n and returns the repeated string n number of times.

// If given argument txt is not a string, return Not A String !!

function repeatString(str, n) {
    let res = "";
    for (let i = 1; i <= n; i++) {
        if (typeof str[i] !== "string") {
            return "Not A String !!"
        } else {
            res += str
        }
    }
    return res
}

// console.log(repeatString("Mubashir", 2)); // "MubashirMubashir"

// console.log(repeatString("Matt", 3)); // "MattMattMatt"

// console.log(repeatString(1990, 7)); // "Not A String !!"


// 35 String or Integer?
// Create a function that checks if the argument is an integer or a string. Return "int" if it's an integer and "str" if it's a string.

function intOrString(value) {
    if (typeof value !== "string") {
        return "int";
    } else {
        return "str"
    }
}

// console.log(intOrString(8)); // "int"
// console.log(intOrString("Hello")); // "str"
// console.log(intOrString(9843532)); // "int"


// 36 Hello; Hello World; World
// Write a function that takes an integer and:

// If the number is a multiple of 3, return "Hello".
// If the number is a multiple of 5, return "World".
// If the number is a multiple of both 3 and 5, return "Hello World".

function helloWorld(num) {
    if (num === 3) {
        return "Hello";
    } else if (num === 5) {
        return "Word";
    } else {
        return "Hello World"
    }
}

// console.log(helloWorld(3)); //"Hello"
// console.log(helloWorld(5)); //"World"
// console.log(helloWorld(15)); // "Hello World"


// 37 String to Integer and Vice Versa
// Write two functions:

// toInt() : A function to convert a string to an integer.
// toStr() : A function to convert an integer to a string.

function toInt(num) {
    return String(num)
}


function toStr(num) {
    return Number(num)
}

// console.log(toInt("77") ); // 77
// console.log(toInt("532") ); // 532
// console.log(toStr(77) ); // "77"
// console.log(toStr(532) ); // "532"


// 38 Burrrrrrrp
// Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.

function longBurp(n) {

    let res = "Bu" + "r".repeat(n) + "p";
    return res;
}

function longBurp(n) {
    let res = "Bup"
    for (let i = 1; i <= n; i++) {
        res += "r";
    }
    res += "p"

    return res
}

// console.log(longBurp(3));  // "Burrrp"
// console.log(longBurp(5));  // "Burrrrrp"
// console.log(longBurp(9));  // "Burrrrrrrrrp"


// 39 Spaces Between Each Character
// Create a function that takes a string and returns a string with spaces in between all of the characters.

function spaceMeOut(str) {
    return str.split("").join(" ")

}

// console.log(spaceMeOut("space")); // "s p a c e"
// console.log(spaceMeOut("far out")); // "f a r   o u t"
// console.log(spaceMeOut("elongated musk")); // "e l o n g a t e d   m u s k"


// 40 Amazing Edabit!
// Create a function that takes a string and changes the word amazing to not amazing. Return the string without any change if the word edabit is part of the string.

function amazingEdabit(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[0] === "edabit") {
            return str
        } else {
            return str.replace("is amazing", "is not amazing");
        }
    }
}

// console.log(amazingEdabit("edabit is amazing.")); // "edabit is amazing."
// console.log(amazingEdabit("Mubashir is amazing.")); // "Mubashir is not amazing."
// console.log(amazingEdabit("Infinity is amazing.")); // "Infinity is not amazing."


// 41 Modifying the Last Character
// Create a function which makes the last character of a string repeat n number of times.

function modifyLast(str, n) {
    let res = str;
    for (let i = 1; i < n; i++) {
        res += str.slice(-1);

    }
    return res
}

//  console.log(modifyLast("Hello", 3)); // "Hellooo"
//  console.log(modifyLast("hey", 6)); // "heyyyyyy"
//  console.log(modifyLast("excuse me what?", 5)); // "excuse me what?????"

// 42 Classes For Fetching Information on a Sports Player
// Create a class that takes the following four arguments for a particular football player:

// name
// age
// height
// weight
// Also, create three functions for the class that returns the following strings:

// getAge() returns "name is age age"
// getHeight() returns "name is heightcm"
// getWeight() returns "name weighs weightkg"
// Examples

class Player {
    constructor(name, age, height, weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }

    getAge() {
        return `${this.name} is age ${this.age}`;
    }

    getHeight() {
        return `${this.name} is ${this.height}cm`;
    }

    getWeight() {
        return `${this.name} weighs ${this.weight}kg`;
    }
}

let p1 = new Player("David Jones", 25, 175, 75)

//  console.log(p1.getAge()); // "David Jones is age 25"
//  console.log(p1.getHeight()); // "David Jones is 175cm"
//  console.log(p1.getWeight()); // "David Jones weighs 75kg"


// 43 Raucous Applause
// After an amazing performance, the crowd goes wild! People clap enthusiastically and most claps overlap with each other to create one homogeneous sound.

// An overlapped clap is a clap which starts but doesn't finish, as in "ClaClap" (The first clap is cut short and there are overall 2 claps)

// Given a string of what the overlapping claps sounded like, return how many claps were made in total.

function countClaps(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i]) {
            count += str[i].length
        }
    }
    return count
}

// console.log(countClaps("ClaClaClaClap!")); // 4
// console.log(countClaps("ClClClaClaClaClap!")); // 6
// console.log(countClaps("CCClaClClap!Clap!ClClClap!")); // 9


// 44 How Many D's Are There?
// Create a function that counts how many D's are in a sentence.

function countDs(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "d" || str[i] === "D") {
            count++;
        }
    }
    return count;
}

// console.log(countDs("My friend Dylan got distracted in school.")); // 4
// console.log(countDs("Debris was scattered all over the yard.")); // 3
// console.log(countDs("The rodents hibernated in their den.")); // 3



// 45 Lowercase, Uppercase or Mixed?
// Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.

function getCase(str) {
    if (str === str.toLowerCase()) {
        return "lower";
    } else if (str === str.toUpperCase()) {
        return "upper"
    } else {
        return "mixed"
    }
}

// console.log(getCase("whisper...")); // "lower"
// console.log(getCase("SHOUT!")); // "upper"
// console.log(getCase("Indoor Voice")); // "mixed

//  46  => WordCharWord
// Create a function that will put the first argument, a character, between every word in the second argument, a string.

function add(s1, s2) {
    let res = "";
    let word = s2.split(" ");
 res += word[0] + s1 + word.slice(1)
    return res
}

// console.log(add("R", "javascript is fun")); // "javascriptRisRfun"
// console.log(add("#", "hello world!")); // "hello#world!"
// console.log(add("#", " ")); // "#"