// 1 Get the Sum of All Array Elements
// Create a function that takes an array and returns the sum of all numbers in the array.

// Exames
function getSumOfItems(arr){
//  let total = arr.reduce((a,b)=>{
//     return a + b;
//  })
//  return total
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum +=  arr[i];
    }
    return sum
}
// console.log(getSumOfItems([2, 7, 4]) ); //➞ 13
// console.log(getSumOfItems([45, 3, 0])); // ➞ 48
// console.log(getSumOfItems([-2, 84, 23])); //➞ 105


// 2 Sum Greater Than Five
// Write a function that returns the sum of elements greater than 5, in the given array .

// // Examples,

function sumFive(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 5) {
        sum += arr[i];
      }
    }
    return sum;
  }
  
//   console.log(sumFive([1, 5, 20, 30, 4, 9, 18])); // ➞ 77
//   console.log(sumFive([1, 2, 3, 4])); // ➞ 0
//   console.log(sumFive([10, 12, 28, 47, 55, 100])); // ➞ 252
  
//3 Invert an Array
// Create a function that takes an array of numbers arr and returns an inverted array.

// // // Examples
function invertArray(arr){
let main = [];
for(let i = 0; i<arr.length; i++){
    main.push(-arr[i]);
}
return main
}
// console.log(invertArray([1, 2, 3, 4, 5]) );   // ➞ [-1, -2, -3, -4, -5]
// console.log(invertArray([1, -2, 3, -4, 5]));  // ➞ [-1, 2, -3, 4, -5]
// console.log(invertArray([]) );  //➞ [] 

//4 Get the File Name
// Create a function that returns the selected filename from a path. Include the extension in your answer.

// Examples
function getFilename(arrayValuesTypes){
    const res = arr.split("/");
    const  return1 = res.slice(-1);
    return return1 ;

}
// console.log(getFilename("C:/Projects/pil_tests/ascii/edabit.txt")   ); //➞  "edabit.txt"
// console.log(getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3") ); //➞ "Beethoven_5.mp3"
// console.log(getFilename("ffprobe.exe"));  //➞ "ffprobe. exe"


//5 ven or Odd?
// Given an array of integers, determine whether the sum of its elements is even or odd.
// The return value should be a string ("odd" or "even").
// If the input array is empty, consider it as an array with a zero ([0]).

// Examples
function evenOrOdd(arr){
    if( arr % 2 == 0){
        console.log("even");
    }else{
        console.log("odd");
    }
    return arr
}
// console.log(evenOrOdd([0]));// ➞ "even"
// console.log(evenOrOdd([1]));// ➞ "odd"
// console.log(evenOrOdd([]) );//➞ "even"
// console.log(evenOrOdd([0, 1, 5]));  //➞ "even"

//6 Array From a Range of Numbers
// Create a function that returns an array of all the integers between two given numbers start and end.

// Examples

function rangeOfNum(start,end){
    let main =[];
    for(let i = start+1; i< end; i++){
        main.push(i)
    }
    return main
}
// console.log(rangeOfNum(2, 4) );//➞ [3]
// console.log(rangeOfNum(5, 9) );//➞ [6, 7, 8]
// console.log(rangeOfNum(2, 11));// ➞ [3, 4, 5, 6, 7, 8, 9, 10]

//7 Skip the Drinks with Too Much Sugar
// Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:

// cola
// fanta
// Examples
function skipTooMuchSugarDrinks(drinks) {
    // Use the filter method to remove "fanta" from the array
    return drinks.filter(function(drink) {
        if(drink !== 'fanta' && drink !== 'cola'){
            return drink
        };
    });
}

// console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"])); // ➞ ["water"]
// console.log(skipTooMuchSugarDrinks(["fanta", "cola"]));          // ➞ []
// console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"])); // ➞ ["lemonade", "beer", "water"]

//8 Add the Index
// Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...

// Examples

function addIndexes(arr){
    let main = [];
    for(let i = 0; i < arr.length; i++){
        main.push(arr[i] + i);
    }
    return main
} 
// console.log(addIndexes([0, 0, 0, 0, 0])); /// ➞ [0, 1, 2, 3, 4]
// console.log(addIndexes([1, 2, 3, 4, 5])); /// ➞ [1, 3, 5, 7, 9]
// console.log(addIndexes([5, 4, 3, 2, 1])); /// ➞ [5, 5, 5, 5, 5]


// 9 Filter Strings from Array
// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

// Examples

function filterArray(arr){
    let res = [];
 for(let i = 0; i<arr.length; i++){
    let num =  parseInt(arr[i]);
    if(!isNaN(num)){
        res.push(num);
    }
 }
 return res
}
// console.log(filterArray([1, 2, 3, "a", "b", 4]));   //➞ [1, 2, 3, 4]
// console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ); // ➞ [0, 1729]
// console.log(filterArray(["Nothing", "here"])); // ➞ []


// 10 True Ones, False Zeros
// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

// Examples
function integerBoolean(arr){

    let main = [];
    for(let i = 0; i < arr.length; i++){
        main.push(arr[i] == 1);
    }

    return main;
}
// console.log(integerBoolean("100101"));   //➞ [true, false, false, true, false, true]
// console.log(integerBoolean("10"));   //➞ [true, false]
// console.log(integerBoolean("001") );  //➞ [false, false, true]

//11The Forbidden Letter
// Given a letter and an array of words, return whether the letter does not appear in any of the words.

// Examples
function forbiddenLetter(item,arr){

for(let i = 0; i<arr.length; i++){
let charAt =  item.charAt(i);
if(arr[i].includes(charAt)){
    return false;
}
}
return true;
//  return arr[1] == item[1]


}
console.log(forbiddenLetter("r", ["rock", "paper", "scissors"])); // ➞ false
console.log(forbiddenLetter("a", ["spoon", "fork", "knife"])); // ➞ true
console.log(forbiddenLetter("m", [])); //➞ true

