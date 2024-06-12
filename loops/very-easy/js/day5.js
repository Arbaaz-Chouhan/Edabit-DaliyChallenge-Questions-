// 1 Say Hello to Guests
// In this exercise you will have to:

// Take a list of names.
// Add "Hello" to every name.
// Make one big string with all greetings.
// The solution should be one string with a comma in between every "Hello (Name)".

function greetPeople(names) {
    let res = "";
    for (let i = 0; i < names.length; i++) {
        res += "Hello" + " " + names[i];
        if (i < names.length - 1) {
            res += ","
        }
    }
    return res
}
// console.log(greetPeople(["Joe"])); // ➞ "Hello Joe"
// console.log(greetPeople(["Angela", "Joe"])); // ➞ "Hello Angela, Hello Joe"
// console.log(greetPeople(["Frank", "Angela", "Joe"])); // ➞ "Hello Frank, Hello Angela, Hello Joe"

// 2 How Many Digits?
// Given an integer n. Your task is to find how many digits this integer contains without using String or Array methods!

function sumDigits(n) {
    let digits = n.toString();
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        if (parseInt(digits.length)) {
            sum++;
        }

    }
    return sum;
}
// console.log(sumDigits(100) );//➞ 3
// console.log(sumDigits(1000));// ➞ 4
// console.log(sumDigits(1) );//➞ 1


// 3 Convert a Number to Base-2
// Create a function that returns a base-2 (binary) re presentation of a base-10 (decimal) string number. To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.

// Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value, value of an 8 bit console.log(binary num); //bers are (256, 128, 64, 32, 16, 8, 4, 2, 1).


function binary(n) {

}
// console.log(binary(1) ); //➞ "1"
// // 1*1 = 1

// console.log(binary(5) ); //➞ "101"
// // 1*1 + 1*4 = 5

// console.log(binary(10)); // ➞ "1010"
// // 1*2 + 1*8 = 10

// 4 Sum of Resistance in Series Circuits
// When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is:

// RT = R1 + R2 + R3 ...
// Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).

function seriesResistance(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i]
    }
    res += "ohms";
    return res
}
// console.log(seriesResistance([1, 5, 6, 3])); //➞ "15 ohms"
// console.log(seriesResistance([16, 3.5, 6])); // ➞ "25.5 ohms"
// console.log(seriesResistance([0.5, 0.5])); //➞ "1.0 ohm"


//5 Count Instances of a Character in a String
// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

function charCount(myChar, str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {

        if (myChar === str[i]) {
            count++
        }

    }
    return count;
}
// console.log(charCount("a", "edabit") ); //➞ 1
// console.log(charCount("c", "Chamber of secrets") ); //➞ 1
// console.log(charCount("b", "big fat bubble")); // ➞ 4

// 6 Filter out Strings from an Array
// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

function filterArray(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        const currentEle = parseInt(arr[i]);
        if (Number.isNaN(currentEle) === false) {
            res.push(currentEle);
        }

    }
    return res
}
// console.log(filterArray([1, 2, "a", "b"])); // ➞ [1, 2]
// console.log(filterArray([1, "a", "b", 0, 15])); // ➞ [1, 0, 15]
// console.log(filterArray([1, 2, "aasf", "1", "123", 123]) ); //➞ [1, 2, 123]

// 7 Sum of Cubes
// Create a function that takes in an array of numbers and returns the sum of its cubes.

function sumOfCubes(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const currentEle = Math.pow(arr[i], 3);
        sum += currentEle;
    }
    return sum
}
// console.log(sumOfCubes([1, 5, 9]) );//➞ 855
// // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// console.log(sumOfCubes([3, 4, 5]) );//➞ 216
// console.log(sumOfCubes([2]));// ➞ 8
// console.log(sumOfCubes([]));// ➞ 0

// 8 How Many Vowels?
// Create a function that takes a string and returns the number (count) of vowels contained within it.

function countVowels(str1) {
    let res = 0;
    let str2 = "aeiou";

    for (let i = 0; i < str1.length; i++) {

        if (str2.includes(str1[i])) {
            res++;
        }
    }
    return res;
}
// console.log(countVowels("Celebration")); // ➞ 5
// console.log(countVowels("Palm")); // ➞ 1
// console.log(countVowels("Prediction") ); //➞ 4

// 8 9 Burglary Series (10): Calculate Difference
// The insurance guy calls again and apologizes. They found another policy made by your spouse, but this one is limited to cover a particular maximum in losses (for example, 50,000€). You send a bill to your spouse for the difference you lost.

// Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.

function calculateDifference(obj, limit) {
    let res = 0;
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        const currentEle = keys[i];
        const currentVal = obj[keys[i]];
        res += currentVal;
    }
    return res - limit
}
// console.log(calculateDifference({ "baseball bat": 20 }, 5)); // ➞ 15
// console.log(calculateDifference({ skate: 10, painting: 20 }, 19)); //➞ 11
// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));// ➞ 1


// 10 Is the Average of All Elements a Whole Number?
// Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

function isAvgWhole(arr) {
    let Average = 0;
    for (let i = 0; i < arr.length; i++) {
        Average += arr[i];
        if (Average % arr.length === 0) {
            return true
        }
    }
    return false
}

// console.log(isAvgWhole([1, 3])); //➞ true
// console.log(isAvgWhole([1, 2, 3, 4])); // ➞ false
// console.log(isAvgWhole([1, 5, 6])); // ➞ true
// console.log(isAvgWhole([1, 1, 1])); //➞ true
// console.log(isAvgWhole([9, 2, 2, 5])); // ➞ false
