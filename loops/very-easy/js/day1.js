// 1 Buggy Code (Part 5)
// Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

function printArray(num) {
    let result = [];

    for (let i = 1; i <= num; i++) {
        result.push(i)

    }
    return result
}
// console.log(printArray(1)); // ➞ [1]
// console.log(printArray(3)); // ➞ [1, 2, 3]
// console.log(printArray(6)); // ➞ [1, 2, 3, 4, 5, 6]

// 2 Century Crisis
// Scientists have discovered that in four decades, the world will EXPLODE! It will also take three decades to make a spaceship to travel to a new planet that can hold the entire world population.

// You must calculate the number of people there will be in three decades from now.

// The variable population is the world population now.
// Assume that every month, someone gives birth to more people n.
// Return the number of people there will be when the spaceship is complete.


function futurePeople(population, n) {
    for (let i = 0; i < 360; i++) {
        population += n;
    }
    return population
}
// console.log(futurePeople(256, 2) ); //➞ 976
// console.log(futurePeople(3248, 6)); // ➞ 5408
// console.log(futurePeople(5240, 3)); // ➞ 6320

// 3 To the Power of _____
// Create a function that takes a base number and an exponent number and returns the calculation.

function calculateExponent(base, power) {
    let p = 1;
    for (let i = 0; i < power; i++) {
        p *= base
    }
    return p
}
//  console.log(calculateExponent(5, 5)); // ➞ 3125
//  console.log(calculateExponent(10, 10)); // ➞ 10000000000
//  console.log(calculateExponent(3, 3)); // ➞ 27


// 4 Find the Index
// Create a function that takes an array and a string as arguments and returns the index of the string.


function findIndex(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == item) {
            return i
        }
    }
    return -1
}
// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ); //➞ 2
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue") ); //➞ 1
// console.log(findIndex(["a", "g", "y", "d"], "d")); // ➞ 3
// console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")); // ➞ 0

// 5 Find the Index (Part 1)
// Create a function that finds the index of a given item.

function search(num1, num2) {
    for (let i = 0; i < num1.length; i++) {
        if (num1[i] == num2) {
            return i
        }
    }
    return -1
}
// console.log(search([1, 5, 3], 5) ); //➞ 1
// console.log(search([9, 8, 3], 3) ); //➞ 2
// console.log(search([1, 2, 3], 4) ); //➞ -1

//   6 Word Numbers!
// Create a function that returns a number, based on the string provided. Here is a list of all digits:

function word(obj) {
    let String = {
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
        "zero": 10,
    }
    return String[obj]
}
// // Example
// console.log(word("one") ); //➞ 1
// console.log(word("two") ); //➞ 2
// console.log(word("nine")); // ➞ 9


// 7 Return Types
// Create a function that takes an array and returns the types of values (data types) in a new array.

function arrayValuesTypes(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(typeof arr[i])
    }
    return result
}
// console.log(arrayValuesTypes([1, 2, "null", []]));
// //➞ ["number", "number", "string", "object"]

// console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));
// //➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

// console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]));
// //➞ ["number", "string", "string", "object", "object", "boolean", "number"]

//  8 Recreating the String.length Property
//Create a function which returns the length of a string, WITHOUT using String.length property.

function length(str) {
    let len = 0;
    for (let i = 0; i < str.length; i++) {
        len += 1
    }
    return len
}
// console.log(length("Hello World") ); //➞ 11
// console.log(length("Edabit") ); //➞ 6
// console.log(length("wash your hands!") ); //➞ 16

// 9 Destructuring Assignment (Ignoring Values)
// You can assign variables from arrays like this:


let arr = [1, 2, 8]
 
let[first,secound,last] = arr; 

// console.log(first)// ➞ outputs 1
// console.log(last) //➞ outputs 8
// Using Destructuring Assignment (check the Resources tab), your task is to unpack the arrays writeyourcodehere into three variables, first, a variable to ignore all middle values and la


//  10 Get the Sum of All Array Elements
// Create a function that takes an array and returns the sum of all numbers in the array.

function getSumOfItems(arr) {
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
// console.log(getSumOfItems([2, 7, 4])); // ➞ 13
// console.log(getSumOfItems([45, 3, 0])); // ➞ 48
// console.log(getSumOfItems([-2, 84, 23])); // ➞ 105'

// 11 Add a Consecutive List of Numbers
// Write a function that takes the last number of a consecutive list of numbers and returns the total of all numbers up to and including it.

function addUpTo(num) {
    let total = 0;

    for(let i = 1; i<=num; i++){
        total += i
    }
     return total 
}
// console.log(addUpTo(3)); // ➞ 6
// // 1 + 2 + 3 = 6

// console.log(addUpTo(10)); //➞ 55
// // 1 + 2 + 3 + ... + 10 = 55

// console.log(addUpTo(7)); // ➞ 28
// // 1 + 2 + 3 + ... + 7 = 28

// 12 Add the Index
// Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...

function addIndexes(arr){
    let added = []; 
    for(let i = 0; i<arr.length; i++){
added.push(arr[i] + i)
    }
    return added
}
// console.log(addIndexes([0, 0, 0, 0, 0])); // ➞ [0, 1, 2, 3, 4]
// console.log(addIndexes([1, 2, 3, 4, 5])); // ➞ [1, 3, 5, 7, 9]
// console.log(addIndexes([5, 4, 3, 2, 1])); // ➞ [5, 5, 5, 5, 5]

// 13 Sum of the Odd Numbers
// Create a function which returns the total of all odd numbers up to and including n. n will be given as an odd number.


function addOddToN(n){
  let total = 0; 
  
  for(let  i = 1; i<= n; i++ ){
    if(i % 2 !== 0){
        total += i;
    }
  }

return total

}
// console.log(addOddToN(5)); // ➞ 9
// // 1 + 3 + 5 = 9
// console.log(addOddToN(13)); // ➞ 49
// console.log(addOddToN(47));// 576
// 14 Summing the Squares
// Create a function that takes a number n and returns the sum of all square numbers up to and including n.

// squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14 

function squaresSum(n){
let sum = 0;

for(let i = 1; i<= n; i++){
  sum += i * i
}
return sum
}
console.log(squaresSum(3) ); //➞ 14
console.log(squaresSum(12)); // ➞ 650
console.log(squaresSum(13)); // ➞ 819
