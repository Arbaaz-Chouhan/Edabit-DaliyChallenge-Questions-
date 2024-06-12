// 1 Remove Null from an Array
// Create a function to remove all null values from an array.

// Examples
function removeNull(arr){
  let main = [];

  for(let i = 0; i<arr.length; i++){
    if(arr[i] == null){
        main.push()
    }else{
        main.push(arr[i])
    }
  }
  return main

}
// console.log(removeNull(["a", null, "b", null])); /// ➞ ["a", "b"]
// console.log(removeNull([null, null, null, null, null])); // ➞ []
// console.log(removeNull([7, 8, null, 9])); // ➞ [7, 8, 9]


// 2 Hurdle Jump
// Create a function that takes an array of hurdle heights and a jumper's jump height, and determine whether or not the hurdler can clear all the hurdles.

// A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.

// Examples
function hurdleJump(arr, item){
    if(arr.length  <= item){
        return true
    }else{
        return false

}
}
// console.log(hurdleJump([1, 2, 3, 4, 5],5)); //➞ true
// console.log(hurdleJump([5, 5, 3, 4, 5], 3)); // ➞ false
// console.log(hurdleJump([5, 4, 5, 6], 10)); // ➞ true
// console.log(hurdleJump([1, 2, 1], 1)); // ➞ false

// 3 Find the Smallest Number in an Array
// Create a function that takes an array of numbers and returns the smallest number in the set.

// Examples
function findSmallestNum(arr) {

    const small = Math.min(...arr);
    return small
}


// console.log(findSmallestNum([34, 15, 88, 2]));  //➞ 2
// console.log(findSmallestNum([34, -345, -1, 100])); //➞ -345
// console.log(findSmallestNum([-76, 1.345, 1, 0]));//➞ -76
// console.log(findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999])); // ➞ -0.9999
// console.log(findSmallestNum([7, 7, 7])); // ➞ 7

// 4 Return the First and Last Elements in an Array
// Create a function that takes an array of values and returns the first and last values in a new array.

// Examples
function firstLast(arr) {
    // first trik
    let main = [];

    const first = arr.shift();
    const last = arr.pop()
    main.push(first, last)

    return main
// secound trik
    return [arr[0] ,arr[arr.length -1]]
}
// console.log(firstLast([5, 10, 15, 20, 25])); // ➞ [5, 25]
// console.log(firstLast(["edabit", 13, null, false, true])); // ➞ ["edabit", true]
// console.log(firstLast([undefined, 4, "6", "hello", null])); // ➞ [undefined, null]


// 5 Sandwich Fillings
// Given a sandwich (as an array), return an array of fillings inside the sandwich. This involves ignoring the first and last elements.

// Examples
function getFillings(sandwich){
    let main = [];

    for(let i = 0; i<sandwich.length; i++){
        if(sandwich[i] == "bread"){
            main.push();
        }else{
            main.push(sandwich[i])
        }
       
    }
    return main
   
}
// console.log(getFillings(["bread", "ham", "cheese", "ham", "bread"]));  //➞ ["ham", "cheese", "ham"]
// console.log(getFillings(["bread", "sausage", "tomato", "bread"])); // ➞ ["sausage", "tomato"]
// console.log(getFillings(["bread", "lettuce", "bacon", "tomato", "bread"])); // ➞ ["lettuce", "bacon", "tomato"]

// 6 Difference of Max and Min Numbers in Array
// Create a function that takes an array and returns the difference between the biggest and smallest numbers.

// Examples
function diffMaxMin(arr){

    const biggest = Math.max(...arr);
    const small = Math.min(...arr);

   
    return biggest - small
    
}
// console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21])); // ➞ 82
// // Smallest number is -50, biggest is 32.
// console.log(diffMaxMin([44, 32, 86, 19])); // ➞ 67
// Smallest number is 19, biggest is 86.

// 7 Generate a Countdown of Numbers in an Array
// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

// Examples
function countdown(arr){
let main = [];
for(let i = arr; i >= 0; i--){
    main.push(i)
}
return main
}
// console.log(countdown(5)); // ➞ [5, 4, 3, 2, 1, 0]
// console.log(countdown(1)); // ➞ [1, 0]
// console.log(countdown(0)); // ➞ [0]

// 8 Find the Bug: Checking Even Numbers
// Create a function that takes in an array and returns true if all its values are even, and false otherwise.

// Not a big deal, your friend says. He writes the following code:

// function checkAllEven(arr) {
//   return arr.every(x % 2 === 0)
// }
// The code above leads to a Reference Error, with x being undefined. Fix the code above so that all tests pass:

// Examples
function checkAllEven(arr){
   return  arr.every(x => x % 2 === 0)
}
// console.log(checkAllEven([1, 2, 3, 4]));  //➞ false
// console.log(checkAllEven([2, 4, 6])); // ➞ true
// console.log(checkAllEven([5, 6, 8, 10])); // ➞ false
// console.log(checkAllEven([-2, 2, -2, 2])); // ➞ true

// 9 X and Y Coordinates
// Create a function that converts two arrays of x- and y- coordinates into an array of (x, y) coordinates.

// Examples
function convertCartesian(x,y){
let main = [];

for(let i = 0; i< x.length; i++){
    main.push([x[i], y[i]])
}
return main
}

// console.log(convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0]));
// // ➞ [[1, 5], [5, 8], [3, 9], [3, 1], [4, 0]]

// console.log(convertCartesian([9, 8, 3], [1, 1, 1]));
// // ➞ [[9, 1], [8, 1], [3, 1]]

// 10 Additive Inverse
// A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.

// Examples
function additiveInverse(arr){
    let main = [];

    for(let i = 0; i <arr.length; i++){
        if(+arr[i]){
            main.push(-arr[i])
            
        }else if (-arr[i]){
            main.push(+arr[i])
        }
       
    }
    return main
}
    // console.log(additiveInverse([5, -7, 8, 3])); // ➞ [-5, 7, -8, -3]
    // console.log(additiveInverse([1, 1, 1, 1, 1])); // ➞ [-1, -1, -1, -1, -1]
    // console.log(additiveInverse([-5, -25, 35]) ); //➞ [5, 25, -35]
