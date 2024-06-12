//1 Less Than, Greater Than
// Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.

// Examples
// arrBetween(3, 8, [1, 5, 95, 0, 4, 7]) ➞ [5, 4, 7]
// arrBetween(1, 10, [1, 10, 25, 8, 11, 6]) ➞ [8, 6]
// arrBetween(7, 32, [1, 2, 3, 78]) ➞ []

function arrBetween(num1,num2,arr){
    // return  arr.filter((elm)=> elm >num1 && elm <num2)
    let main = [];
    for(let i =0; i <arr.length; i++){
        if(arr[i] >num1 && arr[i] <num2 ){
        main.push(arr[i])
        }
    }
    return main
}

// console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));
// console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]) );
// console.log(arrBetween(7, 32, [1, 2, 3, 78]) );

//2 50-30-20 Strategy
// The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.
// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

// Examples
// fiftyThirtyTwenty(10000) ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }
// fiftyThirtyTwenty(50000) ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }
// fiftyThirtyTwenty(13450) ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }

function fiftyThirtyTwenty(ati){
    let need = ati * 0.5;
    let want = ati * 0.3;
    let saving = ati * 0.2;

    return {
        Needs : need,
        Wants : want,
        Savings : saving,
    }
}
// console.log(fiftyThirtyTwenty(10000)); 
// console.log(fiftyThirtyTwenty(50000));
// console.log(fiftyThirtyTwenty(13450)); 


//3 Similar Bread
// Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

// Examples

function hasSameBread(sandwiches1 , sandwiches2){
    return sandwiches1[0] == sandwiches2[0];
}
// console.log(hasSameBread(
//   ["white bread", "lettuce", "white bread"],
//   ["white bread", "tomato", "white bread"]
// )); // ➞ true

// console.log(hasSameBread(
//   ["brown bread", "chicken", "brown bread"],
//   ["white bread", "chicken", "white bread"]
// )); //➞ false

// console.log(hasSameBread(
//   ["toast", "cheese", "toast"],
//   ["brown bread", "cheese", "toast"]
// ));  //➞ false

//4 Array of Strings to Array of Numbers
// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// Example:

// ["1", "3", "3.6"] ➞ [1, 3, 3.6]
// Examples

function toNumberArray(arr){
// return arr.map((item)=> Number(item))
let main  = []
for(let i = 0; i< arr.length; i++){
    main.push(Number(arr[i]));

}
return main
}
// console.log(toNumberArray(["9.4", "4.2"]));  // ➞ [9.4, 4.2]
// console.log(toNumberArray(["91", "44"]) );  //➞ [91, 44]
// console.log(toNumberArray(["9.5", "8.8"]));  //➞ [9.5, 8.8]

//5 Convert All Array Items to String
// Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

// Examples
function parseArray(arr){
// return arr.map(str => String(str));
let main = [];
for(let i = 0; i <arr.length; i++){
    main.push(String(arr[i]));
}
return main
}
// console.log(parseArray([1, 2, "a", "b"]));  //➞ ["1", "2", "a", "b"]
// console.log(parseArray(["abc", 123, "def", 456]));  //➞ ["abc", "123", "def", "456"]
// console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"])); // ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]
// console.log(parseArray([]));  //➞ []

//6 Return Types
// Create a function that takes an array and returns the types of values (data types) in a new array.

// Examples

function arrayValuesTypes(arr){
    // return arr.map(item =>  typeof(item))
    let main = [];
    for(let i= 0; i < arr.length; i++){
    main.push(typeof(arr[i]))
    }
    return main
}
// console.log(arrayValuesTypes([1, 2, "null", []])); //➞ ["number", "number", "string", "object"]
// console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));  //➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]
// console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]));  //➞ ["number", "string", "string", "object", "object", "boolean", "number"]

// 7 Squares and Cubes
// Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.

// Examples
function checkSquareAndCube(square1){
return Math.sqrt(square1[0]) === Math.cbrt(square1[1])
}
// console.log(checkSquareAndCube([4, 8]) );   // ➞  true
// console.log(checkSquareAndCube([16, 48]) ); // ➞ false
// console.log(checkSquareAndCube([9, 27])  ); //➞ true


//8 ES6: Destructuring Arrays IV
// There is an easy way to assign to array values to the nth index by using rest parameter syntax.

// var [head, tail] = [1, 2, 3, 4]

// console.log(head) // outputs  1
// console.log(tail) // outputs 2
// But how could I make tail = [2, 3, 4] instead of tail = 2?
