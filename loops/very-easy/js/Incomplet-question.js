// 1 Reverse Coding Challenge #3
// This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.

// Your task is to create a function that, when fed the inputs below, produces the sample outputs shown.

// Examples

// console.log(mysteryFunc([5, 7, 8, 2, 1], 2)); // ➞ [1, 1, 0, 0, 1]
// console.log(mysteryFunc([9, 8, 16, 47], 4)); // ➞ [1, 0, 0, 3]
// console.log(mysteryFunc([17, 11, 99, 55, 23, 1], 5 )); //➞ [2, 1, 4, 0, 3, 1]
// console.log(mysteryFunc([6, 1], 7)); // ➞ [6, 1]
// console.log(mysteryFunc([3, 2, 9], 3 )); //➞ [0, 2, 0]
// console.log(mysteryFunc([48, 22, 0, 19, 33, 100], 10 )); //➞ [8, 2, 0, 9, 3, 0]

// 2 Say Hello to Guests
// In this exercise you will have to:

// Take a list of names.
// Add "Hello" to every name.
// Make one big string with all greetings.
// The solution should be one string with a comma in between every "Hello (Name)".

// Examples

// console.log(greetPeople(["Joe"])); // ➞ "Hello Joe"
// console.log(greetPeople(["Angela", "Joe"])); // ➞ "Hello Angela, Hello Joe"
// console.log(greetPeople(["Frank", "Angela", "Joe"])); // ➞ "Hello Frank, Hello Angela, Hello Joe"

// 3  Convert a Number to Base-2
// Create a function that returns a base-2 (binary) re presentation of a base-10 (decimal) string number. To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.

// Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value, value of an 8 bit console.log(binary num); //bers are (256, 128, 64, 32, 16, 8, 4, 2, 1).

// Examples

// console.log(binary(1) ); //➞ "1"
// // 1*1 = 1

// console.log(binary(5) ); //➞ "101"
// // 1*1 + 1*4 = 5

// console.log(binary(10)); // ➞ "1010"
// // 1*2 + 1*8 = 10


// 4 Is the Average of All Elements a Whole Number?
// Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

// Examples

// console.log(isAvgWhole([1, 3]) ); //➞ true
// console.log(isAvgWhole([1, 2, 3, 4])); // ➞ false
// console.log(isAvgWhole([1, 5, 6])); // ➞ true
// console.log(isAvgWhole([1, 1, 1]) ); //➞ true
// console.log(isAvgWhole([9, 2, 2, 5])); // ➞ false


// 5 Find the Mean of All Digits
// Create a function that returns the mean of all digits.

// Examples

// console.log(mean(42) );//➞ 3
// console.log(mean(12345));// ➞ 3
// console.log(mean(666) );//➞ 6


// 6 Who's in First Place?
// Create a function that takes a string road and returns the car that's in first place. The road will be made of "=", and cars will be represented by letters in the alphabet.

// Examples

// console.log(firstPlace("====b===O===e===U=A==") ); //➞ "A"
// console.log(firstPlace("e==B=Fe")  ); //➞ "e"
// console.log(firstPlace("proeNeoOJGnfl") ); // ➞ "l"
 
// 7 Filter Repeating Character Strings
// Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).

// Examples

// console.log(identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]));
// //➞ ["aaaaaa", "d", "eeee"]
// console.log(identicalFilter(["88", "999", "22", "545", "133"]));
// //➞ ["88", "999", "22"]
// console.log(identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]));
//➞ []

// 8  Find the Second Occurrence of "zip" in a String
// Write a function that returns the position of the second occurrence of "zip" in a string, or -1 if it does not occur at least twice. Your code should be general enough to pass every possible case where "zip" can occur in a string.

// Examples

// console.log(findZip("all zip files are zipped")); // ➞ 18
// console.log(findZip("all zip files are compressed")); // ➞ -1


// 9  Reverse Coding Challenge #6
// This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.

// Your task is to create a function that, when fed the inputs below, produces the sample outputs shown.

// Examples

// console.log(mysteryFunc(152)); // ➞ 10
// console.log(mysteryFunc(832)); // ➞ 48
// console.log(mysteryFunc(19) ); //➞ 9
// console.log(mysteryFunc(133)); // ➞ 9


// 10 Harshad Number
// A number is said to be Harshad if it's exactly divisible by the sum of its digits. Create a function that determines whether a number is a Harshad or not.

// Examples

// console.log(isHarshad(75)); //➞ false
// // 7 + 5 = 12
// // 75 is not exactly divisible by 12
// console.log(isHarshad(171)); // ➞ true
// // 1 + 7 + 1 = 9
// // 9 exactly divides 171
// console.log(isHarshad(481)); // ➞ true
// console.log(isHarshad(89)); //➞ false
// console.log(isHarshad(516)); // ➞ true
// console.log(isHarshad(200)); // ➞ true


// 11 One Button Messaging Device
// Imagine a messaging device with only one button. For the letter A, you press the button one time, for E, you press it five times, for G, it's pressed seven times, etc, etc.

// Write a function that takes a string (the message) and returns the total number of times the button is pressed.

// Examples

// console.log(howManyTimes("abde") ); //➞ 12
// console.log(howManyTimes("azy")); // ➞ 52
// console.log(howManyTimes("qudusayo") ); //➞ 123

// 12  Compare by ASCII Codes
// Create a function that compares two words based on the sum of their ASCII codes and returns the word with the smaller ASCII sum.


// Examples
function asciiSort(arr) {
  

}
// console.log(asciiSort(["hey", "man"])); // ➞ "man"
// ["h", "e", "y"] ➞ sum([104, 101, 121]) ➞ 326
// ["m", "a", "n"] ➞ sum([109, 97, 110]) ➞ 316
// console.log(asciiSort(["majorly", "then"])); // ➞ "then"
// console.log(asciiSort(["victory", "careless"]) ); //➞ "victory"


// 13 Iterated Square Root
// The iterated square root of a number is the number of times the square root function must be applied to bring the number strictly under 2.

// Given an integer, return its iterated square root. Return "invalid" if it is negative.

// Examples


// console.log(iSqrt(1) ); //➞ 0
// console.log(iSqrt(2) ); //➞ 1
// console.log(iSqrt(7) ); //➞ 2
// console.log(iSqrt(27) );//➞ 3
// console.log(iSqrt(256));// ➞ 4
// console.log(iSqrt(-1) ); //➞ "invalid"

//  14Longest Sequence of Consecutive Zeroes
// Write a function that returns the longest sequence of consecutive zeroes in a binary string.

// Examples
function longestZero(s) {
  
}
// console.log(longestZero("01100001011000")); // ➞ "0000"
// console.log(longestZero("100100100")); // ➞ "00"
// console.log(longestZero("11111")); // ➞ ""

//15  Convert to Hex
// Create a function that takes a string's characters as ASCII and returns each character's hexadecimal value as a string.

// Examples
function toHex(str) {



}
// console.log(toHex("hello world")); // ➞ "68 65 6c 6c 6f 20 77 6f 72 6c 64"
// console.log(toHex("Big Boi")); // ➞ "42 69 67 20 42 6f 69"
// console.log(toHex("Marty Poppinson")); // ➞ "4d 61 72 74 79 20 50 6f 70 70 69 6e 73 6f 6e"

// 16  Burglary Series (02): Most Valuable Item
// You call your spouse to inform his/her most precious item is gone! Given an object of stolen items, return the most expensive item on the list.

// Examples

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


// 17 The Bottom of the Matrix
// This challenge concerns square matrices (same number of rows and columns) as the below example illustrates:

// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// The entries in the diagonal line from the top left to the bottom right form the main diagonal of the matrix. In this case, 1,5,9 form the main diagonal.

// Write a function that returns the matrix obtained by replacing the entries above the main diagonal with 0s.

// For example, for the matrix above you should return:

// [
//   [1, 0, 0],
//   [4, 5, 0],
//   [7, 8, 9]
// ]
// Examples
function lowerTriang(matrix) {


}
// console.log(lowerTriang([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ])); // ➞ [
//   [1, 0, 0],
//   [4, 5, 0],
//   [7, 8, 9]
// ]

// console.log(lowerTriang([
//   [5, 7],
//   [7, 9]
// ]) ); //➞ [
//   [5, 0],
//   [7, 9]
// ]

// console.log(lowerTriang([
//   [1, 8, 8, 1],
//   [2, 7, 7, 2],
//   [3, 6, 6, 3],
//   [4, 5, 5, 4]
// ])); // ➞ [
//   [1, 0, 0, 0],
//   [2, 7, 0, 0],
//   [3, 6, 6, 0],
//   [4, 5, 5, 4]
// ]
