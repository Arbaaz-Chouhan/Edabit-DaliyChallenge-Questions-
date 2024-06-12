// 12 => Return the Index of the First Vowel
// Create a function that returns the index of the first vowel in a string.

function firstVowel(str) {
    let arr = str.split("")
    let Vowels = "aioueAIOUE";
    for (let i = 0; i < arr.length; i++) {
        if (Vowels.includes(arr[i])) {
            return i
        }
    }
}

// console.log(firstVowel("apple")); // 0
// console.log(firstVowel("hello")); // 1
// console.log(firstVowel("STRAWBERRY")); // 3
// console.log(firstVowel("pInEaPPLe")); // 

// 13 => Is it True?
// In this challenge you will be given a relation between two numbers, written as a string. Write a function that determines if the relation is true or false.

function isTrue(num) {
    return eval(num);
}

// console.log(isTrue("2=2")); //true
// console.log(isTrue("8<7")); //false
// console.log(isTrue("5=13")); // false
// console.log(isTrue("15>4")); // true


// 14 => Say "Hello" Say "Bye"
// Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.

function sayHelloBye(str, num) {
    if (num === 1) {
        return "Hello" + " " + str
    } else {
        return "Bye" + " " + str
    }
}

// console.log(sayHelloBye("alon", 1)); //"Hello Alon"
// console.log(sayHelloBye("Tomi", 0)); //"Bye Tomi"
// console.log(sayHelloBye("jose", 0)); //"Bye Jose"


// 15 => Capitalize by ASCII
// Create a function that takes a string as input and capitalizes a letter if its ASCII code is even and returns its lower case version if its ASCII code is odd.

function asciiCapitalize(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        let charCodeAt = str[i].charCodeAt(0);
        if (charCodeAt % 2 === 0) {
            res += str[i].toUpperCase();
        } else {
            res += str[i].toLowerCase()
        }
    }
    return res
}

// console.log(asciiCapitalize("to be or not to be!")); // "To Be oR NoT To Be!"
// console.log(asciiCapitalize("THE LITTLE MERMAID")); // "THe LiTTLe meRmaiD"
// console.log(asciiCapitalize("Oh what a beautiful morning.")); // "oH wHaT a BeauTiFuL moRNiNg."


