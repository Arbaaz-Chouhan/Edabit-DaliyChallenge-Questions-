// 1 Where is Bob!?!
// Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array. If Bob is not in the array, return -1.

// Examples
function  findBob(names){
    for(let i = 0; i<names.length; i++ ){
        if(names[i] == "Bob"){
            return i
        }    
    } 
    return -1;

}


// console.log(findBob(["Jimmy", "Layla", "Bob"]) ); //➞ 2
// console.log(findBob(["Bob", "Layla", "Kaitlyn", "Patricia"])); // ➞ 0
// console.log(findBob(["Jimmy", "Layla", "James"])); /// ➞ -1

// 2Even and Last
// Given an array of integers arr, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

// If the sequence is empty, you should return 0.

// Examples
function evenLast(arr) {
let sum = 0;

for(let i = 0; i< arr.length; i++){
    if(i % 2  === 0){
        sum += arr[i]
    }

}

if(arr.length > 0){
    sum *= arr[arr.length -1]
}
return sum
}

// console.log(evenLast([2, 3, 4, 5])); // ➞ 30
// console.log(evenLast([1, 3, 3, 1, 10])); // ➞ 140
// console.log(evenLast([])); // ➞ 0

// 3 Find the Largest Number in an Array
// Create a function that takes an array of numbers. Return the largest number in the array.

// Examples
function findLargestNum(arr){
    //  let largestNum = Math.max(...arr);
    // return largestNum

    for(let i = 0; i<arr.length; i++){
        MaxNum = Math.max(arr[i]);
        return MaxNum
    }

}
// console.log(findLargestNum([4, 5, 1, 3])); /// ➞ 5
// console.log(findLargestNum([300, 200, 600, 150])); // ➞ 600
// console.log(findLargestNum([1000, 1001, 857, 1])); // ➞ 1001

// 4 Typing Game
// You're in the midst of creating a typing game.

// Create a function that takes in two arrays: the array of user-typed words, and the array of correctly-typed words and outputs an array containing 1s (correctly-typed words) and -1s (incorrectly-typed words).

// Inputs:
// User-typed Array: ["cat", "blue", "skt", "umbrells", "paddy"]
// Correct Array: ["cat", "blue", "sky", "umbrella", "paddy"]

// Output: [1, 1, -1, -1, 1]
// Examples
function correctStream(arr,item){
 let main = [];

 for(let i = 0; i<arr.length; i++){
    if(arr[i] == item[i]){
        main.push(1);
    }else{
        main.push(-1)
    }
 }
 return main
}

// console.log(correctStream(
//   ["it", "is", "find"],
//   ["it", "is", "fine"]
// ) ); //➞ [1, 1, -1]

// console.log(correctStream(
//   ["april", "showrs", "bring", "may", "flowers"],
//   ["april", "showers", "bring", "may", "flowers"]
// ) ); //➞ [1, -1, 1, 1, 1]

// 5 Next Element in Arithmetic Sequence
// Create a function that returns the next element in an arithmetic sequence. In an arithmetic sequence, each element is formed by adding the same constant to the previous element.

// Examples
function nextElement(arr){

}
// console.log(nextElement([3, 5, 7, 9])); // ➞ 11
// console.log(nextElement([-5, -6, -7])); // ➞ -8
// console.log(nextElement([2, 2, 2, 2, 2])); // ➞ 2

// 6 Capture the Rook
// Write a function that returns true if two rooks can attack each other, and false otherwise.

// Examples
function canCapture(arr){
for(let i = 0; i<arr.length; i++){
    if(arr[i] === arr[i]){
        return true;
    }else{
        return false
    }
}

}
// console.log(canCapture(["A8", "E8"])); // ➞ true
// console.log(canCapture(["A1", "B2"])); // ➞ false
// console.log(canCapture(["H4", "H3"])); // ➞ true
// console.log(canCapture(["F5", "C8"])); // ➞ false

// 7 Fix the Error / Comparing Arrays (Part #2)
// Create a function that returns true if two arrays sharing the same length have identical numerical values at every index, and false otherwise.


// Examples
function checkEquals(arr1 ,arr2){

for(let i = 0; i<arr2.length; i++){
    
    if(arr1[i] !== arr2[i]){
     return false;
    }
}
return true;

}
// console.log(checkEquals([1, 2], [1, 3]) ); //➞ false
// console.log(checkEquals([1, 2], [1, 2]) ); //➞ true
// console.log(checkEquals([4, 5, 6], [4, 5, 6]) ); //➞ true
// console.log(checkEquals([4, 7, 6], [4, 5, 6]) ); //➞ false
// console.log(checkEquals([1, 12], [11, 2])); // ➞ false


// 8 Word Endings
// Create a function that adds a string ending to each member in an array.

// Examples
function addEnding(arr1,item){
    let main = [];

    for(let  i = 0;i<arr1.length; i++ ){

        main.push(arr1[i]+ item)
    }
    return main
}

// console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"));
// // ➞ ["cleverly", "meekly", "hurriedly", "nicely"]

// console.log(addEnding(["new", "pander", "scoop"], "er"));
// // ➞ ["newer", "panderer", "scooper"]

// console.log(addEnding(["bend", "sharpen", "mean"], "ing"));
// // ➞ ["bending", "sharpening", "meaning"]


// 9 Array of Consecutive Numbers
// Implement a function that returns an array containing all the consecutive numbers in ascendant order from the given value low up to the given value high (bounds included).

// Examples
function getSequence(low,high){
    let main = [];

    for(let i = low; i<=high; i++){
        main.push(i);
    }
    return main
}
// console.log(getSequence(1, 5)); // ➞ [1, 2, 3, 4, 5]
// console.log(getSequence(98, 100) ); //➞ [98, 99, 100]
// console.log(getSequence(1000, 1000) ); //➞ [1000]

// 10 Negate the Array of Numbers
// Given an array of numbers, negate all elements contained within.

// Negating a positive value -+n will return -n, because all +'s are removed.
// Negating a negative value --n will return n, because the first - turns the second minus into a +.
// Examples
function negate(arr){
    let main = [];
    for(let i = 0; i <arr.length;  i++){
    if(arr[1]){
        main.push(-arr[i])
    }else if( - arr[1]){
        main.push(+arr[i])
    }
    }
    return main
}
// console.log(negate([1, 2, 3, 4])); // ➞ [-1, -2, -3, -4]
// console.log(negate([-1, 2, -3, 4])); // ➞ [1, -2, 3, -4]
// console.log(negate([])); // ➞ []

// 11 Return the Four Letter Strings
// Create a function that takes an array of strings and returns the words that are exactly four letters.

// Examples
function isFourLetters(arr){
  let main = [];

  for(let i = 0; i<arr.length; i++){
    if(arr[i].length === 4){
        main.push(arr[i])
    }
  }
  return main
}
// console.log(isFourLetters(["Tomato", "Potato", "Pair"])); // ➞ ["Pair"]
// console.log(isFourLetters(["Kangaroo", "Bear", "Fox"])); // ➞ ["Bear"]
// console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]) ); //➞ ["Ryan", "Matt"]

// 12 Maximum Difference
// Given an array of integers, return the difference between the largest and smallest integers in the array.

// Examples
function difference(arr) {

    const max = Math.max(...arr);
    const min = Math.min(...arr);

    return max - min

}
// console.log(difference([10, 15, 20, 2, 10, 6])); // ➞ 18
// // 20 - 2 = 18
// console.log(difference([-3, 4, -9, -1, -2, 15]));// ➞ 24
// // 15 - (-9) = 24
// console.log(difference([4, 17, 12, 2, 10, 2])); // ➞ 15

// 14 Eliminate Odd Numbers within an Array
// Create a function that takes an array of numbers and returns only the even values.

// Examples
function noOdds(arr){
    let main = [];
    for(let i = 0; i <arr.length; i++){
        if(arr[i] % 2 == 0){
            main.push(arr[i])
        }
    }
    return main
}
// console.log(noOdds([1, 2, 3, 4, 5, 6, 7, 8]) ); //➞ [2, 4, 6, 8]
// console.log(noOdds([43, 65, 23, 89, 53, 9, 6])); /// ➞ [6]
// console.log(noOdds([718, 991, 449, 644, 380, 440]));  //➞ [718, 644, 380, 440]

// 15 Multiply by Length
// Create a function to multiply all of the values in an array by the amount of values in the given array.

// Examples
function multiplyByLength(arr){
    let main = [];

    for(let i = 0; i <arr.length; i++){
        main.push(arr.length * arr[i]);
    }
    return main
    }
    // console.log(multiplyByLength([2, 3, 1, 0]) ); // ➞ [8, 12, 4, 0]
    // console.log(multiplyByLength([4, 1, 1])); // ➞ ([12, 3, 3])
    // console.log(multiplyByLength([1, 0, 3, 3, 7, 2, 1])); // ➞  [7, 0, 21, 21, 49, 14, 7]
    // console.log(multiplyByLength([0]) ); //➞ ([0])
