// 1 Arithmetic Progression
// In mathematics, an Arithmetic Progression (AP) is a sequence of numbers such that the difference between the consecutive terms is constant. Create a function that takes three arguments:

// First element of the sequence first
// Constant difference between the elements diff
// Total numbers in the sequence n
// Return the first n elements of the sequence with the given common difference diff. The final result should be a string of numbers, separated by comma and space.

// Examples

function arithmeticProgression(arr) {
  let str = "";
  for (let i = 0; i < arr[2]; i++) {
      str += arr[0] + i * arr[1];
      if (i !== arr[2] - 1) {
          str += ", ";
      } 
  }
  return str;
}

// console.log(arithmeticProgression([1, 2, 5]));  // ➞ "1, 3, 5, 7, 9"
// console.log(arithmeticProgression([1, 0, 5]));  // ➞ "1, 1, 1, 1, 1"
// console.log(arithmeticProgression([1, -3, 10]));  // ➞ "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"


// 2 Less Than 100 Array Remix
// Given an array of numbers, return true if the sum of the array is less than 100; otherwise return false.

// Examples
function arrayLessThan100(arr) {
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);

  for (let i = 0; i < arr.length; i++) {
    if (sum < 100) {
      return true;
    } else {
      return false
    }
  }
}
// console.log(arrayLessThan100([5, 57])); // ➞ true
// console.log(arrayLessThan100([77, 30]));  //➞ false
// console.log(arrayLessThan100([0])); //➞ true

// 3 Array Index
// Given a 2D-list of letters arr and a list of indexes idx, find the letters on given indexes and return as a string.

// arr = [
//   ["m", "u", "b"],
//   ["a", "s", "h"],
//   ["i", "r", "1"]
// ]

// idx = [1, 3, 5, 8]
// You have to find the characters in these indexes of the given list if you think of the indexes as:

// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// arrIndex(lst, idx) ➞ "mbsr"


// 4 Return Last Item
// Create a function that returns the last value of the last item in an array or string.

// Examples
function lastItem(lastValue){
    let main  = [];

    for(let i = lastValue.length -1; i< lastValue.length; i++ ){
        main.push(lastValue[i]);
    }
    return main
}
// console.log(lastItem([0, 4, 19, 34, 50, -9, 2]));  // ➞ 2
// console.log(lastItem("The quick brown fox jumped over the lazy dog")); //➞ "g"
// console.log(lastItem([]));  // ➞ undefined

// 5 Outlier Number
// Given an array of either entirely odd integers or entirely even integers except for a single Outlier Number, create a function to return this number.

// Examples
function outlierNumber(number){

return number.find(arr => arr >= 3)
}

// console.log(outlierNumber([2, 3, 4]) ); //➞ 3
// 2 and 4 are even numbers.
// 3 is an outlier number.

// console.log(outlierNumber([1, 2, 3]) ); //➞ 2
// console.log(outlierNumber([4, 1, 3, 5, 9]) ); //➞ 4

// 6 Move Zeroes
// Create a function that takes an array arr of numbers and moves all zeros to the end, preserving the order of the other elements.

// Examples
function moveZeros(arr){

}
// console.log(moveZeros([1, 0, 1, 2, 0, 1, 3])); // ➞ [1, 1, 2, 1, 3, 0, 0]
// console.log(moveZeros([0, 1, null, 2, false, 1, 0])); // ➞ [1, null, 2, false, 1, 0, 0]
// console.log(moveZeros(['a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]));  // ➞ ['a', 'b', 'c', 'd', 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// 7 Buggy Uppercase Counting
// In the Code tab is a function which is meant to return how many uppercase letters there are in a list of various words. Fix the list comprehension so that the code functions normally!

// Examples
function countUppercase(arr) {
  let countUpperCase = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === arr[i][j].toUpperCase()) {
        countUpperCase++;
      }
    }
  }
  return countUpperCase;
}
// console.log(countUppercase(["SOLO", "hello", "Tea", "wHat"])); // ➞ 6
// console.log(countUppercase(["little", "lower", "down"])); // ➞ 0
// console.log(countUppercase(["EDAbit", "Educate", "Coding"]) ); //➞ 5

// 8 Sum of Numbers in an Array
// Create a function that takes an array of numbers nums as an argument. Square each number in the array if the number is even and square root √ the number if it is odd. Return the sum of the new array rounded to two decimal places.

// Example:

// [2, 4, 9]  ➞ 23
// 2 ^ 2 + 4 ^ 2 + √9 = 4 + 16 + 3 = 23
// Examples
 
function oddSum(arr){
// let sum = 0;
let sum = arr.sqrt();
for(let i = 0; i <arr.length; i++){
    if(sum %2 ==0){
        return true;
    }else{
        return false;
    }
}
return sum

} 

// console.log(oddSum([11, 15, 6, 8, 9, 10]) );  //➞ [true, false, true, false, false]
// console.log(oddSum([12, 21, 5, 9, 65, 32]));  // ➞ [false, true, true, true, false]
// console.log(oddSum([1, 2, 3, 4, 5, 6])); //➞ [false, false, false, false, false]


// 9 String Pairs
// Create a function that takes a string str and returns an array of two-paired characters. If the string has an odd number of characters, add an asterisk * in the final pair.
// See the below examples for a better understanding:

// Examples
function stringPairs(str){
    let main = "";
    for(let i = 0; i<str.length; ){

    }
let b =  str.split("")
return b

}
// console.log(stringPairs("mubashir")); // ➞ ["mu", "ba", "sh", "ir"]
// console.log(stringPairs("edabit")); // ➞ ["ed", "ab", "it"]
// console.log(stringPairs("airforces") ); //➞ ["ai", "rf", "or", "ce", "s*"]


// Create a function to calculate how many characters in total are needed to make up the shape. You will be given an array of strings which make up a shape in the compiler (i.e. a square, a rectangle or a line).

// Examples

// function countCharacters(shap){
// let chat = 0;
// for(let i = 0; i<shap.length; i++){
//     chat += shap[i].length
// }
// return chat
// }

// console.log(countCharacters([
//   "###",
//   "###",
//   "###"
// ])); //➞ 9

// console.log(countCharacters([
//   "22222222",
//   "22222222",
// ])); //➞ 16

// console.log(countCharacters([
//   "------------------"
// ]) ); //➞ 18

// console.log(countCharacters([])); // ➞ 0
// console.log(countCharacters(["", ""]));// ➞ 0