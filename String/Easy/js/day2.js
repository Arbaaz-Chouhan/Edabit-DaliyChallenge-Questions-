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

console.log(isTrue("2=2")); //true
console.log(isTrue("8<7")); //false
console.log(isTrue("5=13")); // false
console.log(isTrue("15>4")); // true